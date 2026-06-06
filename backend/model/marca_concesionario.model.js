import { pool } from '../db/conexion.js'
import { 
  INSERTAR_MARCA_CONCESIONARIO, 
  SELECCIONAR_MARCAS_CONCESIONARIO, 
  SELECCIONAR_MARCAS_POR_CONCESIONARIO,
  ACTUALIZAR_MARCA_CONCESIONARIO
} from '../db/queries/marca_concesionario.queries.js'

export const asignarMarcaAConcesionarioDB = async (concesionario_nit, marca_nombre) => {
  return await pool.query(INSERTAR_MARCA_CONCESIONARIO, [concesionario_nit, marca_nombre])
}

export const listarTodasLasRelacionesDB = async () => {
  return await pool.query(SELECCIONAR_MARCAS_CONCESIONARIO)
}

export const listarMarcasDeConcesionarioDB = async (nit) => {
  return await pool.query(SELECCIONAR_MARCAS_POR_CONCESIONARIO, [nit])
}

export const actualizarRelacionMarcaDB = async (nuevaMarca, nit, viejaMarca) => {
  return await pool.query(ACTUALIZAR_MARCA_CONCESIONARIO, [nuevaMarca, nit, viejaMarca])
}
