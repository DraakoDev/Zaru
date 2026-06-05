export const REGISTRAR_EMPRESA = "INSERT INTO registro_empresa (nit, fecha_registro, tipo_empresa) VALUES (?, ?, ?)";
export const SELECCIONAR_REGISTROS_EMPRESA = "SELECT * FROM registro_empresa";
export const SELECCIONAR_REGISTRO_EMPRESA = "SELECT * FROM registro_empresa WHERE nit = ?";
export const ACTUALIZAR_REGISTRO_EMPRESA = "UPDATE registro_empresa SET fecha_registro = ?, tipo_empresa = ? WHERE nit = ?";
