export const INSERTAR_SERVICIO_OFICIAL = "INSERT INTO servicio_oficial (nit, concesionario_nit) VALUES (?, ?)";
export const SELECCIONAR_SERVICIOS_OFICIALES = "SELECT * FROM servicio_oficial";
export const SELECCIONAR_SERVICIO_OFICIAL = "SELECT * FROM servicio_oficial WHERE nit = ?";
export const ACTUALIZAR_SERVICIO_OFICIAL = "UPDATE servicio_oficial SET concesionario_nit = ? WHERE nit = ?";
