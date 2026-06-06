import express from 'express'
import { createVendedor, getVendedores, getVendedor, updateVendedor } from '../controllers/vendedor.controller.js'
import { checkToken } from '../middlewares/user.auth.js'

const router = express.Router()

router.post('/vendedores', checkToken, createVendedor)
router.get('/vendedores', checkToken, getVendedores)
router.get('/vendedores/:cedula', checkToken, getVendedor)
router.put('/vendedores/:cedula', checkToken, updateVendedor)

export default router
