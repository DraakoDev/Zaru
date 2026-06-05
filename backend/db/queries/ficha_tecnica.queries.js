export const INSERTAR_FICHA_TECNICA = "INSERT INTO ficha_tecnica (modelo_id, cilindraje, potencia, torque, motor, combustible, carroceria, color_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
export const SELECCIONAR_FICHAS_TECNICAS = "SELECT * FROM ficha_tecnica";
export const SELECCIONAR_FICHA_TECNICA = "SELECT * FROM ficha_tecnica WHERE modelo_id = ?";
export const ACTUALIZAR_FICHA_TECNICA = "UPDATE ficha_tecnica SET cilindraje = ?, potencia = ?, torque = ?, motor = ?, combustible = ?, carroceria = ?, color_id = ? WHERE modelo_id = ?";
