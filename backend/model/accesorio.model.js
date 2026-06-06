import { pool } from '../db/conexion.js'
import { INSERTAR_ACCESORIO, SELECCIONAR_ACCESORIOS, SELECCIONAR_ACCESORIO, ACTUALIZAR_ACCESORIO } from '../db/queries/accesorio.queries.js'

export const crearAccesorioDB = async (nombre) => {
  return await pool.query(INSERTAR_ACCESORIO, [nombre])
}

export const listarAccesoriosDB = async () => {
  return await pool.query(SELECCIONAR_ACCESORIOS)
}

export const obtenerAccesorioPorIdDB = async (id) => {
  const data = await pool.query(SELECCIONAR_ACCESORIO, [id])
  return data[0]
}

export const actualizarAccesorioDB = async (id, nombre) => {
  return await pool.query(ACTUALIZAR_ACCESORIO, [nombre, id])
}
