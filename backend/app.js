import express from 'express'
import router from './routes/login.routes.js'
import personaRouter from './routes/persona.routes.js'
import empresaRouter from './routes/empresa.routes.js'
import marcaRouter from './routes/marca.routes.js'
import marcaConcesionarioRouter from './routes/marca_concesionario.routes.js'
import modeloRouter from './routes/modelo.routes.js'
import colorRouter from './routes/color.routes.js'
import accesorioRouter from './routes/accesorio.routes.js'
import equipamientoRouter from './routes/equipamiento.routes.js'
import automovilRouter from './routes/automovil.routes.js'
import vendedorRouter from './routes/vendedor.routes.js'
import clienteRouter from './routes/cliente.routes.js'
import ventaRouter from './routes/venta.routes.js'
import descuentoRouter from './routes/descuento.routes.js'
import descuentoAplicadoRouter from './routes/descuento_aplicado.routes.js'
import extraVentaRouter from './routes/extra_venta.routes.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(express.json())
app.use(cookieParser()) // Convierte la cookie con el token JWT a un json
app.use(cors({ origin: 'http://localhost:5173', credentials: true }))
app.use(router)
app.use(personaRouter)
app.use(empresaRouter)
app.use(marcaRouter)
app.use(marcaConcesionarioRouter)
app.use(modeloRouter)
app.use(colorRouter)
app.use(accesorioRouter)
app.use(equipamientoRouter)
app.use(automovilRouter)
app.use(vendedorRouter)
app.use(clienteRouter)
app.use(ventaRouter)
app.use(descuentoRouter)
app.use(descuentoAplicadoRouter)
app.use(extraVentaRouter)

export default app

