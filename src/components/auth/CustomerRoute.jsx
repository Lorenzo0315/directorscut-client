import { Navigate } from "react-router-dom";

function CustomerRoute({ children }) {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (user.role !== "Customer") {
        return <Navigate to="/dashboard" replace />;
    }

    return children;
}

export default CustomerRoute;