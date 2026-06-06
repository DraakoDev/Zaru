# Documentación de Endpoints - API Zaru (Concesionarios)

Esta API utiliza **JSON Web Tokens (JWT)** para la autenticación a través de cookies (`access_token`). La mayoría de los endpoints protegidos requieren que el usuario esté logueado.

**URL Base:** `http://localhost:3000` (o el puerto configurado en el servidor)

---

## 1. Autenticación y Usuarios

### Registro de Usuario
*   **POST** `/registro`
*   **Body:**
```json
{
  "cedula": "12345678",
  "nombre": "Admin",
  "apellido": "Sistema",
  "direccion": "Sede Central",
  "telefono": "555-0101",
  "correo": "admin@zaru.com",
  "username": "admin_zaru",
  "password": "securepassword123",
  "tipo_usuario": "admin"
}
```

### Login
*   **POST** `/login`
*   **Body:** `{"username": "admin_zaru", "password": "securepassword123"}`

### Logout
*   **POST** `/logout`

---

## 2. Empresas y Sedes

### Crear Empresa (Concesionario o Servicio Oficial)
*   **POST** `/empresas`
*   **Descripción:** Crea la empresa, su registro y su tipo específico en una sola transacción.
*   **Body (Concesionario):**
```json
{
  "nit": "900111222-1",
  "nombre": "Zaru Norte",
  "direccion": "Av. Principal 45",
  "telefono": "3004445566",
  "correo": "norte@zaru.com",
  "tipo_empresa": "concesionario",
  "tipo_automoviles": "NUEVOS" 
}
```
*   **Body (Servicio Oficial):**
```json
{
  "nit": "800333444-2",
  "nombre": "Taller Zaru Express",
  "direccion": "Calle 80 # 12-34",
  "telefono": "3102223344",
  "correo": "taller@zaru.com",
  "tipo_empresa": "servicio oficial",
  "concesionario_nit": "900111222-1"
}
```

---

## 3. Catálogo (Marcas y Modelos)

### Crear Marca
*   **POST** `/marcas`
*   **Body:** `{"nombre": "BMW"}`

### Asignar Marca a Concesionario
*   **POST** `/marcas-concesionario`
*   **Body:** `{"concesionario_nit": "900111222-1", "marca_nombre": "BMW"}`

### Crear Modelo + Ficha Técnica
*   **POST** `/modelos`
*   **Body:**
```json
{
  "marca_nombre": "BMW",
  "nombre": "Serie 3 M",
  "precio": 185000000.00,
  "cilindraje": 3.0,
  "potencia": 382.0,
  "torque": 500.0,
  "motor": "B58 Turbo",
  "combustible": "Gasolina",
  "carroceria": "Sedán",
  "color_id": 1
}
```

---

## 4. Inventario (Automóviles)

### Registrar Automóvil en Stock
*   **POST** `/automoviles`
*   **Body:**
```json
{
  "numero_bastidor": "VIN9876543210XYZ",
  "modelo_id": 1,
  "estado": "DISPONIBLE",
  "registro_empresa_nit": "900111222-1"
}
```

### Aplicar Descuento a un Automóvil
*   **POST** `/descuentos-aplicados`
*   **Body:** `{"automovil_id": "VIN9876543210XYZ", "descuento_id": 1}`

---

## 5. Personal y Clientes

### Crear Vendedor
*   **POST** `/vendedores`
*   **Body:**
```json
{
  "cedula": "80111222",
  "nombre": "Carlos",
  "apellido": "Vendedor",
  "direccion": "Barrio Centro",
  "telefono": "3201112233",
  "correo": "carlos@zaru.com",
  "registro_empresa_nit": "900111222-1"
}
```

### Crear Cliente
*   **POST** `/clientes`
*   **Body:**
```json
{
  "cedula": "52333444",
  "nombre": "Ana",
  "apellido": "Compradora",
  "direccion": "Residencial A1",
  "telefono": "3158889900",
  "correo": "ana@gmail.com",
  "cantidad_compras": 0
}
```

---

## 6. Ventas

### Registrar Venta
*   **POST** `/ventas`
*   **Body:**
```json
{
  "numero_bastidor": "VIN9876543210XYZ",
  "cedula_vendedor": "80111222",
  "cedula_cliente": "52333444",
  "fecha_entrega": "2026-06-10",
  "fecha_venta": "2026-06-05",
  "matricula_asignada": "ZRU-001",
  "es_encargo": false,
  "metodo_pago": "FINANCIAMIENTO",
  "precio_venta": 180000000.00
}
```

### Agregar Extra (Accesorio) a la Venta
*   **POST** `/extras-venta`
*   **Body:** `{"venta_id": 1, "equipamiento_id": 2, "precio": 1200000.00}`

---

## 7. Tablas Maestras (Básicas)

### Colores
*   **POST** `/colores` -> `{"nombre": "Azul Estoril"}`

### Accesorios
*   **POST** `/accesorios` -> `{"nombre": "Techo Panorámico"}`

### Equipamiento (Vincula Modelo con Accesorio)
*   **POST** `/equipamientos`
*   **Body:** `{"modelo_id": 1, "accesorio_id": 1, "es_extra": true, "precio": 2500000.00}`

### Descuentos (Definición)
*   **POST** `/descuentos`
*   **Body:** `{"nombre": "Bono Fidelidad", "porcentaje": 5.0, "descripcion": "Para clientes antiguos"}`

---

## Notas de Implementación
1.  **Protección:** Todos los endpoints (excepto login/registro) requieren el header de cookie con un token válido.
2.  **Integridad:** Las creaciones de entidades complejas (Empresa, Modelo, Vendedor, Cliente) utilizan transacciones SQL para asegurar que no queden datos huérfanos.
3.  **Consultas (GET):** Los endpoints de consulta devuelven datos enriquecidos mediante `JOIN`s (ej: al consultar una venta, verás el nombre del modelo y del vendedor).
