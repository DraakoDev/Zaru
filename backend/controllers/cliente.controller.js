import { 
  crearClienteDB, 
  listarClientesDB, 
  obtenerClientePorCedulaDB, 
  actualizarClienteDB 
} from '../model/cliente.model.js'

export const createCliente = async (req, res) => {
  try {
    const { cedula, nombre, apellido, direccion, telefono, correo, cantidad_compras } = req.body
    
    const personaData = { cedula, nombre, apellido, direccion, telefono, correo }
    const clienteData = { cantidad_compras }

    await crearClienteDB(personaData, clienteData)
    res.status(201).json({ success: true, message: 'Cliente registrado exitosamente' })
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ success: false, message: 'El cliente o el correo ya están registrados' })
    }
    res.status(400).json({ success: false, error: error.message })
  }
}

export const getClientes = async (req, res) => {
  try {
    const clientes = await listarClientesDB()
    res.status(200).json({ success: true, data: clientes })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

export const getCliente = async (req, res) => {
  try {
    const { cedula } = req.params
    const cliente = await obtenerClientePorCedulaDB(cedula)
    if (!cliente) {
      return res.status(404).json({ success: false, message: 'Cliente no encontrado' })
    }
    res.status(200).json({ success: true, data: cliente })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

export const updateCliente = async (req, res) => {
  try {
    const { cedula } = req.params
    const { nombre, apellido, direccion, telefono, correo, cantidad_compras } = req.body
    
    const personaData = { nombre, apellido, direccion, telefono, correo }
    const clienteData = { cantidad_compras }

    await actualizarClienteDB(cedula, personaData, clienteData)
    res.status(200).json({ success: true, message: 'Cliente actualizado exitosamente' })
  } catch (error) {
    res.status(400).json({ success: false, error: error.message })
  }
}
