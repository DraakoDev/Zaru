export const INSERTAR_EXTRA_VENTA = "INSERT INTO extra_venta (venta_id, equipamiento_id, precio) VALUES (?, ?, ?)";
export const SELECCIONAR_EXTRAS_VENTA = "SELECT * FROM extra_venta";
export const SELECCIONAR_EXTRA_VENTA = "SELECT * FROM extra_venta WHERE venta_id = ? AND equipamiento_id = ?";
export const ACTUALIZAR_EXTRA_VENTA = "UPDATE extra_venta SET precio = ? WHERE venta_id = ? AND equipamiento_id = ?";
