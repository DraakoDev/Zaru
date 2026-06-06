import { BrowserRouter, Routes, Route } from "react-router";
import { GestionUsuarios } from "./pages/admin/GestionUsuarios.jsx";
import { CrearCuenta } from "./pages/CrearCuenta.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import { VistaCliente } from "./pages/VistaCliente.jsx";
import { VistaVendedor } from "./pages/VistaVendedor.jsx";
import { ProtectedRoute } from "./routes/ProtectedRoute.jsx";
import { AuthProvider } from "./context/authContext.jsx";
import { RecuperacionPage } from "./pages/RecuperacionPage";
import { CambioContraPage } from "./pages/CambioContraPage";
import DetalleVehiculo from "./pages/DetalleVehiculo";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* PUBLICAS */}

          <Route path="/login" element={<LoginPage />} />
          <Route path="/registro" element={<CrearCuenta />} />
          <Route path="/recover-password" element={<RecuperacionPage />} />
          <Route path="/cambiar-password" element={<CambioContraPage />} />
          <Route path="/vehiculo/:id" element={<DetalleVehiculo />} />

          {/* PRIVADAS */}

          <Route
            path="/cliente"
            element={
              <ProtectedRoute tipo="cliente">
                <VistaCliente />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute tipo="admin">
                <GestionUsuarios />
              </ProtectedRoute>
            }
          />
          <Route
            path="/vendedor"
            element={
              <ProtectedRoute tipo="vendedor">
                <VistaVendedor />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
