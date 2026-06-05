export const INSERTAR_PERSONA = "INSERT INTO persona (cedula, nombre, apellido, direccion, telefono, correo) VALUES (?, ?, ?, ?, ?, ?)";
export const SELECCIONAR_PERSONAS = "SELECT * FROM persona";
export const SELECCIONAR_PERSONA = "SELECT * FROM persona WHERE cedula = ?";
export const ACTUALIZAR_PERSONA = "UPDATE persona SET nombre = ?, apellido = ?, direccion = ?, telefono = ?, correo = ? WHERE cedula = ?";
