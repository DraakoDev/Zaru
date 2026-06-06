import { 
  crearExtraVentaDB, 
  listarExtrasVentaDB, 
  listarExtrasDeVentaDB, 
  actualizarExtraVentaDB 
} from '../model/extra_venta.model.js'

export const createExtraVenta = async (req, res) => {
  try {
    const data = req.body
    await crearExtraVentaDB(data)
    res.status(201).json({ success: true, message: 'Extra de venta registrado exitosamente' })
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ success: false, message: 'Este extra ya está registrado para esta venta' })
    }
    res.status(400).json({ success: false, error: error.message })
  }
}

export const getExtrasVenta = async (req, res) => {
  try {
    const data = await listarExtrasVentaDB()
    res.status(200).json({ success: true, data })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

export const getExtrasPorVenta = async (req, res) => {
  try {
    const { venta_id } = req.params
    const data = await listarExtrasDeVentaDB(venta_id)
    res.status(200).json({ success: true, data })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

export const updateExtraVenta = async (req, res) => {
  try {
    const { venta_id, equipamiento_id } = req.params
    const { precio } = req.body
    
    const result = await actualizarExtraVentaDB(venta_id, equipamiento_id, precio)
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Extra de venta no encontrado para actualizar' })
    }
    res.status(200).json({ success: true, message: 'Precio de extra actualizado exitosamente' })
  } catch (error) {
    res.status(400).json({ success: false, error: error.message })
  }
}
