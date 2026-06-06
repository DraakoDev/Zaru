import { useState } from "react";
import Swal from "sweetalert2";

export const EmpresaForm = ({ onSubmit }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    nit: "",
    nombre: "",
    direccion: "",
    telefono: "",
    correo: "",
    tipo_empresa: "concesionario",
    tipo_automoviles: "NUEVOS",
    concesionario_nit: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Preparar el body según el tipo de empresa
    const payload = { ...form };
    if (form.tipo_empresa === "concesionario") {
      delete payload.concesionario_nit;
    } else {
      delete payload.tipo_automoviles;
    }

    try {
      await onSubmit(payload);
    } catch (error) {
      console.error("Error submitting EmpresaForm:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 p-2">
      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-400">NIT</label>
        <input
          name="nit"
          required
          placeholder="Ej: 900111222-1"
          value={form.nit}
          onChange={handleChange}
          className="w-full bg-[#18181b] border border-white/10 p-3 rounded-xl text-white outline-none focus:border-orange-500 transition-colors"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-400">Nombre</label>
        <input
          name="nombre"
          required
          placeholder="Nombre de la empresa"
          value={form.nombre}
          onChange={handleChange}
          className="w-full bg-[#18181b] border border-white/10 p-3 rounded-xl text-white outline-none focus:border-orange-500 transition-colors"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-400">Dirección</label>
        <input
          name="direccion"
          required
          placeholder="Dirección física"
          value={form.direccion}
          onChange={handleChange}
          className="w-full bg-[#18181b] border border-white/10 p-3 rounded-xl text-white outline-none focus:border-orange-500 transition-colors"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-400">Teléfono</label>
        <input
          name="telefono"
          required
          placeholder="Teléfono de contacto"
          value={form.telefono}
          onChange={handleChange}
          className="w-full bg-[#18181b] border border-white/10 p-3 rounded-xl text-white outline-none focus:border-orange-500 transition-colors"
        />
      </div>

      <div className="space-y-2 md:col-span-2">
        <label className="text-sm font-medium text-zinc-400">Correo Electrónico</label>
        <input
          name="correo"
          required
          type="email"
          placeholder="correo@empresa.com"
          value={form.correo}
          onChange={handleChange}
          className="w-full bg-[#18181b] border border-white/10 p-3 rounded-xl text-white outline-none focus:border-orange-500 transition-colors"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-400">Tipo de Empresa</label>
        <select
          name="tipo_empresa"
          value={form.tipo_empresa}
          onChange={handleChange}
          className="w-full bg-[#18181b] border border-white/10 p-3 rounded-xl text-white outline-none focus:border-orange-500 transition-colors"
        >
          <option value="concesionario">Concesionario</option>
          <option value="servicio oficial">Servicio Oficial</option>
        </select>
      </div>

      {form.tipo_empresa === "concesionario" ? (
        <div className="space-y-2">
          <label className="text-sm font-medium text-zinc-400">Tipo de Automóviles</label>
          <select
            name="tipo_automoviles"
            value={form.tipo_automoviles}
            onChange={handleChange}
            className="w-full bg-[#18181b] border border-white/10 p-3 rounded-xl text-white outline-none focus:border-orange-500 transition-colors"
          >
            <option value="NUEVOS">Nuevos</option>
            <option value="USADOS">Usados</option>
            <option value="MIXTOS">Mixtos</option>
          </select>
        </div>
      ) : (
        <div className="space-y-2">
          <label className="text-sm font-medium text-zinc-400">NIT Concesionario Asociado</label>
          <input
            name="concesionario_nit"
            required
            placeholder="NIT del concesionario"
            value={form.concesionario_nit}
            onChange={handleChange}
            className="w-full bg-[#18181b] border border-white/10 p-3 rounded-xl text-white outline-none focus:border-orange-500 transition-colors"
          />
        </div>
      )}

      <button
        disabled={isSubmitting}
        className="md:col-span-2 bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white rounded-xl h-14 font-bold text-lg mt-4 transition-all active:scale-95"
      >
        {isSubmitting ? "Guardando..." : "Registrar Empresa"}
      </button>
    </form>
  );
};
