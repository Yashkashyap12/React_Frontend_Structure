import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Register from '../pages/Register'
import ProtectedRoutes from './ProtectedRoutes'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<ProtectedRoutes><Dashboard />
            </ProtectedRoutes>} />
        </Routes>
    )
}

export default AppRoutes