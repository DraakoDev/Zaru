import { 
  crearDescuentoDB, 
  listarDescuentosDB, 
  obtenerDescuentoPorIdDB, 
  actualizarDescuentoDB 
} from '../model/descuento.model.js'

export const createDescuento = async (req, res) => {
  try {
    const data = req.body
    if (!data.nombre || !data.porcentaje) {
      return res.status(400).json({ success: false, message: 'Nombre y porcentaje son requeridos' })
    }
    const result = await crearDescuentoDB(data)
    res.status(201).json({ success: true, message: 'Descuento creado exitosamente', id: result.insertId })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

export const getDescuentos = async (req, res) => {
  try {
    const descuentos = await listarDescuentosDB()
    res.status(200).json({ success: true, data: descuentos })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

export const getDescuento = async (req, res) => {
  try {
    const { id } = req.params
    const descuento = await obtenerDescuentoPorIdDB(id)
    if (!descuento) {
      return res.status(404).json({ success: false, message: 'Descuento no encontrado' })
    }
    res.status(200).json({ success: true, data: descuento })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

export const updateDescuento = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body
    const result = await actualizarDescuentoDB(id, data)
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Descuento no encontrado para actualizar' })
    }
    
    res.status(200).json({ success: true, message: 'Descuento actualizado exitosamente' })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}
