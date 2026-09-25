import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import api from "../../services/api";

function ProtectedRoute({ children }) {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const verifyToken = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                setLoading(false);
                return;
            }

            try {
                await api.get("/Auth/me");

                setAuthenticated(true);
            } catch (error) {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                setAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };

        verifyToken();
    }, []);

    if (loading) {
        return (
            <div className="text-center mt-5">
                <p>Verifying authentication...</p>
            </div>
        );
    }

    if (!authenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProtectedRoute;