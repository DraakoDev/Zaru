import { ShoppingCart, Heart, Car, DollarSign } from "lucide-react";
<<<<<<< HEAD
=======
import { StatCard } from "../components/ui/StatCard";
import { useContext } from "react";
import { AuthContext } from "../context/contextos.js";
>>>>>>> feat/tablas-crud
import { BotonLogout } from "../components/BotonLogout";
import { VehicleCard } from "../components/VehicleCard";
import { useContext, useEffect, useState } from "react";
import { getVehiculos } from "../services/vehiculoService";
export const VistaCliente = () => {
<<<<<<< HEAD
=======
  const { logout } = useContext(AuthContext);
const [vehiculos, setVehiculos] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  cargarVehiculos();
}, []);

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
      imagen:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e"
    }));

    setVehiculos(vehiculosAdaptados);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};
if (loading) {
  return (
    <div className="min-h-screen bg-[#09090b] flex items-center justify-center text-white">
      Cargando vehículos...
    </div>
  );
}
>>>>>>> feat/tablas-crud
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

<<<<<<< HEAD
        <section
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-6
        "
        >
          <div
            className="
            bg-[#111111]
            border
            border-white/5
            rounded-[28px]
            p-6
            shadow-[0_0_30px_rgba(0,0,0,.35)]
          "
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-zinc-400 text-sm">Compras</p>

                <h3
                  className="
                  text-4xl
                  font-black
                  mt-3
                "
                >
                  12
                </h3>
              </div>

              <div
                className="
                w-14
                h-14
                rounded-2xl
                bg-orange-500/10
                flex
                items-center
                justify-center
                text-orange-400
              "
              >
                <ShoppingCart size={28} />
              </div>
            </div>
          </div>

          <div
            className="
            bg-[#111111]
            border
            border-white/5
            rounded-[28px]
            p-6
            shadow-[0_0_30px_rgba(0,0,0,.35)]
          "
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-zinc-400 text-sm">Favoritos</p>

                <h3
                  className="
                  text-4xl
                  font-black
                  mt-3
                "
                >
                  28
                </h3>
              </div>

              <div
                className="
                w-14
                h-14
                rounded-2xl
                bg-pink-500/10
                flex
                items-center
                justify-center
                text-pink-400
              "
              >
                <Heart size={28} />
              </div>
            </div>
          </div>

          <div
            className="
            bg-[#111111]
            border
            border-white/5
            rounded-[28px]
            p-6
            shadow-[0_0_30px_rgba(0,0,0,.35)]
          "
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-zinc-400 text-sm">Vehículos vistos</p>

                <h3
                  className="
                  text-4xl
                  font-black
                  mt-3
                "
                >
                  134
                </h3>
              </div>

              <div
                className="
                w-14
                h-14
                rounded-2xl
                bg-cyan-500/10
                flex
                items-center
                justify-center
                text-cyan-400
              "
              >
                <Car size={28} />
              </div>
            </div>
          </div>

          <div
            className="
            bg-[#111111]
            border
            border-white/5
            rounded-[28px]
            p-6
            shadow-[0_0_30px_rgba(0,0,0,.35)]
          "
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-zinc-400 text-sm">Presupuesto</p>

                <h3
                  className="
                  text-4xl
                  font-black
                  mt-3
                "
                >
                  $80M
                </h3>
              </div>

              <div
                className="
                w-14
                h-14
                rounded-2xl
                bg-green-500/10
                flex
                items-center
                justify-center
                text-green-400
              "
              >
                <DollarSign size={28} />
              </div>
            </div>
          </div>
        </section>

        {/* TABLA */}

        <section
          className="
          bg-[#111111]
=======
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
>>>>>>> feat/tablas-crud
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
<<<<<<< HEAD
        >
          <div
            className="
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-4
            mb-8
          "
          >
            <div>
              <h2
                className="
                text-3xl
                font-black
                text-white
              "
              >
                Vehículos favoritos
              </h2>

              <p className="text-zinc-500 mt-2 text-sm">
                Consulta los vehículos guardados en favoritos.
              </p>
            </div>

            <button
              className="
              h-14
              px-7
              rounded-2xl
              bg-orange-500
              hover:bg-orange-400
              text-white
              font-semibold
              transition-all
              duration-300
              hover:scale-[1.02]
              active:scale-[0.98]
              shadow-[0_10px_30px_rgba(249,115,22,.25)]
            "
            >
              Explorar vehículos
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr
                  className="
                  border-b
                  border-white/10
                  text-left
                  text-zinc-400
                "
                >
                  <th className="pb-5 font-medium">Marca</th>

                  <th className="pb-5 font-medium">Modelo</th>

                  <th className="pb-5 font-medium">Precio</th>

                  <th className="pb-5 font-medium">Estado</th>
                </tr>
              </thead>

              <tbody>
                <tr
                  className="
                  border-b
                  border-white/5
                  hover:bg-white/[0.02]
                  transition-all
                "
                >
                  <td className="py-6 font-semibold">BMW</td>

                  <td className="text-zinc-300">X5</td>

                  <td className="text-zinc-300">$240.000.000</td>

                  <td>
                    <span
                      className="
                      bg-green-500/10
                      text-green-400
                      px-4
                      py-2
                      rounded-full
                      text-xs
                      font-semibold
                    "
                    >
                      Disponible
                    </span>
                  </td>
                </tr>

                <tr
                  className="
                  border-b
                  border-white/5
                  hover:bg-white/[0.02]
                  transition-all
                "
                >
                  <td className="py-6 font-semibold">Audi</td>

                  <td className="text-zinc-300">A4</td>

                  <td className="text-zinc-300">$180.000.000</td>

                  <td>
                    <span
                      className="
                      bg-yellow-500/10
                      text-yellow-400
                      px-4
                      py-2
                      rounded-full
                      text-xs
                      font-semibold
                    "
                    >
                      Reservado
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
=======
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

>>>>>>> feat/tablas-crud
    </div>
  );
};
