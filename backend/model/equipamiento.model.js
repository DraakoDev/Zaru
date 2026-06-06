import { pool } from '../db/conexion.js'
import { INSERTAR_EQUIPAMIENTO, SELECCIONAR_EQUIPAMIENTOS, SELECCIONAR_EQUIPAMIENTO, ACTUALIZAR_EQUIPAMIENTO } from '../db/queries/equipamiento.queries.js'

export const crearEquipamientoDB = async (data) => {
  return await pool.query(INSERTAR_EQUIPAMIENTO, [
    data.modelo_id,
    data.accesorio_id,
    data.es_extra,
    data.precio
  ])
}

export const listarEquipamientosDB = async () => {
  const query = `
    SELECT e.*, m.nombre as modelo_nombre, m.marca_nombre, a.nombre as accesorio_nombre
    FROM equipamiento e
    JOIN modelo m ON e.modelo_id = m.id
    JOIN accesorio a ON e.accesorio_id = a.id
  `
  return await pool.query(query)
}

export const obtenerEquipamientoPorIdDB = async (id) => {
  const query = `
    SELECT e.*, m.nombre as modelo_nombre, m.marca_nombre, a.nombre as accesorio_nombre
    FROM equipamiento e
    JOIN modelo m ON e.modelo_id = m.id
    JOIN accesorio a ON e.accesorio_id = a.id
    WHERE e.id = ?
  `
  const data = await pool.query(query, [id])
  return data[0]
}

export const actualizarEquipamientoDB = async (id, data) => {
  return await pool.query(ACTUALIZAR_EQUIPAMIENTO, [
    data.modelo_id,
    data.accesorio_id,
    data.es_extra,
    data.precio,
    id
  ])
}
