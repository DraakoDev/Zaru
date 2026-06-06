import { 
  aplicarDescuentoDB, 
  listarDescuentosAplicadosDB, 
  listarDescuentosDeAutomovilDB, 
  actualizarDescuentoAplicadoDB 
} from '../model/descuento_aplicado.model.js'

export const createDescuentoAplicado = async (req, res) => {
  try {
    const { automovil_id, descuento_id } = req.body
    await aplicarDescuentoDB(automovil_id, descuento_id)
    res.status(201).json({ success: true, message: 'Descuento aplicado exitosamente al automóvil' })
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ success: false, message: 'Este descuento ya está aplicado a este automóvil' })
    }
    res.status(400).json({ success: false, error: error.message })
  }
}

export const getDescuentosAplicados = async (req, res) => {
  try {
    const data = await listarDescuentosAplicadosDB()
    res.status(200).json({ success: true, data })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

export const getDescuentosPorAutomovil = async (req, res) => {
  try {
    const { numero_bastidor } = req.params
    const data = await listarDescuentosDeAutomovilDB(numero_bastidor)
    res.status(200).json({ success: true, data })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

export const updateDescuentoAplicado = async (req, res) => {
  try {
    const { numero_bastidor, descuento_id_viejo } = req.params
    const { descuento_id_nuevo } = req.body
    
    const result = await actualizarDescuentoAplicadoDB(numero_bastidor, descuento_id_nuevo, descuento_id_viejo)
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Relación no encontrada para actualizar' })
    }
    res.status(200).json({ success: true, message: 'Descuento aplicado actualizado exitosamente' })
  } catch (error) {
    res.status(400).json({ success: false, error: error.message })
  }
}
