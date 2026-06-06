import express from 'express'
import { 
  createExtraVenta, 
  getExtrasVenta, 
  getExtrasPorVenta, 
  updateExtraVenta 
} from '../controllers/extra_venta.controller.js'
import { checkToken } from '../middlewares/user.auth.js'

const router = express.Router()

router.post('/extras-venta', checkToken, createExtraVenta)
router.get('/extras-venta', checkToken, getExtrasVenta)
router.get('/extras-venta/:venta_id', checkToken, getExtrasPorVenta)
router.put('/extras-venta/:venta_id/:equipamiento_id', checkToken, updateExtraVenta)

export default router
