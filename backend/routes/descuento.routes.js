import express from 'express'
import { createDescuento, getDescuentos, getDescuento, updateDescuento } from '../controllers/descuento.controller.js'
import { checkToken } from '../middlewares/user.auth.js'

const router = express.Router()

router.post('/descuentos', checkToken, createDescuento)
router.get('/descuentos', checkToken, getDescuentos)
router.get('/descuentos/:id', checkToken, getDescuento)
router.put('/descuentos/:id', checkToken, updateDescuento)

export default router
