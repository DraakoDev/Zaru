export const INSERTAR_EMPRESA = "INSERT INTO empresa (nit, nombre, direccion, telefono, correo) VALUES (?, ?, ?, ?, ?)";
export const SELECCIONAR_EMPRESAS = "SELECT * FROM empresa";
export const SELECCIONAR_EMPRESA = "SELECT * FROM empresa WHERE nit = ?";
export const ACTUALIZAR_EMPRESA = "UPDATE empresa SET nombre = ?, direccion = ?, telefono = ?, correo = ? WHERE nit = ?";
