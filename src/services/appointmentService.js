import api from "./api";

// Admin
export const getAllAppointments = async () => {
    const response = await api.get("/Appointments");
    return response.data;
};

export const getAppointment = async (id) => {
    const response = await api.get(`/Appointments/${id}`);
    return response.data;
};

export const updateAppointment = async (id, data) => {
    const response = await api.put(`/Appointments/${id}`, data);
    return response.data;
};

export const deleteAppointment = async (id) => {
    const response = await api.delete(`/Appointments/${id}`);
    return response.data;
};

export const confirmAppointment = async (id) => {
    const response = await api.put(`/Appointments/${id}/confirm`);
    return response.data;
};

export const completeAppointment = async (id) => {
    const response = await api.put(`/Appointments/${id}/complete`);
    return response.data;
};

// Customer
export const createAppointment = async (data) => {
    const response = await api.post("/Appointments", data);
    return response.data;
};

export const getMyAppointments = async () => {
    const response = await api.get("/Appointments/my");
    return response.data;
};

export const cancelAppointment = async (id) => {
    const response = await api.put(`/Appointments/${id}/cancel`);
    return response.data;
};