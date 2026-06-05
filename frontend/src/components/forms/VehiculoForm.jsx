import { useState } from "react";

export const VehiculoForm = ({ onSubmit }) => {

  const [form, setForm] = useState({

    marca: "",
    modelo: "",
    precio: "",

    numero_bastidor: "",
    estado: "DISPONIBLE",

    empresa_nit: "",

    cilindraje: "",
    potencia: "",
    torque: "",
    motor: "",
    combustible: "",
    carroceria: "",
    color: ""

  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    onSubmit(form);

  };

  return (

    <form
      onSubmit={handleSubmit}
      className="grid md:grid-cols-2 gap-4"
    >

      <input
        name="marca"
        placeholder="Marca"
        onChange={handleChange}
        className="bg-[#111111] p-3 rounded-xl"
      />

      <input
        name="modelo"
        placeholder="Modelo"
        onChange={handleChange}
        className="bg-[#111111] p-3 rounded-xl"
      />

      <input
        name="precio"
        placeholder="Precio"
        onChange={handleChange}
        className="bg-[#111111] p-3 rounded-xl"
      />

      <input
        name="numero_bastidor"
        placeholder="Número Bastidor"
        onChange={handleChange}
        className="bg-[#111111] p-3 rounded-xl"
      />

      <input
        name="empresa_nit"
        placeholder="NIT Empresa"
        onChange={handleChange}
        className="bg-[#111111] p-3 rounded-xl"
      />

      <select
        name="estado"
        onChange={handleChange}
        className="bg-[#111111] p-3 rounded-xl"
      >
        <option value="DISPONIBLE">
          Disponible
        </option>

        <option value="VENDIDO">
          Vendido
        </option>

        <option value="PROCESO">
          Proceso
        </option>
      </select>

      <input
        name="cilindraje"
        placeholder="Cilindraje"
        onChange={handleChange}
        className="bg-[#111111] p-3 rounded-xl"
      />

      <input
        name="potencia"
        placeholder="Potencia"
        onChange={handleChange}
        className="bg-[#111111] p-3 rounded-xl"
      />

      <input
        name="torque"
        placeholder="Torque"
        onChange={handleChange}
        className="bg-[#111111] p-3 rounded-xl"
      />

      <input
        name="motor"
        placeholder="Motor"
        onChange={handleChange}
        className="bg-[#111111] p-3 rounded-xl"
      />

      <input
        name="combustible"
        placeholder="Combustible"
        onChange={handleChange}
        className="bg-[#111111] p-3 rounded-xl"
      />

      <input
        name="carroceria"
        placeholder="Carrocería"
        onChange={handleChange}
        className="bg-[#111111] p-3 rounded-xl"
      />

      <input
        name="color"
        placeholder="Color"
        onChange={handleChange}
        className="bg-[#111111] p-3 rounded-xl"
      />

      <button
        className="
          bg-orange-500
          rounded-xl
          h-12
          font-bold
        "
      >
        Guardar Vehículo
      </button>

    </form>
  );
};