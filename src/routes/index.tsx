import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Register from '../pages/Register'
import ProtectedRoutes from './ProtectedRoutes'
import Users from '../pages/Users'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/users' element={<Users />} />
            <Route path='/dashboard' element={<ProtectedRoutes><Dashboard />
            </ProtectedRoutes>} />
        </Routes>
    )
}

export default AppRoutes