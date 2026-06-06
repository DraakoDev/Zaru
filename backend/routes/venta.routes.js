import express from 'express'
import { createVenta, getVentas, getVenta, updateVenta } from '../controllers/venta.controller.js'
import { checkToken } from '../middlewares/user.auth.js'

const router = express.Router()

router.post('/ventas', checkToken, createVenta)
router.get('/ventas', checkToken, getVentas)
router.get('/ventas/:id', checkToken, getVenta)
router.put('/ventas/:id', checkToken, updateVenta)

export default router
