import { ShoppingCart, Heart, Car, DollarSign } from "lucide-react";

import { StatCard } from "../components/ui/StatCard";
import { useContext } from "react";
import { AuthContext } from "../context/contextos.js";
import { BotonLogout } from "../components/BotonLogout";
import { VehicleCard } from "../components/VehicleCard";

export const VistaCliente = () => {
  const { logout } = useContext(AuthContext);
const vehiculos = [
  {
    nombre: "Mazda 3 Touring",
    modelo: "2023",
    precio: "$85.000.000",
    km: "15.000 km",
    combustible: "Gasolina",
    transmision: "Automática",
    imagen:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e"
  },

  {
    nombre: "Toyota Corolla",
    modelo: "2022",
    precio: "$78.000.000",
    km: "22.000 km",
    combustible: "Híbrido",
    transmision: "Automática",
    imagen:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70"
  },

  {
    nombre: "BMW Serie 3",
    modelo: "2024",
    precio: "$210.000.000",
    km: "5.000 km",
    combustible: "Gasolina",
    transmision: "Automática",
    imagen:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"
  }
];
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
      <VehicleCard
        key={index}
        vehiculo={vehiculo}
      />
    ))}
  </div>

</section>

    </div>

  </div>
);
};
