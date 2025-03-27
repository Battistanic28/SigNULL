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