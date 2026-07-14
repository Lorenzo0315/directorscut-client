     import api from "./api";

export const getAllBarbers = async () => {
    const response = await api.get("/barbers");
    return response.data;
};