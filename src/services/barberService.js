import api from "./api";

export const getBarbers = async () => {
    const response = await api.get("/Barbers");
    return response.data;
};

export const getBarber = async (id) => {
    const response = await api.get(`/Barbers/${id}`);
    return response.data;
};

export const createBarber = async (data) => {
    const response = await api.post("/Barbers", data);
    return response.data;
};

export const updateBarber = async (id, data) => {
    const response = await api.put(`/Barbers/${id}`, data);
    return response.data;
};

export const deleteBarber = async (id) => {
    const response = await api.delete(`/Barbers/${id}`);
    return response.data;
};