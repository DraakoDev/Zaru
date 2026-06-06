import { 
  crearAutomovilDB, 
  listarAutomovilesDB, 
  obtenerAutomovilPorBastidorDB, 
  actualizarAutomovilDB 
} from '../model/automovil.model.js'

export const createAutomovil = async (req, res) => {
  try {
    const data = req.body
    await crearAutomovilDB(data)
    res.status(201).json({ success: true, message: 'Automóvil registrado exitosamente' })
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ success: false, message: 'El número de bastidor ya está registrado' })
    }
    res.status(400).json({ success: false, error: error.message })
  }
}

export const getAutomoviles = async (req, res) => {
  try {
    const automoviles = await listarAutomovilesDB()
    res.status(200).json({ success: true, data: automoviles })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

export const getAutomovil = async (req, res) => {
  try {
    const { numero_bastidor } = req.params
    const automovil = await obtenerAutomovilPorBastidorDB(numero_bastidor)
    if (!automovil) {
      return res.status(404).json({ success: false, message: 'Automóvil no encontrado' })
    }
    res.status(200).json({ success: true, data: automovil })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

export const updateAutomovil = async (req, res) => {
  try {
    const { numero_bastidor } = req.params
    const data = req.body
    const result = await actualizarAutomovilDB(numero_bastidor, data)
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Automóvil no encontrado para actualizar' })
    }
    
    res.status(200).json({ success: true, message: 'Automóvil actualizado exitosamente' })
  } catch (error) {
    res.status(400).json({ success: false, error: error.message })
  }
}
