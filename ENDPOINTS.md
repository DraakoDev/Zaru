# Documentación de Endpoints - API Zaru (Concesionarios)

Esta API utiliza **JSON Web Tokens (JWT)** para la autenticación a través de cookies (`access_token`). La mayoría de los endpoints protegidos requieren que el usuario esté logueado.

**URL Base:** `http://localhost:3000` (o el puerto configurado en el servidor)

---

## 1. Autenticación y Usuarios

### Registro de Usuario
*   **POST** `/register`
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

### Listar Usuarios
*   **GET** `/usuarios`
*   **Respuesta Exitosa:**
```json
{
  "success": true,
  "data": [
    {
      "nombre_usuario": "admin_zaru",
      "cedula": "12345678",
      "tipo": "admin"
    }
  ]
}
```

---

## 2. Empresas y Sedes

### Crear Empresa (Concesionario o Servicio Oficial)
*   **POST** `/empresas`
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

### Listar Empresas
*   **GET** `/empresas`
*   **Respuesta Exitosa:**
```json
{
  "success": true,
  "data": [
    {
      "nit": "900111222-1",
      "nombre": "Zaru Norte",
      "direccion": "Av. Principal 45",
      "telefono": "3004445566",
      "correo": "norte@zaru.com"
    }
  ]
}
```

---

## 3. Catálogo (Marcas y Modelos)

### Crear Marca
*   **POST** `/marcas`
*   **Body:** `{"nombre": "BMW"}`

### Listar Marcas
*   **GET** `/marcas`
*   **Respuesta:** `{"success": true, "data": [{"nombre": "BMW"}]}`

### Asignar Marca a Concesionario
*   **POST** `/marcas-concesionario`
*   **Body:** `{"concesionario_nit": "900111222-1", "marca_nombre": "BMW"}`

### Consultar Marcas por Concesionario
*   **GET** `/marcas-concesionario/900111222-1`
*   **Respuesta:**
```json
{
  "success": true,
  "data": [
    {
      "concesionario_nit": "900111222-1",
      "marca_nombre": "BMW"
    }
  ]
}
```

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

### Listar Modelos (con Ficha Técnica)
*   **GET** `/modelos`
*   **Respuesta:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "marca_nombre": "BMW",
      "nombre": "Serie 3 M",
      "precio": 185000000,
      "cilindraje": 3,
      "potencia": 382,
      "torque": 500,
      "motor": "B58 Turbo",
      "combustible": "Gasolina",
      "carroceria": "Sedán",
      "color_nombre": "Azul Estoril"
    }
  ]
}
```

---

## 4. Inventario (Automóviles)

### Registrar Automóvil en Stock
*   **POST** `/automoviles`
*   **Body:** `{"numero_bastidor": "VIN123", "modelo_id": 1, "estado": "DISPONIBLE", "registro_empresa_nit": "900111222-1"}`

### Listar Inventario
*   **GET** `/automoviles`
*   **Respuesta:**
```json
{
  "success": true,
  "data": [
    {
      "numero_bastidor": "VIN123",
      "modelo_id": 1,
      "estado": "DISPONIBLE",
      "registro_empresa_nit": "900111222-1",
      "modelo_nombre": "Serie 3 M",
      "marca_nombre": "BMW",
      "precio_base": 185000000,
      "empresa_nombre": "Zaru Norte"
    }
  ]
}
```

### Consultar Descuentos de un Automóvil
*   **GET** `/descuentos-aplicados/VIN123`
*   **Respuesta:**
```json
{
  "success": true,
  "data": [
    {
      "automovil_id": "VIN123",
      "descuento_id": 1,
      "descuento_nombre": "Bono Verano",
      "porcentaje": 10.5
    }
  ]
}
```

---

## 5. Personal y Clientes

### Listar Vendedores (con Empresa)
*   **GET** `/vendedores`
*   **Respuesta:**
```json
{
  "success": true,
  "data": [
    {
      "cedula": "80111222",
      "nombre": "Carlos",
      "apellido": "Vendedor",
      "direccion": "Barrio Centro",
      "telefono": "3201112233",
      "correo": "carlos@zaru.com",
      "registro_empresa_nit": "900111222-1",
      "empresa_nombre": "Zaru Norte"
    }
  ]
}
```

### Listar Clientes
*   **GET** `/clientes`
*   **Respuesta:**
```json
{
  "success": true,
  "data": [
    {
      "cedula": "52333444",
      "nombre": "Ana",
      "apellido": "Compradora",
      "direccion": "Residencial A1",
      "telefono": "3158889900",
      "correo": "ana@gmail.com",
      "cantidad_compras": 1
    }
  ]
}
```

---

## 6. Ventas

### Listar Ventas (Enriquecidas)
*   **GET** `/ventas`
*   **Respuesta:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "numero_bastidor": "VIN123",
      "cedula_vendedor": "80111222",
      "cedula_cliente": "52333444",
      "fecha_entrega": "2026-06-10",
      "fecha_venta": "2026-06-05",
      "matricula_asignada": "ZRU-001",
      "es_encargo": 0,
      "metodo_pago": "FINANCIAMIENTO",
      "precio_venta": 180000000,
      "vendedor_nombre": "Carlos",
      "vendedor_apellido": "Vendedor",
      "modelo_nombre": "Serie 3 M",
      "marca_nombre": "BMW"
    }
  ]
}
```

### Consultar Extras de una Venta
*   **GET** `/extras-venta/1`
*   **Respuesta:**
```json
{
  "success": true,
  "data": [
    {
      "venta_id": 1,
      "equipamiento_id": 2,
      "precio": 1200000,
      "accesorio_nombre": "Rines Deportivos"
    }
  ]
}
```

---

## 7. Tablas Maestras (Básicas)

### Listar Colores
*   **GET** `/colores` -> `{"success": true, "data": [{"id": 1, "nombre": "Azul Estoril"}]}`

### Listar Accesorios
*   **GET** `/accesorios` -> `{"success": true, "data": [{"id": 1, "nombre": "Techo Panorámico"}]}`

### Listar Equipamientos (por Modelo)
*   **GET** `/equipamientos`
*   **Respuesta:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "modelo_id": 1,
      "accesorio_id": 1,
      "es_extra": 1,
      "precio": 2500000,
      "modelo_nombre": "Serie 3 M",
      "marca_nombre": "BMW",
      "accesorio_nombre": "Techo Panorámico"
    }
  ]
}
```

---

## Notas de Implementación
1.  **Protección:** Todos los endpoints (excepto login/registro) requieren el header de cookie con un token válido.
2.  **Integridad:** Las creaciones de entidades complejas (Empresa, Modelo, Vendedor, Cliente) utilizan transacciones SQL para asegurar que no queden datos huérfanos.
3.  **Consultas (GET):** Los datos devueltos son el resultado de `JOIN`s estratégicos para evitar múltiples peticiones desde el frontend.
