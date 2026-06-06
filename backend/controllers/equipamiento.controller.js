import { 
  crearEquipamientoDB, 
  listarEquipamientosDB, 
  obtenerEquipamientoPorIdDB, 
  actualizarEquipamientoDB 
} from '../model/equipamiento.model.js'

export const createEquipamiento = async (req, res) => {
  try {
    const data = req.body
    const result = await crearEquipamientoDB(data)
    res.status(201).json({ success: true, message: 'Equipamiento creado exitosamente', id: result.insertId })
  } catch (error) {
    res.status(400).json({ success: false, error: error.message })
  }
}

export const getEquipamientos = async (req, res) => {
  try {
    const equipamientos = await listarEquipamientosDB()
    res.status(200).json({ success: true, data: equipamientos })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

export const getEquipamiento = async (req, res) => {
  try {
    const { id } = req.params
    const equipamiento = await obtenerEquipamientoPorIdDB(id)
    if (!equipamiento) {
      return res.status(404).json({ success: false, message: 'Equipamiento no encontrado' })
    }
    res.status(200).json({ success: true, data: equipamiento })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

export const updateEquipamiento = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body
    const result = await actualizarEquipamientoDB(id, data)
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Equipamiento no encontrado para actualizar' })
    }
    
    res.status(200).json({ success: true, message: 'Equipamiento actualizado exitosamente' })
  } catch (error) {
    res.status(400).json({ success: false, error: error.message })
  }
}
