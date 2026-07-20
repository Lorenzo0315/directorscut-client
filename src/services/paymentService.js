import api from "./api";

// Admin
export const getAllPayments = async () => {
    const response = await api.get("/Payments");
    return response.data;
};

export const getPayment = async (id) => {
    const response = await api.get(`/Payments/${id}`);
    return response.data;
};

export const updatePaymentStatus = async (id, data) => {
    const response = await api.put(`/Payments/${id}/status`, data);
    return response.data;
};

export const deletePayment = async (id) => {
    const response = await api.delete(`/Payments/${id}`);
    return response.data;
};

// Customer
export const createPayment = async (data) => {
    const response = await api.post("/Payments", data);
    return response.data;
};

export const getMyPayments = async () => {
    const response = await api.get("/Payments/my");
    return response.data;
};