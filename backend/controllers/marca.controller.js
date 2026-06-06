import { crearMarcaDB, listarMarcasDB, obtenerMarcaPorNombreDB, actualizarMarcaDB } from '../model/marca.model.js'

export const createMarca = async (req, res) => {
  try {
    const { nombre } = req.body
    if (!nombre) return res.status(400).json({ success: false, message: 'El nombre de la marca es requerido' })
    
    await crearMarcaDB(nombre)
    res.status(201).json({ success: true, message: 'Marca creada exitosamente' })
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ success: false, message: 'La marca ya existe' })
    }
    res.status(500).json({ success: false, error: error.message })
  }
}

export const getMarcas = async (req, res) => {
  try {
    const marcas = await listarMarcasDB()
    res.status(200).json({ success: true, data: marcas })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

export const getMarca = async (req, res) => {
  try {
    const { nombre } = req.params
    const marca = await obtenerMarcaPorNombreDB(nombre)
    if (!marca) return res.status(404).json({ success: false, message: 'Marca no encontrada' })
    
    res.status(200).json({ success: true, data: marca })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

export const updateMarca = async (req, res) => {
  try {
    const { nombre: nombreAntiguo } = req.params
    const { nombre: nombreNuevo } = req.body
    
    if (!nombreNuevo) return res.status(400).json({ success: false, message: 'El nuevo nombre es requerido' })
    
    const result = await actualizarMarcaDB(nombreNuevo, nombreAntiguo)
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Marca no encontrada para actualizar' })
    }
    
    res.status(200).json({ success: true, message: 'Marca actualizada exitosamente' })
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ success: false, message: 'Ya existe una marca con el nuevo nombre' })
    }
    res.status(500).json({ success: false, error: error.message })
  }
}
