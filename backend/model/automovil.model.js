import { pool } from '../db/conexion.js'
import { INSERTAR_AUTOMOVIL, SELECCIONAR_AUTOMOVILES, SELECCIONAR_AUTOMOVIL, ACTUALIZAR_AUTOMOVIL } from '../db/queries/automovil.queries.js'

export const crearAutomovilDB = async (data) => {
  return await pool.query(INSERTAR_AUTOMOVIL, [
    data.numero_bastidor,
    data.modelo_id,
    data.estado,
    data.registro_empresa_nit
  ])
}

export const listarAutomovilesDB = async () => {
  const query = `
    SELECT a.*, m.nombre as modelo_nombre, m.marca_nombre, m.precio as precio_base, e.nombre as empresa_nombre
    FROM automovil a
    JOIN modelo m ON a.modelo_id = m.id
    JOIN empresa e ON a.registro_empresa_nit = e.nit
  `
  return await pool.query(query)
}

export const obtenerAutomovilPorBastidorDB = async (numero_bastidor) => {
  const query = `
    SELECT a.*, m.nombre as modelo_nombre, m.marca_nombre, m.precio as precio_base, e.nombre as empresa_nombre
    FROM automovil a
    JOIN modelo m ON a.modelo_id = m.id
    JOIN empresa e ON a.registro_empresa_nit = e.nit
    WHERE a.numero_bastidor = ?
  `
  const data = await pool.query(query, [numero_bastidor])
  return data[0]
}

export const actualizarAutomovilDB = async (numero_bastidor, data) => {
  return await pool.query(ACTUALIZAR_AUTOMOVIL, [
    data.modelo_id,
    data.estado,
    data.registro_empresa_nit,
    numero_bastidor
  ])
}
