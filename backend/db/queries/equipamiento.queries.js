export const INSERTAR_EQUIPAMIENTO = "INSERT INTO equipamiento (modelo_id, accesorio_id, es_extra, precio) VALUES (?, ?, ?, ?)";
export const SELECCIONAR_EQUIPAMIENTOS = "SELECT * FROM equipamiento";
export const SELECCIONAR_EQUIPAMIENTO = "SELECT * FROM equipamiento WHERE id = ?";
export const ACTUALIZAR_EQUIPAMIENTO = "UPDATE equipamiento SET modelo_id = ?, accesorio_id = ?, es_extra = ?, precio = ? WHERE id = ?";
