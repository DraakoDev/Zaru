import { pool } from '../db/conexion.js'
import { 
  INSERTAR_EXTRA_VENTA, 
  SELECCIONAR_EXTRAS_VENTA, 
  ACTUALIZAR_EXTRA_VENTA 
} from '../db/queries/extra_venta.queries.js'

export const crearExtraVentaDB = async (data) => {
  return await pool.query(INSERTAR_EXTRA_VENTA, [
    data.venta_id,
    data.equipamiento_id,
    data.precio
  ])
}

export const listarExtrasVentaDB = async () => {
  const query = `
    SELECT ev.*, v.numero_bastidor, a.nombre as accesorio_nombre
    FROM extra_venta ev
    JOIN venta v ON ev.venta_id = v.id
    JOIN equipamiento eq ON ev.equipamiento_id = eq.id
    JOIN accesorio a ON eq.accesorio_id = a.id
  `
  return await pool.query(query)
}

export const listarExtrasDeVentaDB = async (venta_id) => {
  const query = `
    SELECT ev.*, a.nombre as accesorio_nombre
    FROM extra_venta ev
    JOIN equipamiento eq ON ev.equipamiento_id = eq.id
    JOIN accesorio a ON eq.accesorio_id = a.id
    WHERE ev.venta_id = ?
  `
  return await pool.query(query, [venta_id])
}

export const actualizarExtraVentaDB = async (venta_id, equipamiento_id, precio) => {
  return await pool.query(ACTUALIZAR_EXTRA_VENTA, [precio, venta_id, equipamiento_id])
}
