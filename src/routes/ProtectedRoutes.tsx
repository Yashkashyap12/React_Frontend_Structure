import { Navigate } from "react-router-dom";

interface ProtectedRoutesProps{
    children:React.ReactNode;
}
const ProtectedRoutes = ({children}:ProtectedRoutesProps) => {
    const token = localStorage.getItem('token');
    if (!token) {
        return <Navigate to="/login"  replace/>
    }
    return children;
}

export default ProtectedRoutes;