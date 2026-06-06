import { 
  asignarMarcaAConcesionarioDB, 
  listarTodasLasRelacionesDB, 
  listarMarcasDeConcesionarioDB, 
  actualizarRelacionMarcaDB 
} from '../model/marca_concesionario.model.js'

export const asignarMarca = async (req, res) => {
  try {
    const { concesionario_nit, marca_nombre } = req.body
    if (!concesionario_nit || !marca_nombre) {
      return res.status(400).json({ success: false, message: 'NIT de concesionario y nombre de marca son requeridos' })
    }
    
    await asignarMarcaAConcesionarioDB(concesionario_nit, marca_nombre)
    res.status(201).json({ success: true, message: 'Marca asignada exitosamente al concesionario' })
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ success: false, message: 'Esta marca ya está asignada a este concesionario' })
    }
    res.status(500).json({ success: false, error: error.message })
  }
}

export const getRelaciones = async (req, res) => {
  try {
    const relaciones = await listarTodasLasRelacionesDB()
    res.status(200).json({ success: true, data: relaciones })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

export const getMarcasPorConcesionario = async (req, res) => {
  try {
    const { nit } = req.params
    const marcas = await listarMarcasDeConcesionarioDB(nit)
    res.status(200).json({ success: true, data: marcas })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

export const updateRelacionMarca = async (req, res) => {
  try {
    const { nit, marcaAntigua } = req.params
    const { marcaNueva } = req.body
    
    if (!marcaNueva) {
      return res.status(400).json({ success: false, message: 'El nuevo nombre de la marca es requerido' })
    }
    
    const result = await actualizarRelacionMarcaDB(marcaNueva, nit, marcaAntigua)
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Relación no encontrada para actualizar' })
    }
    
    res.status(200).json({ success: true, message: 'Relación actualizada exitosamente' })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}
