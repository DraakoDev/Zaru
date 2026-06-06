import { pool } from '../db/conexion.js'
import { INSERTAR_MODELO, SELECCIONAR_MODELOS, SELECCIONAR_MODELO, ACTUALIZAR_MODELO } from '../db/queries/modelo.queries.js'
import { INSERTAR_FICHA_TECNICA, SELECCIONAR_FICHA_TECNICA, ACTUALIZAR_FICHA_TECNICA } from '../db/queries/ficha_tecnica.queries.js'

export const crearModeloConFichaDB = async (modeloData, fichaData) => {
  let conexion
  try {
    conexion = await pool.getConnection()
    await conexion.beginTransaction()

    // 1. Insertar modelo
    const resultModelo = await conexion.query(INSERTAR_MODELO, [
      modeloData.marca_nombre,
      modeloData.nombre,
      modeloData.precio
    ])

    const modeloId = resultModelo.insertId

    // 2. Insertar ficha técnica vinculada al modelo
    await conexion.query(INSERTAR_FICHA_TECNICA, [
      modeloId,
      fichaData.cilindraje,
      fichaData.potencia,
      fichaData.torque,
      fichaData.motor,
      fichaData.combustible,
      fichaData.carroceria,
      fichaData.color_id
    ])

    await conexion.commit()
    return { success: true, id: modeloId }
  } catch (error) {
    if (conexion) await conexion.rollback()
    throw error
  } finally {
    if (conexion) conexion.release()
  }
}

export const listarModelosDB = async () => {
  // Una consulta con JOIN para traer modelo y ficha técnica juntos
  const query = `
    SELECT m.*, f.cilindraje, f.potencia, f.torque, f.motor, f.combustible, f.carroceria, c.nombre as color_nombre
    FROM modelo m
    JOIN ficha_tecnica f ON m.id = f.modelo_id
    JOIN color c ON f.color_id = c.id
  `
  return await pool.query(query)
}

export const obtenerModeloCompletoDB = async (id) => {
  const query = `
    SELECT m.*, f.cilindraje, f.potencia, f.torque, f.motor, f.combustible, f.carroceria, f.color_id, c.nombre as color_nombre
    FROM modelo m
    JOIN ficha_tecnica f ON m.id = f.modelo_id
    JOIN color c ON f.color_id = c.id
    WHERE m.id = ?
  `
  const data = await pool.query(query, [id])
  return data[0]
}

export const actualizarModeloConFichaDB = async (id, modeloData, fichaData) => {
  let conexion
  try {
    conexion = await pool.getConnection()
    await conexion.beginTransaction()

    // 1. Actualizar modelo
    await conexion.query(ACTUALIZAR_MODELO, [
      modeloData.marca_nombre,
      modeloData.nombre,
      modeloData.precio,
      id
    ])

    // 2. Actualizar ficha técnica
    await conexion.query(ACTUALIZAR_FICHA_TECNICA, [
      fichaData.cilindraje,
      fichaData.potencia,
      fichaData.torque,
      fichaData.motor,
      fichaData.combustible,
      fichaData.carroceria,
      fichaData.color_id,
      id
    ])

    await conexion.commit()
    return { success: true }
  } catch (error) {
    if (conexion) await conexion.rollback()
    throw error
  } finally {
    if (conexion) conexion.release()
  }
}
