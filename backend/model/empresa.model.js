import { pool } from '../db/conexion.js'
import { INSERTAR_EMPRESA, SELECCIONAR_EMPRESAS, SELECCIONAR_EMPRESA } from '../db/queries/empresa.queries.js'
import { REGISTRAR_EMPRESA, SELECCIONAR_REGISTROS_EMPRESA } from '../db/queries/registro.empresa.queries.js'
import { INSERTAR_CONCESIONARIO, SELECCIONAR_CONCESIONARIO } from '../db/queries/concesionario.queries.js'
import { INSERTAR_SERVICIO_OFICIAL } from '../db/queries/soficial.queries.js'

export const registrarEmpresaCompleta = async (data) => {
  let conexion
  try {
    conexion = await pool.getConnection()
    await conexion.beginTransaction()

    // 1. Insertar en tabla empresa
    await conexion.query(INSERTAR_EMPRESA, [
      data.nit,
      data.nombre,
      data.direccion,
      data.telefono,
      data.correo
    ])

    // 2. Insertar en tabla registro_empresa
    await conexion.query(REGISTRAR_EMPRESA, [
      data.nit,
      data.fecha_registro || new Date().toISOString().slice(0, 10),
      data.tipo_empresa
    ])

    // 3. Insertar en tabla específica según tipo_empresa
    if (data.tipo_empresa === 'concesionario') {
      if (!data.tipo_automoviles) {
        throw new Error('El tipo de automóviles es requerido para un concesionario')
      }
      await conexion.query(INSERTAR_CONCESIONARIO, [
        data.nit,
        data.tipo_automoviles
      ])
    } else if (data.tipo_empresa === 'servicio oficial') {
      if (!data.concesionario_nit) {
        throw new Error('El NIT del concesionario al que sirve es requerido para un servicio oficial')
      }
      
      // Verificar que el concesionario existe
      const concesionario = await conexion.query(SELECCIONAR_CONCESIONARIO, [data.concesionario_nit])
      if (concesionario.length === 0) {
        throw new Error('El concesionario especificado no existe')
      }

      await conexion.query(INSERTAR_SERVICIO_OFICIAL, [
        data.nit,
        data.concesionario_nit
      ])
    } else {
      throw new Error('Tipo de empresa no válido. Debe ser "concesionario" o "servicio oficial"')
    }

    await conexion.commit()
    return { success: true, message: 'Empresa registrada exitosamente', nit: data.nit }
  } catch (error) {
    if (conexion) await conexion.rollback()
    console.error('Error en registrarEmpresaCompleta:', error)
    
    if (error.code === 'ER_DUP_ENTRY') {
      throw new Error('Ya existe una empresa registrada con este NIT')
    }
    
    throw error
  } finally {
    if (conexion) conexion.release()
  }
}

export const listarEmpresas = async () => {
  return await pool.query(SELECCIONAR_EMPRESAS)
}

export const obtenerEmpresaPorNit = async (nit) => {
  const data = await pool.query(SELECCIONAR_EMPRESA, [nit])
  return data[0]
}
