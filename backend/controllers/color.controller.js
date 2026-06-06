import { crearColorDB, listarColoresDB, obtenerColorPorIdDB, actualizarColorDB } from '../model/color.model.js'

export const createColor = async (req, res) => {
  try {
    const { nombre } = req.body
    if (!nombre) return res.status(400).json({ success: false, message: 'El nombre del color es requerido' })
    
    const result = await crearColorDB(nombre)
    res.status(201).json({ success: true, message: 'Color creado exitosamente', id: result.insertId })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

export const getColores = async (req, res) => {
  try {
    const colores = await listarColoresDB()
    res.status(200).json({ success: true, data: colores })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

export const getColor = async (req, res) => {
  try {
    const { id } = req.params
    const color = await obtenerColorPorIdDB(id)
    if (!color) return res.status(404).json({ success: false, message: 'Color no encontrado' })
    
    res.status(200).json({ success: true, data: color })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

export const updateColor = async (req, res) => {
  try {
    const { id } = req.params
    const { nombre } = req.body
    
    if (!nombre) return res.status(400).json({ success: false, message: 'El nuevo nombre del color es requerido' })
    
    const result = await actualizarColorDB(id, nombre)
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Color no encontrado para actualizar' })
    }
    
    res.status(200).json({ success: true, message: 'Color actualizado exitosamente' })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}
