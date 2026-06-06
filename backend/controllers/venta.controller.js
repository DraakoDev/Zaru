import { 
  crearVentaDB, 
  listarVentasDB, 
  obtenerVentaPorIdDB, 
  actualizarVentaDB 
} from '../model/venta.model.js'

export const createVenta = async (req, res) => {
  try {
    const data = req.body
    const result = await crearVentaDB(data)
    res.status(201).json({ success: true, message: 'Venta registrada exitosamente', id: result.insertId })
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      if (error.message.includes('numero_bastidor')) {
        return res.status(400).json({ success: false, message: 'Este automóvil ya ha sido vendido' })
      }
      if (error.message.includes('matricula_asignada')) {
        return res.status(400).json({ success: false, message: 'Esta matrícula ya está asignada' })
      }
    }
    res.status(400).json({ success: false, error: error.message })
  }
}

export const getVentas = async (req, res) => {
  try {
    const ventas = await listarVentasDB()
    res.status(200).json({ success: true, data: ventas })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

export const getVenta = async (req, res) => {
  try {
    const { id } = req.params
    const venta = await obtenerVentaPorIdDB(id)
    if (!venta) {
      return res.status(404).json({ success: false, message: 'Venta no encontrada' })
    }
    res.status(200).json({ success: true, data: venta })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

export const updateVenta = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body
    const result = await actualizarVentaDB(id, data)
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Venta no encontrada para actualizar' })
    }
    
    res.status(200).json({ success: true, message: 'Venta actualizada exitosamente' })
  } catch (error) {
    res.status(400).json({ success: false, error: error.message })
  }
}
