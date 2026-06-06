import { Car, Fuel, Gauge } from "lucide-react";
import { useNavigate } from "react-router";

export const VehicleCard = ({ vehiculo }) => {

  const navigate = useNavigate();
<Route
  path="/vehiculo/:id"
  element={<DetalleVehiculo />}
/>
  return (
    
    <div
      className="
        bg-[#111111]
        border
        border-white/5
        rounded-[28px]
        overflow-hidden
        shadow-[0_0_30px_rgba(0,0,0,.35)]
        transition-all
        duration-300
        hover:scale-[1.02]
        hover:border-orange-500/30
      "
    >
      <img
        src={vehiculo.imagen}
        alt={vehiculo.nombre}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">
        <span
          className="
            px-3
            py-1
            rounded-full
            bg-orange-500/10
            text-orange-400
            text-xs
            font-semibold
          "
        >
          Destacado
        </span>

        <h3 className="text-2xl font-black mt-4">
          {vehiculo.nombre}
        </h3>

        <p className="text-zinc-400">
          Modelo {vehiculo.modelo}
        </p>

        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 text-zinc-300">
            <Gauge size={18} />
            {vehiculo.km}
          </div>

          <div className="flex items-center gap-2 text-zinc-300">
            <Fuel size={18} />
            {vehiculo.combustible}
          </div>

          <div className="flex items-center gap-2 text-zinc-300">
            <Car size={18} />
            {vehiculo.transmision}
          </div>
        </div>

        <h2 className="text-3xl font-black text-orange-500 mt-5">
          {vehiculo.precio}
        </h2>

        <button
  onClick={() => navigate(`/vehiculo/${vehiculo.id}`)}
  className="
    mt-5
    w-full
    h-12
    rounded-xl
    bg-orange-500
    hover:bg-orange-400
    transition
  "
>
  Ver detalles
</button>
      </div>
    </div>
  );
};