export const INSERTAR_CONCESIONARIO = "INSERT INTO concesionario (nit, tipo_automoviles) VALUES (?, ?)";
export const SELECCIONAR_CONCESIONARIOS = "SELECT * FROM concesionario";
export const SELECCIONAR_CONCESIONARIO = "SELECT * FROM concesionario WHERE nit = ?";
export const ACTUALIZAR_CONCESIONARIO = "UPDATE concesionario SET tipo_automoviles = ? WHERE nit = ?";
