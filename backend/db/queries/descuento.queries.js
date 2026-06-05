export const INSERTAR_DESCUENTO = "INSERT INTO descuento (nombre, porcentaje, descripcion) VALUES (?, ?, ?)";
export const SELECCIONAR_DESCUENTOS = "SELECT * FROM descuento";
export const SELECCIONAR_DESCUENTO = "SELECT * FROM descuento WHERE id = ?";
export const ACTUALIZAR_DESCUENTO = "UPDATE descuento SET nombre = ?, porcentaje = ?, descripcion = ? WHERE id = ?";
