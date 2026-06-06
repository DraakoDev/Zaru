import { 
  crearModeloConFichaDB, 
  listarModelosDB, 
  obtenerModeloCompletoDB, 
  actualizarModeloConFichaDB 
} from '../model/modelo.model.js'

export const createModelo = async (req, res) => {
  try {
    const { 
      marca_nombre, nombre, precio, 
      cilindraje, potencia, torque, motor, combustible, carroceria, color_id 
    } = req.body

    const modeloData = { marca_nombre, nombre, precio }
    const fichaData = { cilindraje, potencia, torque, motor, combustible, carroceria, color_id }

    const result = await crearModeloConFichaDB(modeloData, fichaData)
    res.status(201).json({ success: true, message: 'Modelo y ficha técnica creados exitosamente', id: result.id })
  } catch (error) {
    res.status(400).json({ success: false, error: error.message })
  }
}

export const getModelos = async (req, res) => {
  try {
    const modelos = await listarModelosDB()
    res.status(200).json({ success: true, data: modelos })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

export const getModelo = async (req, res) => {
  try {
    const { id } = req.params
    const modelo = await obtenerModeloCompletoDB(id)
    if (!modelo) {
      return res.status(404).json({ success: false, message: 'Modelo no encontrado' })
    }
    res.status(200).json({ success: true, data: modelo })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

export const updateModelo = async (req, res) => {
  try {
    const { id } = req.params
    const { 
      marca_nombre, nombre, precio, 
      cilindraje, potencia, torque, motor, combustible, carroceria, color_id 
    } = req.body

    const modeloData = { marca_nombre, nombre, precio }
    const fichaData = { cilindraje, potencia, torque, motor, combustible, carroceria, color_id }

    await actualizarModeloConFichaDB(id, modeloData, fichaData)
    res.status(200).json({ success: true, message: 'Modelo y ficha técnica actualizados exitosamente' })
  } catch (error) {
    res.status(400).json({ success: false, error: error.message })
  }
}
