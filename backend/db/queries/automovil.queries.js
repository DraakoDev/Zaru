export const INSERTAR_AUTOMOVIL = "INSERT INTO automovil (numero_bastidor, modelo_id, estado, registro_empresa_nit) VALUES (?, ?, ?, ?)";
export const SELECCIONAR_AUTOMOVILES = "SELECT * FROM automovil";
export const SELECCIONAR_AUTOMOVIL = "SELECT * FROM automovil WHERE numero_bastidor = ?";
export const ACTUALIZAR_AUTOMOVIL = "UPDATE automovil SET modelo_id = ?, estado = ?, registro_empresa_nit = ? WHERE numero_bastidor = ?";
