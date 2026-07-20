import { NavLink, useNavigate } from "react-router-dom";
import {
    FaTachometerAlt,
    FaCut,
    FaUserTie,
    FaCalendarAlt,
    FaMoneyBillWave,
    FaChartBar,
    FaSignOutAlt
} from "react-icons/fa";

function Sidebar() {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/login");
    };

    return (
        <aside className="admin-sidebar">

            <div className="sidebar-logo">

                <h3>
                    ✂ Director's Cut
                </h3>

                <p>Admin Panel</p>

            </div>

            <nav>

                <NavLink to="/dashboard">
                    <FaTachometerAlt />
                    <span>Dashboard</span>
                </NavLink>

                <NavLink to="/manage-services">
                    <FaCut />
                    <span>Services</span>
                </NavLink>

                <NavLink to="/manage-barbers">
                    <FaUserTie />
                    <span>Barbers</span>
                </NavLink>

                <NavLink to="/manage-appointments">
                    <FaCalendarAlt />
                    <span>Appointments</span>
                </NavLink>

                <NavLink to="/manage-payments">
                    <FaMoneyBillWave />
                    <span>Payments</span>
                </NavLink>

                <NavLink to="/reports">
                    <FaChartBar />
                    <span>Reports</span>
                </NavLink>

            </nav>

            <button
                className="logout-btn"
                onClick={handleLogout}
            >
                <FaSignOutAlt />
                <span>Logout</span>
            </button>

        </aside>
    );
}

export default Sidebar;