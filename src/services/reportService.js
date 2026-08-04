import api from "./api";

export const getReport = async (startDate = null, endDate = null) => {
    try {

        const response = await api.get("/Reports", {
            params: {
                startDate,
                endDate,
            },
        });

        return response.data;

    } catch (error) {

        console.error("Error fetching report:", error);

        throw error;

    }
};