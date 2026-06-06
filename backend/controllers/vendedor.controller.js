import { 
  crearVendedorDB, 
  listarVendedoresDB, 
  obtenerVendedorPorCedulaDB, 
  actualizarVendedorDB 
} from '../model/vendedor.model.js'

export const createVendedor = async (req, res) => {
  try {
    const { cedula, nombre, apellido, direccion, telefono, correo, registro_empresa_nit } = req.body
    
    const personaData = { cedula, nombre, apellido, direccion, telefono, correo }
    const vendedorData = { registro_empresa_nit }

    await crearVendedorDB(personaData, vendedorData)
    res.status(201).json({ success: true, message: 'Vendedor registrado exitosamente' })
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ success: false, message: 'El vendedor o el correo ya están registrados' })
    }
    res.status(400).json({ success: false, error: error.message })
  }
}

export const getVendedores = async (req, res) => {
  try {
    const vendedores = await listarVendedoresDB()
    res.status(200).json({ success: true, data: vendedores })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

export const getVendedor = async (req, res) => {
  try {
    const { cedula } = req.params
    const vendedor = await obtenerVendedorPorCedulaDB(cedula)
    if (!vendedor) {
      return res.status(404).json({ success: false, message: 'Vendedor no encontrado' })
    }
    res.status(200).json({ success: true, data: vendedor })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

export const updateVendedor = async (req, res) => {
  try {
    const { cedula } = req.params
    const { nombre, apellido, direccion, telefono, correo, registro_empresa_nit } = req.body
    
    const personaData = { nombre, apellido, direccion, telefono, correo }
    const vendedorData = { registro_empresa_nit }

    const result = await actualizarVendedorDB(cedula, personaData, vendedorData)
    res.status(200).json({ success: true, message: 'Vendedor actualizado exitosamente' })
  } catch (error) {
    res.status(400).json({ success: false, error: error.message })
  }
}
