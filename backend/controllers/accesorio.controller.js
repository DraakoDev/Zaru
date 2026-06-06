import { crearAccesorioDB, listarAccesoriosDB, obtenerAccesorioPorIdDB, actualizarAccesorioDB } from '../model/accesorio.model.js'

export const createAccesorio = async (req, res) => {
  try {
    const { nombre } = req.body
    if (!nombre) return res.status(400).json({ success: false, message: 'El nombre del accesorio es requerido' })
    
    const result = await crearAccesorioDB(nombre)
    res.status(201).json({ success: true, message: 'Accesorio creado exitosamente', id: result.insertId })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

export const getAccesorios = async (req, res) => {
  try {
    const accesorios = await listarAccesoriosDB()
    res.status(200).json({ success: true, data: accesorios })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

export const getAccesorio = async (req, res) => {
  try {
    const { id } = req.params
    const accesorio = await obtenerAccesorioPorIdDB(id)
    if (!accesorio) return res.status(404).json({ success: false, message: 'Accesorio no encontrado' })
    
    res.status(200).json({ success: true, data: accesorio })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

export const updateAccesorio = async (req, res) => {
  try {
    const { id } = req.params
    const { nombre } = req.body
    
    if (!nombre) return res.status(400).json({ success: false, message: 'El nuevo nombre del accesorio es requerido' })
    
    const result = await actualizarAccesorioDB(id, nombre)
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Accesorio no encontrado para actualizar' })
    }
    
    res.status(200).json({ success: true, message: 'Accesorio actualizado exitosamente' })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}
