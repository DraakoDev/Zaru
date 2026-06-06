import express from 'express'
import { 
  asignarMarca, 
  getRelaciones, 
  getMarcasPorConcesionario, 
  updateRelacionMarca 
} from '../controllers/marca_concesionario.controller.js'
import { checkToken } from '../middlewares/user.auth.js'

const router = express.Router()

router.post('/marcas-concesionario', checkToken, asignarMarca)
router.get('/marcas-concesionario', checkToken, getRelaciones)
router.get('/marcas-concesionario/:nit', checkToken, getMarcasPorConcesionario)
router.put('/marcas-concesionario/:nit/:marcaAntigua', checkToken, updateRelacionMarca)

export default router
