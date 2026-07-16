import api from "../axios";

const userService = {
  getUsers: () => api.get("/users"),
  getUserById: (id: any) => api.get(`/users/${id}`),
  createUser: (data: any) => api.post("/users", data),
  updateUser: (id: any, data: any) => api.put(`/users/${id}`, data),
  deleteUser: (id: any) => api.delete(`/users/${id}`),
};

export default userService;