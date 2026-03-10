import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./router/ProtectedRoute";
import ToastHost from "./components/ToastHost";
import LoadingOverlay from "./components/LoadingOverlay";
import { ErrorBoundary } from "./components/ErrorBoundary";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import RoleRedirect from "./router/RoleRedirect";





// Admin
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminPenalties from "./pages/admin/AdminPenalties";
import AdminPayments from "./pages/admin/AdminPayments";
import AdminIncidents from "./pages/admin/AdminIncidents";

// Dispatcher
import DispatcherLayout from "./pages/dispatcher/DispatcherLayout";
import DispatcherDashboard from "./pages/dispatcher/DispatcherDashboard";
import DispatcherIncidents from "./pages/dispatcher/DispatcherIncidents";

// Rescue
import RescueDashboard from "./pages/rescue/RescueDashboard";
import RescueDispatches from "./pages/rescue/RescueDispatches";
import RescueLayout from "./pages/rescue/RescueLayout";
import RescueProfile from "./pages/rescue/RescueProfile";
import RescueRegister from "./pages/rescue/RescueRegister";



export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ToastHost />
        <LoadingOverlay />

        <Routes>

             {/* auth */}
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/role" element={<RoleRedirect />} />
      

        

       

          {/* Admin */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute roles={["ADMIN"]}>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="penalties" element={<AdminPenalties />} />
            <Route path="payments" element={<AdminPayments />} />
            <Route path="incidents" element={<AdminIncidents />} />
            <Route path="register" element={<RescueRegister />} />
          </Route>

          {/* Dispatcher */}
          <Route
            path="/dispatcher"
            element={
              <ProtectedRoute roles={["DISPATCHER"]}>
                <DispatcherLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DispatcherDashboard />} />
            <Route path="incidents" element={<DispatcherIncidents />} />
          </Route>

          {/* Rescue */}
          <Route
            path="/rescue"
            element={
              <ProtectedRoute roles={["RESCUE"]}>
                <RescueLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<RescueDashboard />} />
            <Route path="dispatches" element={<RescueDispatches />} />
            <Route path="profile" element={<RescueProfile />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
