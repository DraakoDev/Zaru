export const INSERTAR_MARCA_CONCESIONARIO = "INSERT INTO marca_concesionario (concesionario_nit, marca_nombre) VALUES (?, ?)";
export const SELECCIONAR_MARCAS_CONCESIONARIO = "SELECT * FROM marca_concesionario";
export const SELECCIONAR_MARCAS_POR_CONCESIONARIO = "SELECT * FROM marca_concesionario WHERE concesionario_nit = ?";
export const SELECCIONAR_CONCESIONARIOS_POR_MARCA = "SELECT * FROM marca_concesionario WHERE marca_nombre = ?";
export const ACTUALIZAR_MARCA_CONCESIONARIO = "UPDATE marca_concesionario SET marca_nombre = ? WHERE concesionario_nit = ? AND marca_nombre = ?";
