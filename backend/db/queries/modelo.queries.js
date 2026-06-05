export const INSERTAR_MODELO = "INSERT INTO modelo (marca_nombre, nombre, precio) VALUES (?, ?, ?)";
export const SELECCIONAR_MODELOS = "SELECT * FROM modelo";
export const SELECCIONAR_MODELO = "SELECT * FROM modelo WHERE id = ?";
export const ACTUALIZAR_MODELO = "UPDATE modelo SET marca_nombre = ?, nombre = ?, precio = ? WHERE id = ?";
