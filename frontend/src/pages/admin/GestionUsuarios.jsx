import {useEffect,useState,} from "react";
import { BotonLogout } from "../../components/BotonLogout.jsx";
import {getPersonas,getUsuarios,getVendedores,getEmpresas,getVehiculos,} from "../../services/userService";
import {DynamicTable,} from "../../components/tables/DynamicTable";
import { Modal } from "../../components/ui/Modal";
import { EmpresaForm } from "../../components/forms/EmpresaForm";
import { VehiculoForm } from "../../components/forms/VehiculoForm";

export const GestionUsuarios = () => {

  const [active,
    setActive] =
    useState("personas");

  const [data,
    setData] =
    useState([]);

const [showEmpresaModal,
  setShowEmpresaModal] =
  useState(false);

const [showVehiculoModal,
  setShowVehiculoModal] =
  useState(false);

  const loadData = async () => {

    if (active === "personas") {

      const res =
        await getPersonas();

      setData(res);

    }

    if (active === "usuarios") {

      const res =
        await getUsuarios();

      setData(res);

    }

    if (active === "vendedores") {

      const res =
        await getVendedores();

      setData(res);

    }

    if (active === "empresas") {

  const res =
    await getEmpresas();

  setData(res);

}

if (active === "vehiculos") {

  const res =
    await getVehiculos();

  setData(res);

}
  };

  useEffect(() => {

    loadData();

  }, [active]);

  const personaColumns = [

    {
      key: "cedula",
      label: "Cédula",
    },

    {
      key: "nombre",
      label: "Nombre",
    },

    {
      key: "apellido",
      label: "Apellido",
    },

    {
      key: "direccion",
      label: "Dirección",
    },

    {
      key: "telefono",
      label: "Teléfono",
    },

    {
      key: "correo",
      label: "Correo",
    },
  ];

  const usuarioColumns = [

    {
      key: "persona",
      label: "Persona",
    },

    {
      key: "nombre_usuario",
      label: "Usuario",
    },

    {
      key: "tipo",
      label: "Tipo",
    },
  ];

  const vendedorColumns = [

   {
      key: "cedula",
      label: "Cédula",
    },

    {
      key: "nombre",
      label: "Nombre",
    },

    {
      key: "apellido",
      label: "Apellido",
    },

    {
      key: "direccion",
      label: "Dirección",
    },

    {
      key: "telefono",
      label: "Teléfono",
    },

    {
      key: "correo",
      label: "Correo",
    },

    {
      key: "tipo",
      label: "Tipo",
    },
  ];

  const empresaColumns = [

  {
    key: "nit",
    label: "NIT",
  },

  {
    key: "nombre",
    label: "Nombre",
  },

  {
    key: "direccion",
    label: "Dirección",
  },

  {
    key: "telefono",
    label: "Teléfono",
  },

  {
    key: "correo",
    label: "Correo",
  },
];

const vehiculoColumns = [

  {
    key: "numero_bastidor",
    label: "Bastidor",
  },

  {
    key: "marca",
    label: "Marca",
  },

  {
    key: "modelo",
    label: "Modelo",
  },

  {
    key: "precio",
    label: "Precio",
  },

  {
    key: "estado",
    label: "Estado",
  },
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
              Gestión de Usuarios
            </h1>

            <p
              className="
                text-zinc-400
                mt-3
                text-sm
              "
            >
              Administra personas, usuarios y vendedores del sistema.
            </p>

          </div>

          <button

  onClick={() => {

    if (active === "empresas") {

      setShowEmpresaModal(true);

    }

    if (active === "vehiculos") {

      setShowVehiculoModal(true);

    }

  }}

  className="
    h-14
    px-8
    rounded-2xl
    bg-orange-500
    hover:bg-orange-400
    text-white
    font-semibold
    transition-all
    duration-300
    hover:scale-[1.02]
  "
>

  {
    active === "empresas"
      ? "Nueva Empresa"

      : active === "vehiculos"
      ? "Nuevo Vehículo"

      : active === "personas"
? "Nueva Persona"

: active === "usuarios"
? "Nuevo Usuario"

: active === "vendedores"
? "Nuevo Vendedor"

: "Nuevo Registro"
  }

</button>

        </section>

        {/* BOTONES */}

        <section
          className="
            flex
            flex-wrap
            gap-4
          "
        >

          <button
            onClick={() =>
              setActive("personas")
            }

            className={`
              h-14
              px-7
              rounded-2xl
              font-semibold
              transition-all
              duration-300
              hover:scale-[1.02]
              active:scale-[0.98]

              ${
                active === "personas"

                ? `
                  bg-orange-500
                  text-white
                  shadow-[0_10px_30px_rgba(249,115,22,.25)]
                `

                : `
                  bg-[#111111]
                  border
                  border-white/5
                  text-zinc-300
                  hover:bg-white/[0.03]
                `
              }
            `}
          >
            Personas
          </button>

          <button
            onClick={() =>
              setActive("usuarios")
            }

            className={`
              h-14
              px-7
              rounded-2xl
              font-semibold
              transition-all
              duration-300
              hover:scale-[1.02]
              active:scale-[0.98]

              ${
                active === "usuarios"

                ? `
                  bg-orange-500
                  text-white
                  shadow-[0_10px_30px_rgba(249,115,22,.25)]
                `

                : `
                  bg-[#111111]
                  border
                  border-white/5
                  text-zinc-300
                  hover:bg-white/[0.03]
                `
              }
            `}
          >
            Usuarios
          </button>

          <button
            onClick={() =>
              setActive("vendedores")
            }

            className={`
              h-14
              px-7
              rounded-2xl
              font-semibold
              transition-all
              duration-300
              hover:scale-[1.02]
              active:scale-[0.98]

              ${
                active === "vendedores"

                ? `
                  bg-orange-500
                  text-white
                  shadow-[0_10px_30px_rgba(249,115,22,.25)]
                `

                : `
                  bg-[#111111]
                  border
                  border-white/5
                  text-zinc-300
                  hover:bg-white/[0.03]
                `
              }
            `}
          >
            Vendedores
          </button>
        <button
  onClick={() =>
    setActive("empresas")
  }

  className={`

    h-14
    px-7
    rounded-2xl
    font-semibold
    transition-all
    duration-300

    ${
      active === "empresas"

      ? `
        bg-orange-500
        text-white
      `

      : `
        bg-[#111111]
        border
        border-white/5
        text-zinc-300
      `
    }
  `}
>
  Empresas
</button>

<button
  onClick={() =>
    setActive("vehiculos")
  }

  className={`

    h-14
    px-7
    rounded-2xl
    font-semibold
    transition-all
    duration-300

    ${
      active === "vehiculos"

      ? `
        bg-orange-500
        text-white
      `

      : `
        bg-[#111111]
        border
        border-white/5
        text-zinc-300
      `
    }
  `}
>
  Vehículos
</button>
        </section>



        {/* TABLA */}

        <section
          className="
            bg-[#111111]
            border
            border-white/5
            rounded-[32px]
            p-8
            shadow-[0_0_40px_rgba(0,0,0,.35)]
          "
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
                {
                  active === "personas"
? "Listado de personas"

: active === "usuarios"
? "Listado de usuarios"

: active === "vendedores"
? "Listado de vendedores"

: active === "empresas"
? "Listado de empresas"

: "Listado de vehículos"
                }
              </h2>

              <p className="text-zinc-500 mt-2 text-sm">

                {
                  active === "personas"
? "Consulta todas las personas registradas."

: active === "usuarios"
? "Administra los usuarios del sistema."

: active === "vendedores"
? "Consulta los vendedores registrados."

: active === "empresas"
? "Consulta las empresas registradas."

: "Consulta los vehículos registrados."
                }

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
              Exportar datos
            </button>

          </div>

          <div
            className="
              overflow-x-auto
              rounded-2xl
            "
          >

            {active === "personas" && (

              <DynamicTable
                columns={personaColumns}
                data={data}
              />

            )}

            {active === "usuarios" && (

              <DynamicTable
                columns={usuarioColumns}
                data={data}
              />

            )}

            {active === "vendedores" && (

              <DynamicTable
                columns={vendedorColumns}
                data={data}
              />

            )}

{active === "empresas" && (

  <DynamicTable
    columns={empresaColumns}
    data={data}
  />

)}

{active === "vehiculos" && (

  <DynamicTable
    columns={vehiculoColumns}
    data={data}
  />

)}
          </div>

        </section>

<Modal
  isOpen={showEmpresaModal}
  onClose={() => setShowEmpresaModal(false)}
  title="Registrar Empresa"
>
  <EmpresaForm
    onSubmit={(data) => {

      console.log("Empresa:", data);

      // Aquí luego irá:
      // createEmpresa(data)

      setShowEmpresaModal(false);

    }}
  />
</Modal>

<Modal
  isOpen={showVehiculoModal}
  onClose={() => setShowVehiculoModal(false)}
  title="Registrar Vehículo"
>
  <VehiculoForm
    onSubmit={(data) => {

      console.log("Vehículo:", data);

      // Aquí luego irá:
      // createVehiculo(data)

      setShowVehiculoModal(false);

    }}
  />
</Modal>

<BotonLogout />

</div>

</div>
  );
};