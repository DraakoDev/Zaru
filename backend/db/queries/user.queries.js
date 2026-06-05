export const INSERTAR_USUARIO = "INSERT INTO usuario (nombre_usuario, contrasena, cedula, tipo) VALUES (?, ?, ?, ?)";
export const SELECCIONAR_USUARIOS = "SELECT * FROM usuario";
export const SELECCIONAR_USUARIO = "SELECT * FROM usuario WHERE nombre_usuario = ?";
export const ACTUALIZAR_USUARIO = "UPDATE usuario SET contrasena = ?, cedula = ?, tipo = ? WHERE nombre_usuario = ?";
export const ACTUALIZAR_CONTRASENA = "UPDATE usuario SET contrasena = ? WHERE nombre_usuario = ?";
export const ACTUALIZAR_TIPO_USUARIO = "UPDATE usuario SET tipo = ? WHERE nombre_usuario = ?";
