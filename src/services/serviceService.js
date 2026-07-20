import api from "./api";

export const getAllServices = async () => {
    const response = await api.get("/Services");
    return response.data;
};

export const createService = async (data) => {
    const response = await api.post("/Services", data);
    return response.data;
};

export const updateService = async (id, data) => {
    const response = await api.put(`/Services/${id}`, data);
    return response.data;
};

export const deleteService = async (id) => {
    const response = await api.delete(`/Services/${id}`);
    return response.data;
};