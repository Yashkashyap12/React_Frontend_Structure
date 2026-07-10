import api from "../http/axios";

const authService = {
  register: async (data: any) => {
    return await api.post("/auth/register", data);
  },
  login: async (data: any) => {
    return await api.post("/auth/login", data);
  },
  profile: async () => {
    return await api.get("/auth/profile");
  },
};

export default authService;
