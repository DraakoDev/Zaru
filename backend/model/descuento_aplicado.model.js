import { pool } from '../db/conexion.js'
import { 
  APLICAR_DESCUENTO, 
  SELECCIONAR_DESCUENTOS_APLICADOS, 
  ACTUALIZAR_DESCUENTO_APLICADO 
} from '../db/queries/descuento_aplicado.queries.js'

export const aplicarDescuentoDB = async (automovil_id, descuento_id) => {
  return await pool.query(APLICAR_DESCUENTO, [automovil_id, descuento_id])
}

export const listarDescuentosAplicadosDB = async () => {
  const query = `
    SELECT da.*, d.nombre as descuento_nombre, d.porcentaje, a.modelo_id, m.nombre as modelo_nombre
    FROM descuento_aplicado da
    JOIN descuento d ON da.descuento_id = d.id
    JOIN automovil a ON da.automovil_id = a.numero_bastidor
    JOIN modelo m ON a.modelo_id = m.id
  `
  return await pool.query(query)
}

export const listarDescuentosDeAutomovilDB = async (numero_bastidor) => {
  const query = `
    SELECT da.*, d.nombre as descuento_nombre, d.porcentaje
    FROM descuento_aplicado da
    JOIN descuento d ON da.descuento_id = d.id
    WHERE da.automovil_id = ?
  `
  return await pool.query(query, [numero_bastidor])
}

export const actualizarDescuentoAplicadoDB = async (automovil_id, nuevo_descuento_id, viejo_descuento_id) => {
  return await pool.query(ACTUALIZAR_DESCUENTO_APLICADO, [nuevo_descuento_id, automovil_id, viejo_descuento_id])
}
