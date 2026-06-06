import { pool } from '../db/conexion.js'
import { INSERTAR_COLOR, SELECCIONAR_COLORES, SELECCIONAR_COLOR, ACTUALIZAR_COLOR } from '../db/queries/color.queries.js'

export const crearColorDB = async (nombre) => {
  return await pool.query(INSERTAR_COLOR, [nombre])
}

export const listarColoresDB = async () => {
  return await pool.query(SELECCIONAR_COLORES)
}

export const obtenerColorPorIdDB = async (id) => {
  const data = await pool.query(SELECCIONAR_COLOR, [id])
  return data[0]
}

export const actualizarColorDB = async (id, nombre) => {
  return await pool.query(ACTUALIZAR_COLOR, [nombre, id])
}
