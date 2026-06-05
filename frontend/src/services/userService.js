const API = "http://localhost:3000";

export const getPersonas = async () => {

  const response =
    await fetch(`${API}/personas`);

  return response.json();
};

export const getUsuarios = async () => {

  const response =
    await fetch(`${API}/usuarios`);

  return response.json();
};

export const getVendedores = async () => {

  const response =
    await fetch(`${API}/vendedores`);

  return response.json();
};

export const getEmpresas = async () => {

  const response =
    await fetch(`${API}/empresas`);

  return response.json();
};

export const getVehiculos = async () => {

  const response =
    await fetch(`${API}/vehiculos`);

  return response.json();
};