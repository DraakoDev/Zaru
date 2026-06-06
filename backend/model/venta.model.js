import { pool } from '../db/conexion.js'
import { INSERTAR_VENTA, SELECCIONAR_VENTAS, SELECCIONAR_VENTA, ACTUALIZAR_VENTA } from '../db/queries/venta.queries.js'

export const crearVentaDB = async (data) => {
  return await pool.query(INSERTAR_VENTA, [
    data.numero_bastidor,
    data.cedula_vendedor,
    data.fecha_entrega,
    data.fecha_venta || new Date().toISOString().slice(0, 10),
    data.matricula_asignada,
    data.es_encargo,
    data.metodo_pago,
    data.precio_venta
  ])
}

export const listarVentasDB = async () => {
  const query = `
    SELECT v.*, p.nombre as vendedor_nombre, p.apellido as vendedor_apellido, m.nombre as modelo_nombre, m.marca_nombre
    FROM venta v
    JOIN persona p ON v.cedula_vendedor = p.cedula
    JOIN automovil a ON v.numero_bastidor = a.numero_bastidor
    JOIN modelo m ON a.modelo_id = m.id
  `
  return await pool.query(query)
}

export const obtenerVentaPorIdDB = async (id) => {
  const query = `
    SELECT v.*, p.nombre as vendedor_nombre, p.apellido as vendedor_apellido, m.nombre as modelo_nombre, m.marca_nombre
    FROM venta v
    JOIN persona p ON v.cedula_vendedor = p.cedula
    JOIN automovil a ON v.numero_bastidor = a.numero_bastidor
    JOIN modelo m ON a.modelo_id = m.id
    WHERE v.id = ?
  `
  const data = await pool.query(query, [id])
  return data[0]
}

export const actualizarVentaDB = async (id, data) => {
  return await pool.query(ACTUALIZAR_VENTA, [
    data.numero_bastidor,
    data.cedula_vendedor,
    data.fecha_entrega,
    data.fecha_venta,
    data.matricula_asignada,
    data.es_encargo,
    data.metodo_pago,
    data.precio_venta,
    id
  ])
}
