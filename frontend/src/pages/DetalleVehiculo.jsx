import { ArrowLeft, Fuel, Gauge, Calendar, Car } from "lucide-react";
import { useParams,useNavigate } from "react-router";
import { useEffect,useState } from "react";
import { getVehiculoById } from "../services/vehiculoService";

export default function DetalleVehiculo() {
const { id } = useParams();
const navigate = useNavigate();

const [vehiculo, setVehiculo] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
  cargarVehiculo();
}, []);

const cargarVehiculo = async () => {
  try {
    const data = await getVehiculoById(id);

    setVehiculo({
      id: data.id,
      nombre: data.nombre,
      modelo: data.marca_nombre,
      precio: `$${Number(data.precio).toLocaleString("es-CO")}`,
      kilometraje: `${data.cilindraje}L`,
      combustible: data.combustible,
      transmision: data.carroceria,
      color: data.color || "No disponible",
      motor: data.motor,
      descripcion:
        `Vehículo ${data.nombre} de la marca ${data.marca_nombre}.`,
      imagen:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e",
    });
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

if (loading) {
  return (
    <div className="min-h-screen bg-[#09090b] flex items-center justify-center text-white">
      Cargando vehículo...
    </div>
  );
}

if (!vehiculo) {
  return (
    <div className="min-h-screen bg-[#09090b] flex items-center justify-center text-white">
      Vehículo no encontrado
    </div>
  );
}
  return (
    <main className="min-h-screen bg-[#09090b] text-white p-8">

      <button
  onClick={() => navigate("/cliente")}
  className="
    flex
    items-center
    gap-2
    mb-8
    text-zinc-400
    hover:text-white
    transition
  "
></button>

      <div
        className="
          max-w-7xl
          mx-auto
          grid
          lg:grid-cols-2
          gap-10
        "
      >

        <div>
          <img
            src={vehiculo.imagen}
            alt={vehiculo.nombre}
            className="
              w-full
              rounded-[28px]
              object-cover
              border
              border-white/5
            "
          />

          <div className="grid grid-cols-3 gap-4 mt-4">

            <img
              src={vehiculo.imagen}
              alt=""
              className="rounded-xl h-28 object-cover"
            />

            <img
              src={vehiculo.imagen}
              alt=""
              className="rounded-xl h-28 object-cover"
            />

            <img
              src={vehiculo.imagen}
              alt=""
              className="rounded-xl h-28 object-cover"
            />

          </div>
        </div>

        <div>

          <span
            className="
              px-3
              py-1
              rounded-full
              bg-orange-500/10
              text-orange-400
              text-sm
            "
          >
            Destacado
          </span>

          <h1 className="text-5xl font-black mt-4">
            {vehiculo.nombre}
          </h1>

          <p className="text-zinc-400 text-xl mt-2">
            Modelo {vehiculo.modelo}
          </p>

          <h2
            className="
              text-5xl
              font-black
              text-orange-500
              mt-8
            "
          >
            {vehiculo.precio}
          </h2>

          <div
            className="
              grid
              md:grid-cols-2
              gap-4
              mt-8
            "
          >

            <div className="bg-[#111111] rounded-2xl p-4">
              <Gauge />
              <p className="text-zinc-400 mt-2">
                Kilometraje
              </p>
              <h3 className="font-bold">
                {vehiculo.kilometraje}
              </h3>
            </div>

            <div className="bg-[#111111] rounded-2xl p-4">
              <Fuel />
              <p className="text-zinc-400 mt-2">
                Combustible
              </p>
              <h3 className="font-bold">
                {vehiculo.combustible}
              </h3>
            </div>

            <div className="bg-[#111111] rounded-2xl p-4">
              <Car />
              <p className="text-zinc-400 mt-2">
                Transmisión
              </p>
              <h3 className="font-bold">
                {vehiculo.transmision}
              </h3>
            </div>

            <div className="bg-[#111111] rounded-2xl p-4">
              <Calendar />
              <p className="text-zinc-400 mt-2">
                Año
              </p>
              <h3 className="font-bold">
                {vehiculo.modelo}
              </h3>
            </div>

          </div>

          <div
            className="
              bg-[#111111]
              rounded-[28px]
              p-6
              mt-8
            "
          >
            <h3 className="text-2xl font-bold">
              Especificaciones
            </h3>

            <div className="grid md:grid-cols-2 gap-4 mt-6">

              <div>
                <span className="text-zinc-500">
                  Motor
                </span>
                <p>{vehiculo.motor}</p>
              </div>

              <div>
                <span className="text-zinc-500">
                  Color
                </span>
                <p>{vehiculo.color}</p>
              </div>

              <div>
                <span className="text-zinc-500">
                  Combustible
                </span>
                <p>{vehiculo.combustible}</p>
              </div>

              <div>
                <span className="text-zinc-500">
                  Transmisión
                </span>
                <p>{vehiculo.transmision}</p>
              </div>

            </div>
          </div>

          <div
            className="
              bg-[#111111]
              rounded-[28px]
              p-6
              mt-6
            "
          >
            <h3 className="text-2xl font-bold mb-4">
              Descripción
            </h3>

            <p className="text-zinc-400 leading-relaxed">
              {vehiculo.descripcion}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-8">

            <button
              className="
                h-14
                rounded-2xl
                bg-orange-500
                font-bold
                hover:bg-orange-400
                transition
              "
            >
              Solicitar información
            </button>

            <button
              className="
                h-14
                rounded-2xl
                border
                border-white/10
                hover:bg-white/5
                transition
              "
            >
              Agendar visita
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}