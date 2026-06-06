import { registrarEmpresaCompleta, listarEmpresas, obtenerEmpresaPorNit } from '../model/empresa.model.js'

export const createEmpresa = async (req, res) => {
  try {
    const data = req.body
    const result = await registrarEmpresaCompleta(data)
    res.status(201).json(result)
  } catch (error) {
    res.status(400).json({ success: false, error: error.message })
  }
}

export const getEmpresas = async (req, res) => {
  try {
    const empresas = await listarEmpresas()
    res.status(200).json({ success: true, data: empresas })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

export const getEmpresa = async (req, res) => {
  try {
    const { nit } = req.params
    const empresa = await obtenerEmpresaPorNit(nit)
    if (!empresa) {
      return res.status(404).json({ success: false, message: 'Empresa no encontrada' })
    }
    res.status(200).json({ success: true, data: empresa })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}
