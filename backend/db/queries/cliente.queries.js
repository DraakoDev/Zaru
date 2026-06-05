export const INSERTAR_CLIENTE = "INSERT INTO cliente (cedula, cantidad_compras) VALUES (?, ?)";
export const SELECCIONAR_CLIENTES = "SELECT * FROM cliente";
export const SELECCIONAR_CLIENTE = "SELECT * FROM cliente WHERE cedula = ?";
export const ACTUALIZAR_CLIENTE = "UPDATE cliente SET cantidad_compras = ? WHERE cedula = ?";
