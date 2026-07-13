import { Routes, Route, Navigate } from "react-router-dom";

// Layouts
import AuthLayout from "../layouts/AuthLayout";
import CustomerLayout from "../layouts/CustomerLayout";
import StaffLayout from "../layouts/StaffLayout";

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

// Staff Pages
import Dashboard from "../pages/staff/Dashboard";
import ManageBarbers from "../pages/staff/ManageBarbers";
import ManageServices from "../pages/staff/ManageServices";
import ManageAppointments from "../pages/staff/ManageAppointments";
import ManagePayments from "../pages/staff/ManagePayments";
import Reports from "../pages/staff/Reports";

function AppRoutes() {
    return (
        <Routes>

            {/* Redirect */}
            <Route path="/" element={<Navigate to="/login" replace />} />

            {/* Authentication */}
            <Route element={<AuthLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Route>

            {/* Customer */}
            <Route element={<CustomerLayout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/barbers" element={<Barbers />} />
                <Route path="/book-appointment" element={<BookAppointment />} />
                <Route path="/my-appointments" element={<MyAppointments />} />
                <Route path="/my-payments" element={<MyPayments />} />
            </Route>

            {/* Staff */}
            <Route element={<StaffLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/manage-barbers" element={<ManageBarbers />} />
                <Route path="/manage-services" element={<ManageServices />} />
                <Route path="/manage-appointments" element={<ManageAppointments />} />
                <Route path="/manage-payments" element={<ManagePayments />} />
                <Route path="/reports" element={<Reports />} />
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