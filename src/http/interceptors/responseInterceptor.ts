import { toast } from "sonner";
import api from "../axios";
import { removeToken } from "../../utils/helpers";

const publicRoutes = ["/auth/login", "/auth/register"];
let isRedirecting = false;
api.interceptors.response.use(
  (response) => response,

  (error) => {
    const isPublicRoute = publicRoutes.some((route) =>
      error?.config?.url?.includes(route),
    );

    if (error.response?.status === 401 && !isPublicRoute && !isRedirecting) {
      isRedirecting = true;
      removeToken();

      toast.error("Session Expired");

      window.location.href = "/login";
    }

    return Promise.reject(error);
  },
);
