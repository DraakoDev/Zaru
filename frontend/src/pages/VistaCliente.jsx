import { BotonLogout } from "../components/BotonLogout";
import { VehicleCard } from "../components/VehicleCard";
import { useEffect, useState } from "react";
import { getVehiculos } from "../services/vehiculoService";
export const VistaCliente = () => {
  const [vehiculos, setVehiculos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarVehiculos = async () => {
      try {
        const data = await getVehiculos();

        const vehiculosAdaptados = data.map((item) => ({
          id: item.id,
          nombre: item.nombre,
          modelo: item.marca_nombre,
          precio: `$${Number(item.precio).toLocaleString("es-CO")}`,
          combustible: item.combustible,
          transmision: item.carroceria,
          km: `${item.cilindraje}L`,
          imagen: "https://images.unsplash.com/photo-1555215695-3004980ad54e",
        }));

        setVehiculos(vehiculosAdaptados);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    cargarVehiculos();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#09090b] flex items-center justify-center text-white">
        Cargando vehículos...
      </div>
    );
  }
  return (
    <div
      className="
      min-h-screen
      bg-[#09090b]
      relative
      overflow-hidden
      p-8
      text-white
    "
    >
      {/* EFECTOS FONDO */}

      <div
        className="
        absolute
        w-[500px]
        h-[500px]
        bg-orange-500/10
        blur-3xl
        rounded-full
        -top-40
        -left-40
      "
      />

      <div
        className="
        absolute
        w-[400px]
        h-[400px]
        bg-purple-500/10
        blur-3xl
        rounded-full
        bottom-0
        right-0
      "
      />

      {/* CONTENIDO */}

      <div className="relative z-10 space-y-8">
        {/* HEADER */}

        <section
          className="
          flex
          flex-col
          md:flex-row
          md:items-center
          md:justify-between
          gap-6
        "
        >
          <div>
            <h1
              className="
              text-5xl
              font-black
              tracking-tight
              text-white
            "
            >
              Panel del cliente
            </h1>

            <p
              className="
              text-zinc-400
              mt-3
              text-sm
            "
            >
              Consulta tus compras, favoritos y vehículos vistos recientemente.
            </p>
          </div>

          <BotonLogout />
        </section>

        {/* STATS */}
      </div>

      {/* STATS */}

      {/* TABLA */}

      <section className="space-y-8">
        <div
          className="
      bg-[#111111]
      border
      border-white/5
      rounded-[28px]
      p-6
    "
        >
          <div className="flex gap-4 flex-col md:flex-row">
            <input
              type="text"
              placeholder="Buscar por marca..."
              className="
          flex-1
          bg-[#09090b]
          border
          border-white/5
          rounded-xl
          px-4
          h-12
          outline-none
        "
            />

            <button
              className="
          bg-orange-500
          px-8
          rounded-xl
          font-semibold
        "
            >
              Buscar
            </button>
          </div>
        </div>

        <div
          className="
      grid
      grid-cols-1
      md:grid-cols-2
      xl:grid-cols-3
      gap-8
    "
        >
          {vehiculos.map((vehiculo, index) => (
            <VehicleCard key={index} vehiculo={vehiculo} />
          ))}
        </div>
      </section>
    </div>
  );
};
