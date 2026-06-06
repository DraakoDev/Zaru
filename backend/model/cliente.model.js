import { pool } from '../db/conexion.js'
import { INSERTAR_PERSONA, SELECCIONAR_PERSONA, ACTUALIZAR_PERSONA } from '../db/queries/persona.queries.js'
import { INSERTAR_CLIENTE, SELECCIONAR_CLIENTES, SELECCIONAR_CLIENTE, ACTUALIZAR_CLIENTE } from '../db/queries/cliente.queries.js'

export const crearClienteDB = async (personaData, clienteData) => {
  let conexion
  try {
    conexion = await pool.getConnection()
    await conexion.beginTransaction()

    // 1. Verificar si la persona ya existe
    const [personaExiste] = await conexion.query(SELECCIONAR_PERSONA, [personaData.cedula])
    
    if (!personaExiste) {
      // 2. Crear persona si no existe
      await conexion.query(INSERTAR_PERSONA, [
        personaData.cedula,
        personaData.nombre,
        personaData.apellido,
        personaData.direccion,
        personaData.telefono,
        personaData.correo
      ])
    }

    // 3. Crear registro de cliente
    await conexion.query(INSERTAR_CLIENTE, [
      personaData.cedula,
      clienteData.cantidad_compras || 0
    ])

    await conexion.commit()
    return { success: true }
  } catch (error) {
    if (conexion) await conexion.rollback()
    throw error
  } finally {
    if (conexion) conexion.release()
  }
}

export const listarClientesDB = async () => {
  const query = `
    SELECT p.*, c.cantidad_compras
    FROM cliente c
    JOIN persona p ON c.cedula = p.cedula
  `
  return await pool.query(query)
}

export const obtenerClientePorCedulaDB = async (cedula) => {
  const query = `
    SELECT p.*, c.cantidad_compras
    FROM cliente c
    JOIN persona p ON c.cedula = p.cedula
    WHERE c.cedula = ?
  `
  const data = await pool.query(query, [cedula])
  return data[0]
}

export const actualizarClienteDB = async (cedula, personaData, clienteData) => {
  let conexion
  try {
    conexion = await pool.getConnection()
    await conexion.beginTransaction()

    // 1. Actualizar datos personales
    await conexion.query(ACTUALIZAR_PERSONA, [
      personaData.nombre,
      personaData.apellido,
      personaData.direccion,
      personaData.telefono,
      personaData.correo,
      cedula
    ])

    // 2. Actualizar datos de cliente
    await conexion.query(ACTUALIZAR_CLIENTE, [
      clienteData.cantidad_compras,
      cedula
    ])

    await conexion.commit()
    return { success: true }
  } catch (error) {
    if (conexion) await conexion.rollback()
    throw error
  } finally {
    if (conexion) conexion.release()
  }
}
