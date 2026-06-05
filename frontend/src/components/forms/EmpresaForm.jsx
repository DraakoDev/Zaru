import { useState } from "react";

export const EmpresaForm = ({ onSubmit }) => {

  const [form, setForm] = useState({
    nit: "",
    nombre: "",
    direccion: "",
    telefono: "",
    correo: "",
    tipoEmpresa: "CONCESIONARIO",
    tipoAutomoviles: "MIXTOS"
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
        name="nit"
        placeholder="NIT"
        onChange={handleChange}
        className="bg-[#111111] p-3 rounded-xl"
      />

      <input
        name="nombre"
        placeholder="Nombre"
        onChange={handleChange}
        className="bg-[#111111] p-3 rounded-xl"
      />

      <input
        name="direccion"
        placeholder="Dirección"
        onChange={handleChange}
        className="bg-[#111111] p-3 rounded-xl"
      />

      <input
        name="telefono"
        placeholder="Teléfono"
        onChange={handleChange}
        className="bg-[#111111] p-3 rounded-xl"
      />

      <input
        name="correo"
        placeholder="Correo"
        onChange={handleChange}
        className="bg-[#111111] p-3 rounded-xl"
      />

      <select
        name="tipoEmpresa"
        onChange={handleChange}
        className="bg-[#111111] p-3 rounded-xl"
      >
        <option value="CONCESIONARIO">
          Concesionario
        </option>

        <option value="SERVICIO">
          Servicio
        </option>
      </select>

      {form.tipoEmpresa === "CONCESIONARIO" && (

        <select
          name="tipoAutomoviles"
          onChange={handleChange}
          className="bg-[#111111] p-3 rounded-xl"
        >
          <option value="NUEVOS">
            Nuevos
          </option>

          <option value="USADOS">
            Usados
          </option>

          <option value="MIXTOS">
            Mixtos
          </option>
        </select>

      )}

      <button
        className="
          bg-orange-500
          rounded-xl
          h-12
          font-bold
        "
      >
        Guardar Empresa
      </button>

    </form>
  );
};