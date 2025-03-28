import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

const api = axios.create({
  baseURL: API_BASE_URL,
//   withCredentials: true,
});

export const fetchUsers = async () => {
  const response = await api.get("/users");
  return response.data;
};

export const registerUser = async (data: any): Promise<number | string> => {
    try {
        const response = await api.post("/register", data);
        return response.status;
    } catch (error: any) {
        return error.response?.data?.message || error.message;
    }
};

export const loginUser = async (data: any): Promise<{}> => {
  try {
      const response = await api.post("/login", data);
      return response.data;
  } catch (error: any) {
      return error.response?.data?.message || error.message;
  }
};

export const getConversation = async (senderId: number, recieverId: number): Promise<{}> => {
  try {
    const response = await api.get(`users/${senderId}/messages/${recieverId}`);
    return response.data;
  } catch (error: any) {
    return error.response?.data?.message || error.message;
  }
}