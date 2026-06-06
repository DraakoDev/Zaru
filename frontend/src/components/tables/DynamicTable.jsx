import { useState } from "react";
import Swal from "sweetalert2";
import { ViewActionButton } from "./ViewActionButton";
import { EditActionButton } from "./EditActionButton";
import { updatePersona, updateUsuario } from "../../services/userService";

const getToken = () =>
  document.cookie
    .split("; ")
    .find((row) => row.startsWith("access_token="))
    ?.split("=")[1];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isPrimaryField = (key) => key === "cedula" || key === "nombre_usuario";

const ModalWrapper = ({ title, children, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-8">
    <div className="max-w-3xl w-full rounded-3xl bg-white p-8 text-slate-900 shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <button
          onClick={onClose}
          className="text-slate-500 hover:text-slate-900"
          type="button"
        >
          Cerrar
        </button>
      </div>
      {children}
    </div>
  </div>
);

const ViewModal = ({ columns, item, onClose }) => (
  <ModalWrapper title="Detalle del registro" onClose={onClose}>
    <div className="grid gap-4 sm:grid-cols-2">
      {columns.map((col) => (
        <div key={col.key} className="rounded-2xl bg-slate-100 p-4">
          <p className="text-sm text-slate-500">{col.label}</p>
          <p className="mt-2 font-semibold text-slate-900">
            {item[col.key] ?? "-"}
          </p>
        </div>
      ))}
    </div>
  </ModalWrapper>
);

const EditModal = ({
  columns,
  formState,
  onChange,
  onSave,
  onClose,
  isSubmitting,
}) => (
  <ModalWrapper title="Editar registro" onClose={onClose}>
    <div className="grid gap-6 sm:grid-cols-2">
      {columns.map((col) => {
        const disabled = isPrimaryField(col.key);
        return (
          <label key={col.key} className="space-y-2">
            <span className="text-sm font-medium text-slate-600">
              {col.label}
            </span>
            <input
              value={formState[col.key] ?? ""}
              disabled={disabled}
              onChange={(e) => onChange(col.key, e.target.value)}
              className={`w-full rounded-2xl border px-4 py-3 text-slate-900 outline-none transition focus:border-orange-500 ${
                disabled ? "bg-slate-200 cursor-not-allowed" : "bg-slate-50"
              }`}
            />
          </label>
        );
      })}
    </div>
    <div className="mt-8 flex flex-wrap gap-4 justify-end">
      <button
        type="button"
        onClick={onClose}
        className="rounded-2xl border border-slate-300 px-6 py-3 text-slate-700 hover:bg-slate-100"
      >
        Cancelar
      </button>
      <button
        type="button"
        onClick={onSave}
        disabled={isSubmitting}
        className="rounded-2xl bg-orange-500 px-6 py-3 text-white font-semibold hover:bg-orange-600 disabled:opacity-60"
      >
        {isSubmitting ? "Guardando..." : "Guardar cambios"}
      </button>
    </div>
  </ModalWrapper>
);

const validateEditData = (columns, formState) => {
  const requiredFields = columns.filter((col) => !isPrimaryField(col.key));
  const missingField = requiredFields.find(
    (col) => !formState[col.key] || String(formState[col.key]).trim() === "",
  );

  if (missingField) {
    return {
      valid: false,
      message: `Por favor completa el campo ${missingField.label}.`,
    };
  }

  if (formState.correo && !emailPattern.test(formState.correo)) {
    return {
      valid: false,
      message: "Ingresa una dirección de correo válida.",
    };
  }

  return { valid: true };
};

const DynamicTable = ({ columns, data, entityType, onDataChange }) => {
  const [modalState, setModalState] = useState({ type: null, item: null });
  const [formState, setFormState] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const safeData = Array.isArray(data) ? data : [];

  const openModal = (type, item) => {
    setModalState({ type, item });

    if (type === "edit") {
      setFormState({ ...item });
    }
  };

  const closeModal = () => {
    setModalState({ type: null, item: null });
    setFormState({});
    setIsSubmitting(false);
  };

  const handleInputChange = (key, value) => {
    setFormState((prev) => ({ ...prev, [key]: value }));
  };

  const handleSaveEdit = async () => {
    const validation = validateEditData(columns, formState);
    if (!validation.valid) {
      Swal.fire({
        icon: "warning",
        title: "Faltan datos",
        text: validation.message,
        confirmButtonColor: "#f97316",
      });
      return;
    }

    setIsSubmitting(true);
    const token = getToken();

    try {
      if (entityType === "usuarios" && modalState.item?.nombre_usuario) {
        const response = await updateUsuario(
          token,
          modalState.item.nombre_usuario,
          {
            tipo: formState.tipo,
          },
        );

        if (!response.success) {
          throw new Error(
            response.error || "No se pudo actualizar el usuario.",
          );
        }

        await Swal.fire({
          icon: "success",
          title: "Actualizado",
          text: "El usuario se actualizó correctamente.",
          confirmButtonColor: "#f97316",
        });
      } else if (modalState.item?.cedula) {
        await updatePersona(token, modalState.item.cedula, formState);
        await Swal.fire({
          icon: "success",
          title: "Actualizado",
          text: "La persona se actualizó correctamente.",
          confirmButtonColor: "#f97316",
        });
      } else {
        throw new Error("No se pudo actualizar este registro.");
      }

      if (onDataChange) await onDataChange();
      closeModal();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "No se pudo guardar",
        text: error?.message || "Ocurrió un error al actualizar.",
        confirmButtonColor: "#f97316",
      });
      setIsSubmitting(false);
    }
  };

  const renderRow = (item, rowIndex) => (
    <tr
      key={rowIndex}
      className="border-b border-slate-100 hover:bg-slate-50 transition"
    >
      {columns.map((col) => (
        <td key={col.key} className="px-6 py-4 text-slate-600">
          {item[col.key]}
        </td>
      ))}
      <td className="px-6 py-4">
        <div className="flex gap-3 flex-wrap">
          <ViewActionButton onClick={() => openModal("view", item)} />
          <EditActionButton onClick={() => openModal("edit", item)} />
        </div>
      </td>
    </tr>
  );

  return (
    <div className="overflow-x-auto rounded-3xl">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-slate-100 text-slate-700">
            {columns.map((col) => (
              <th key={col.key} className="text-left px-6 py-4 font-bold">
                {col.label}
              </th>
            ))}
            <th className="text-left px-6 py-4 font-bold">Acciones</th>
          </tr>
        </thead>
        <tbody>{safeData.map(renderRow)}</tbody>
      </table>

      {modalState.type === "view" && modalState.item && (
        <ViewModal
          columns={columns}
          item={modalState.item}
          onClose={closeModal}
        />
      )}

      {modalState.type === "edit" && modalState.item && (
        <EditModal
          columns={columns}
          formState={formState}
          onChange={handleInputChange}
          onSave={handleSaveEdit}
          onClose={closeModal}
          isSubmitting={isSubmitting}
        />
      )}
    </div>
  );
};

export { DynamicTable };
