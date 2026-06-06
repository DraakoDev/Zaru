import { pool } from '../db/conexion.js'
import { INSERTAR_MARCA, SELECCIONAR_MARCAS, SELECCIONAR_MARCA, ACTUALIZAR_MARCA } from '../db/queries/marca.queries.js'

export const crearMarcaDB = async (nombre) => {
  return await pool.query(INSERTAR_MARCA, [nombre])
}

export const listarMarcasDB = async () => {
  return await pool.query(SELECCIONAR_MARCAS)
}

export const obtenerMarcaPorNombreDB = async (nombre) => {
  const data = await pool.query(SELECCIONAR_MARCA, [nombre])
  return data[0]
}

export const actualizarMarcaDB = async (nombreNuevo, nombreAntiguo) => {
  return await pool.query(ACTUALIZAR_MARCA, [nombreNuevo, nombreAntiguo])
}
