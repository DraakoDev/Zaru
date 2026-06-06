import { pool } from '../db/conexion.js'
import { INSERTAR_DESCUENTO, SELECCIONAR_DESCUENTOS, SELECCIONAR_DESCUENTO, ACTUALIZAR_DESCUENTO } from '../db/queries/descuento.queries.js'

export const crearDescuentoDB = async (data) => {
  return await pool.query(INSERTAR_DESCUENTO, [
    data.nombre,
    data.porcentaje,
    data.descripcion
  ])
}

export const listarDescuentosDB = async () => {
  return await pool.query(SELECCIONAR_DESCUENTOS)
}

export const obtenerDescuentoPorIdDB = async (id) => {
  const data = await pool.query(SELECCIONAR_DESCUENTO, [id])
  return data[0]
}

export const actualizarDescuentoDB = async (id, data) => {
  return await pool.query(ACTUALIZAR_DESCUENTO, [
    data.nombre,
    data.porcentaje,
    data.descripcion,
    id
  ])
}
