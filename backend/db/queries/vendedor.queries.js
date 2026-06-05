export const INSERTAR_VENDEDOR = "INSERT INTO vendedor (cedula, registro_empresa_nit) VALUES (?, ?)";
export const SELECCIONAR_VENDEDORES = "SELECT * FROM vendedor";
export const SELECCIONAR_VENDEDOR = "SELECT * FROM vendedor WHERE cedula = ?";
export const ACTUALIZAR_VENDEDOR = "UPDATE vendedor SET registro_empresa_nit = ? WHERE cedula = ?";
