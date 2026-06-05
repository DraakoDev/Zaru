export const APLICAR_DESCUENTO = "INSERT INTO descuento_aplicado (automovil_id, descuento_id) VALUES (?, ?)";
export const SELECCIONAR_DESCUENTOS_APLICADOS = "SELECT * FROM descuento_aplicado";
export const SELECCIONAR_DESCUENTO_APLICADO = "SELECT * FROM descuento_aplicado WHERE automovil_id = ? AND descuento_id = ?";
// Update might not be very useful here since it's just two IDs, but I'll add it for consistency if needed.
// Usually you'd delete and insert, but here's a placeholder if they ever want to change the discount ID for a car.
export const ACTUALIZAR_DESCUENTO_APLICADO = "UPDATE descuento_aplicado SET descuento_id = ? WHERE automovil_id = ? AND descuento_id = ?";
