import express from 'express'
import { createCliente, getClientes, getCliente, updateCliente } from '../controllers/cliente.controller.js'
import { checkToken } from '../middlewares/user.auth.js'

const router = express.Router()

router.post('/clientes', checkToken, createCliente)
router.get('/clientes', checkToken, getClientes)
router.get('/clientes/:cedula', checkToken, getCliente)
router.put('/clientes/:cedula', checkToken, updateCliente)

export default router
