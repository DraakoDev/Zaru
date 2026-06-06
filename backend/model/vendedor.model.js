import { pool } from '../db/conexion.js'
import { INSERTAR_PERSONA, SELECCIONAR_PERSONA, ACTUALIZAR_PERSONA } from '../db/queries/persona.queries.js'
import { INSERTAR_VENDEDOR, SELECCIONAR_VENDEDORES, SELECCIONAR_VENDEDOR, ACTUALIZAR_VENDEDOR } from '../db/queries/vendedor.queries.js'

export const crearVendedorDB = async (personaData, vendedorData) => {
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

    // 3. Crear registro de vendedor
    await conexion.query(INSERTAR_VENDEDOR, [
      personaData.cedula,
      vendedorData.registro_empresa_nit
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

export const listarVendedoresDB = async () => {
  const query = `
    SELECT p.*, v.registro_empresa_nit, e.nombre as empresa_nombre
    FROM vendedor v
    JOIN persona p ON v.cedula = p.cedula
    JOIN empresa e ON v.registro_empresa_nit = e.nit
  `
  return await pool.query(query)
}

export const obtenerVendedorPorCedulaDB = async (cedula) => {
  const query = `
    SELECT p.*, v.registro_empresa_nit, e.nombre as empresa_nombre
    FROM vendedor v
    JOIN persona p ON v.cedula = p.cedula
    JOIN empresa e ON v.registro_empresa_nit = e.nit
    WHERE v.cedula = ?
  `
  const data = await pool.query(query, [cedula])
  return data[0]
}

export const actualizarVendedorDB = async (cedula, personaData, vendedorData) => {
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

    // 2. Actualizar datos de vendedor (empresa asignada)
    await conexion.query(ACTUALIZAR_VENDEDOR, [
      vendedorData.registro_empresa_nit,
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
