import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import api from "../../services/api";

function AdminRoute({ children }) {
    const [loading, setLoading] = useState(true);
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        const verifyAdmin = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                setLoading(false);
                return;
            }

            try {
                const response = await api.get("/Auth/me");

                if (response.data.role === "Admin") {
                    setAuthorized(true);
                }
            } catch (error) {
                // Token is invalid or expired
                localStorage.removeItem("token");
                localStorage.removeItem("user");
            } finally {
                setLoading(false);
            }
        };

        verifyAdmin();
    }, []);

    if (loading) {
        return (
            <div className="text-center mt-5">
                <p>Verifying authentication...</p>
            </div>
        );
    }

    if (!authorized) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default AdminRoute;