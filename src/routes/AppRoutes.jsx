import { Routes, Route, Navigate } from "react-router-dom";

// Route Protection
import ProtectedRoute from "../components/auth/ProtectedRoute";
import CustomerRoute from "../components/auth/CustomerRoute";
import AdminRoute from "../components/auth/AdminRoute";

// Layouts
import AuthLayout from "../layouts/AuthLayout";
import CustomerLayout from "../layouts/CustomerLayout";
import AdminLayout from "../layouts/AdminLayout";

// Authentication
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

// Customer Pages
import Home from "../pages/customer/Home";
import Services from "../pages/customer/Services";
import Barbers from "../pages/customer/Barbers";
import BookAppointment from "../pages/customer/BookAppointment";
import MyAppointments from "../pages/customer/MyAppointments";
import MyPayments from "../pages/customer/MyPayments";

// Admin Pages
import Dashboard from "../pages/admin/Dashboard";
import ManageBarbers from "../pages/admin/ManageBarbers";
import ManageServices from "../pages/admin/ManageServices";
import ManageAppointments from "../pages/admin/ManageAppointments";
import ManagePayments from "../pages/admin/ManagePayments";
import Reports from "../pages/admin/Reports";

function AppRoutes() {
    return (
        <Routes>

            {/* Redirect */}
            <Route
                path="/"
                element={<Navigate to="/login" replace />}
            />

            {/* Authentication */}
            <Route element={<AuthLayout />}>
                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />
            </Route>

            {/* Customer Routes */}
            <Route
                element={
                    <ProtectedRoute>
                        <CustomerRoute>
                            <CustomerLayout />
                        </CustomerRoute>
                    </ProtectedRoute>
                }
            >
                <Route
                    path="/home"
                    element={<Home />}
                />

                <Route
                    path="/services"
                    element={<Services />}
                />

                <Route
                    path="/barbers"
                    element={<Barbers />}
                />

                <Route
                    path="/book-appointment"
                    element={<BookAppointment />}
                />

                <Route
                    path="/my-appointments"
                    element={<MyAppointments />}
                />

                <Route
                    path="/my-payments"
                    element={<MyPayments />}
                />
            </Route>

            {/* Admin Routes */}
            <Route
                element={
                    <ProtectedRoute>
                        <AdminRoute>
                            <AdminLayout />
                        </AdminRoute>
                    </ProtectedRoute>
                }
            >
                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />

                <Route
                    path="/manage-barbers"
                    element={<ManageBarbers />}
                />

                <Route
                    path="/manage-services"
                    element={<ManageServices />}
                />

                <Route
                    path="/manage-appointments"
                    element={<ManageAppointments />}
                />

                <Route
                    path="/manage-payments"
                    element={<ManagePayments />}
                />

                <Route
                    path="/reports"
                    element={<Reports />}
                />
            </Route>

            {/* 404 */}
            <Route
                path="*"
                element={
                    <div className="container mt-5 text-center">
                        <h1>404</h1>
                        <p>Page Not Found</p>
                    </div>
                }
            />

        </Routes>
    );
}

export default AppRoutes;