import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:3305/api",
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});


export default api;
