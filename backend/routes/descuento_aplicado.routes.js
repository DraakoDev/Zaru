import express from 'express'
import { 
  createDescuentoAplicado, 
  getDescuentosAplicados, 
  getDescuentosPorAutomovil, 
  updateDescuentoAplicado 
} from '../controllers/descuento_aplicado.controller.js'
import { checkToken } from '../middlewares/user.auth.js'

const router = express.Router()

router.post('/descuentos-aplicados', checkToken, createDescuentoAplicado)
router.get('/descuentos-aplicados', checkToken, getDescuentosAplicados)
router.get('/descuentos-aplicados/:numero_bastidor', checkToken, getDescuentosPorAutomovil)
router.put('/descuentos-aplicados/:numero_bastidor/:descuento_id_viejo', checkToken, updateDescuentoAplicado)

export default router
