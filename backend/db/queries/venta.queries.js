export const INSERTAR_VENTA = "INSERT INTO venta (numero_bastidor, cedula_vendedor, fecha_entrega, fecha_venta, matricula_asignada, es_encargo, metodo_pago, precio_venta) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
export const SELECCIONAR_VENTAS = "SELECT * FROM venta";
export const SELECCIONAR_VENTA = "SELECT * FROM venta WHERE id = ?";
export const ACTUALIZAR_VENTA = "UPDATE venta SET numero_bastidor = ?, cedula_vendedor = ?, fecha_entrega = ?, fecha_venta = ?, matricula_asignada = ?, es_encargo = ?, metodo_pago = ?, precio_venta = ? WHERE id = ?";
