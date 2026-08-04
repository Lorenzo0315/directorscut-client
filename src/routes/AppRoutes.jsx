import { Routes, Route } from "react-router-dom";

// Route Protection
import ProtectedRoute from "../components/auth/ProtectedRoute";
import CustomerRoute from "../components/auth/CustomerRoute";
import AdminRoute from "../components/auth/AdminRoute";

// Layouts
import AuthLayout from "../layouts/AuthLayout";
import CustomerLayout from "../layouts/CustomerLayout";
import AdminLayout from "../layouts/AdminLayout";

// Landing Page
import LandingPage from "../pages/LandingPage";

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
import PaymentPage from "../pages/customer/PaymentPage";

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

            {/* ========================= */}
            {/* PUBLIC LANDING PAGE */}
            {/* ========================= */}

            <Route
                path="/"
                element={<LandingPage />}
            />

            {/* ========================= */}
            {/* AUTHENTICATION */}
            {/* ========================= */}

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

            {/* ========================= */}
            {/* CUSTOMER ROUTES */}
            {/* ========================= */}

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
                    path="/payments/:appointmentId"
                    element={<PaymentPage />}
                />

                <Route
                    path="/my-payments"
                    element={<MyPayments />}
                />

            </Route>

            {/* ========================= */}
            {/* ADMIN ROUTES */}
            {/* ========================= */}

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

            {/* ========================= */}
            {/* 404 PAGE */}
            {/* ========================= */}

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