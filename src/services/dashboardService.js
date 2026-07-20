import api from "./api";

export const getDashboard = async () => {
    try {
        const response = await api.get("/Dashboard");

        return response.data;
    }
    catch (error) {
        console.error("Error fetching dashboard:", error);

        throw error;
    }
};