import { Navigate } from "react-router-dom";
import { getToken } from "../utils/helpers";

interface ProtectedRoutesProps {
    children: React.ReactNode;
}
const ProtectedRoutes = ({ children }: ProtectedRoutesProps) => {
    const token = getToken();
    if (!token) {
        return <Navigate to="/login" replace />
    }
    return <>{children}</>;
}

export default ProtectedRoutes;