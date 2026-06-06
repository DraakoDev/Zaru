const API = "http://localhost:3000";

export const getPersonas = async (token) => {
  const response = await fetch(`${API}/personas`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  });
  return response.json();
};

export const updatePersona = async (token, cedula, data) => {
  const response = await fetch(`${API}/personas/${cedula}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(data),
  });
  return response.json();
};

export const updateUsuario = async (token, username, data) => {
  const response = await fetch(`${API}/usuarios/${username}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getUsuarios = async (token) => {
  const response = await fetch(`${API}/usuarios`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  });
  return response.json();
};
export const registerUser = async (data) => {
  const response = await fetch(`${API}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.json();
};
export const getVendedores = async (token) => {
  const response = await fetch(`${API}/personas/vendedores/list`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  });
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

export const createEmpresa = async (data) => {
  const response = await fetch(`${API}/empresas`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.json();
};

export const createMarca = async (data) => {
  const response = await fetch(`${API}/marcas`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.json();
};

export const createModelo = async (data) => {
  const response = await fetch(`${API}/modelos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.json();
};

export const createAutomovil = async (data) => {
  const response = await fetch(`${API}/automoviles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.json();
};