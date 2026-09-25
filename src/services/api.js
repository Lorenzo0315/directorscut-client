import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10000,
});

// Attach JWT to every API request
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

// Handle API responses
api.interceptors.response.use(
    (response) => response,
    (error) => {
        const status = error.response?.status;
        const requestUrl = error.config?.url || "";

        console.error(
            "API Error:",
            error.response?.data || error.message
        );

        // Token is invalid or expired
        if (
            status === 401 &&
            !requestUrl.includes("/Auth/login") &&
            !requestUrl.includes("/Auth/register")
        ) {
            localStorage.removeItem("token");
            localStorage.removeItem("user");

            // Redirect to login
            if (window.location.pathname !== "/login") {
                window.location.href = "/login";
            }
        }

        return Promise.reject(error);
    }
);

export default api;