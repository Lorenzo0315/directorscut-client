import api from "./api";

// Revenue Report
export const getRevenueReport = async () => {
    const response = await api.get("/Reports/revenue");
    return response.data;
};

// Popular Services
export const getPopularServices = async () => {
    const response = await api.get("/Reports/popular-services");
    return response.data;
};

// Top Barbers
export const getTopBarbers = async () => {
    const response = await api.get("/Reports/top-barbers");
    return response.data;
};

// Monthly Appointments
export const getMonthlyAppointments = async () => {
    const response = await api.get("/Reports/monthly-appointments");
    return response.data;
};