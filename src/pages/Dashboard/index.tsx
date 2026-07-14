import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import authService from "../../http/services/authService";

const Dashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        id: "",
        name: "",
        email: ""
    })

    const getProfile = async () => {
        try {
            const response = await authService.profile();
            setUser(response?.data?.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProfile();
    }, [])

    const handleLogout = () => {
        try {
            localStorage.removeItem('token');
            toast.success("Logout successful")
            navigate('/login')
        } catch (error) {
            console.log(error)
            toast.error("Logout Failed")
        }
    }
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-white shadow">
                <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
                    <h1 className="text-2xl font-bold text-gray-800">
                        Dashboard
                    </h1>

                    <div className="flex gap-3">
                        <Link
                            to="/login"
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                        >
                            Login
                        </Link>

                        <button onClick={handleLogout} className="bg-red-500 cursor-pointer hover:bg-red-600 text-white px-4 py-2 rounded-lg">
                            Logout
                        </button>
                    </div>
                </div>
            </header>
            {/* Content */}
            <main className="max-w-6xl mx-auto p-6">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        Welcome {user?.name}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Email : {user?.email}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
                            <h3 className="text-lg font-semibold text-indigo-700">
                                Total Users
                            </h3>
                            <p className="text-3xl font-bold text-gray-800 mt-2">120</p>
                        </div>

                        <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                            <h3 className="text-lg font-semibold text-green-700">
                                Active Sessions
                            </h3>
                            <p className="text-3xl font-bold text-gray-800 mt-2">18</p>
                        </div>

                        <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-100">
                            <h3 className="text-lg font-semibold text-yellow-700">
                                Notifications
                            </h3>
                            <p className="text-3xl font-bold text-gray-800 mt-2">5</p>
                        </div>
                    </div>
                </div>
            </main>
        </div >
    );
};

export default Dashboard;