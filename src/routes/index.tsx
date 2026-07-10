import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Register from '../pages/Register'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    )
}

export default AppRoutes