const API =
  "http://localhost:3000";

export const getVehiculos =
async () => {

  const response =
    await fetch(`${API}/vehiculos`);

  return response.json();

};

export const getVehiculoById =
async (id) => {

  const response =
    await fetch(`${API}/vehiculos/${id}`);

  return response.json();

};