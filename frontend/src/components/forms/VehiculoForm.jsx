import { useState } from "react";

export const VehiculoForm = ({ onSubmit }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    combustible: "Gasolina",
    carroceria: "",
    color: ""
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
    try {
      // Pasamos el objeto completo al manejador de GestionUsuarios
      await onSubmit(form);
    } catch (error) {
      console.error("Error submitting VehiculoForm:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 p-2">
      {/* Sección 1: Datos de Identificación y Negocio */}
      <div className="md:col-span-2">
        <h3 className="text-orange-500 font-bold border-b border-white/5 pb-2 mb-4">Información del Inventario</h3>
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-400">Número de Bastidor (VIN)</label>
        <input
          name="numero_bastidor"
          required
          placeholder="Ej: VIN9876543210XYZ"
          value={form.numero_bastidor}
          onChange={handleChange}
          className="w-full bg-[#18181b] border border-white/10 p-3 rounded-xl text-white outline-none focus:border-orange-500 transition-colors"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-400">NIT Empresa (Registro)</label>
        <input
          name="empresa_nit"
          required
          placeholder="NIT del concesionario"
          value={form.empresa_nit}
          onChange={handleChange}
          className="w-full bg-[#18181b] border border-white/10 p-3 rounded-xl text-white outline-none focus:border-orange-500 transition-colors"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-400">Precio</label>
        <input
          name="precio"
          type="number"
          required
          placeholder="0.00"
          value={form.precio}
          onChange={handleChange}
          className="w-full bg-[#18181b] border border-white/10 p-3 rounded-xl text-white outline-none focus:border-orange-500 transition-colors"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-400">Estado</label>
        <select
          name="estado"
          value={form.estado}
          onChange={handleChange}
          className="w-full bg-[#18181b] border border-white/10 p-3 rounded-xl text-white outline-none focus:border-orange-500 transition-colors"
        >
          <option value="DISPONIBLE">Disponible</option>
          <option value="VENDIDO">Vendido</option>
          <option value="PROCESO">En Proceso</option>
        </select>
      </div>

      {/* Sección 2: Ficha Técnica */}
      <div className="md:col-span-2 mt-4">
        <h3 className="text-orange-500 font-bold border-b border-white/5 pb-2 mb-4">Especificaciones del Modelo</h3>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-400">Marca</label>
        <input
          name="marca"
          required
          placeholder="Ej: BMW"
          value={form.marca}
          onChange={handleChange}
          className="w-full bg-[#18181b] border border-white/10 p-3 rounded-xl text-white outline-none focus:border-orange-500 transition-colors"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-400">Modelo</label>
        <input
          name="modelo"
          required
          placeholder="Ej: Serie 3 M"
          value={form.modelo}
          onChange={handleChange}
          className="w-full bg-[#18181b] border border-white/10 p-3 rounded-xl text-white outline-none focus:border-orange-500 transition-colors"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-400">Cilindraje (L)</label>
        <input
          name="cilindraje"
          type="number"
          step="0.1"
          required
          placeholder="3.0"
          value={form.cilindraje}
          onChange={handleChange}
          className="w-full bg-[#18181b] border border-white/10 p-3 rounded-xl text-white outline-none focus:border-orange-500 transition-colors"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-400">Potencia (HP)</label>
        <input
          name="potencia"
          type="number"
          required
          placeholder="382"
          value={form.potencia}
          onChange={handleChange}
          className="w-full bg-[#18181b] border border-white/10 p-3 rounded-xl text-white outline-none focus:border-orange-500 transition-colors"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-400">Torque (Nm)</label>
        <input
          name="torque"
          type="number"
          required
          placeholder="500"
          value={form.torque}
          onChange={handleChange}
          className="w-full bg-[#18181b] border border-white/10 p-3 rounded-xl text-white outline-none focus:border-orange-500 transition-colors"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-400">Motor</label>
        <input
          name="motor"
          required
          placeholder="Ej: B58 Turbo"
          value={form.motor}
          onChange={handleChange}
          className="w-full bg-[#18181b] border border-white/10 p-3 rounded-xl text-white outline-none focus:border-orange-500 transition-colors"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-400">Combustible</label>
        <select
          name="combustible"
          value={form.combustible}
          onChange={handleChange}
          className="w-full bg-[#18181b] border border-white/10 p-3 rounded-xl text-white outline-none focus:border-orange-500 transition-colors"
        >
          <option value="Gasolina">Gasolina</option>
          <option value="Diesel">Diesel</option>
          <option value="Eléctrico">Eléctrico</option>
          <option value="Híbrido">Híbrido</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-400">Carrocería</label>
        <input
          name="carroceria"
          required
          placeholder="Ej: Sedán"
          value={form.carroceria}
          onChange={handleChange}
          className="w-full bg-[#18181b] border border-white/10 p-3 rounded-xl text-white outline-none focus:border-orange-500 transition-colors"
        />
      </div>

      <div className="space-y-2 md:col-span-2">
        <label className="text-sm font-medium text-zinc-400">Color (Referencia)</label>
        <input
          name="color"
          required
          placeholder="Ej: Azul Estoril"
          value={form.color}
          onChange={handleChange}
          className="w-full bg-[#18181b] border border-white/10 p-3 rounded-xl text-white outline-none focus:border-orange-500 transition-colors"
        />
      </div>

      <button
        disabled={isSubmitting}
        className="md:col-span-2 bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white rounded-xl h-14 font-bold text-lg mt-4 transition-all active:scale-95"
      >
        {isSubmitting ? "Guardando..." : "Registrar Vehículo en Stock"}
      </button>
    </form>
  );
};
