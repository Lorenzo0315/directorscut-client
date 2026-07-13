import api from "./api";

export const login = async (loginData) => {
    try {
        const response = await api.post("/Auth/login", loginData);
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
};

export const register = async (registerData) => {
    try {
        const response = await api.post("/Auth/register", registerData);
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
};