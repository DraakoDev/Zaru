const API_URL = "http://localhost:3000";

export const getVehiculos = async () => {
  const response = await fetch(`${API_URL}/modelos`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Error al obtener vehículos");
  }

  return response.json();
};

export const getVehiculoById = async (id) => {
  const response = await fetch(`${API_URL}/modelos/${id}`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Error al obtener vehículo");
  }

  return response.json();
};