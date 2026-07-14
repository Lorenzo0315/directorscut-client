// src/services/api.js
import axios from "axios";

const api = axios.create({
    // ✅ Use HTTP for local development
    baseURL: "http://localhost:5231/api",
    headers: {
        "Content-Type": "application/json",
    },
    // Optional: timeout
    timeout: 10000,
});

// Attach JWT token
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

// Add response interceptor for better error handling
api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("API Error:", error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default api;