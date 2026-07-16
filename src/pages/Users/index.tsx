import { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import userService from "../../http/services/userService";

interface User {
    id: number;
    name: string;
    email: string;
}
const Users = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    })

    const fetchUsers = async () => {
        try {
            const res = await userService.getUsers();
            console.log(res?.data)
            setUsers(res?.data?.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        console.log("users--", users)
        fetchUsers();
    }, []);

    const handleDeleteUser = async (id: number) => {
        try {
            await userService.deleteUser(id);
            fetchUsers();
        } catch (error) {
            console.log(error)
        }
    }

    const handleEditUser = (user: User) => {
        setSelectedUser(user);
        setFormData({
            name: user?.name,
            email: user?.email
        })
        setIsEditOpen(true);
    }

    const handleUpdateUser = async () => {
        try {
            if (!selectedUser) return;
            await userService.updateUser(selectedUser?.id, formData);
            fetchUsers();
            setIsEditOpen(false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="mb-8 text-center text-3xl font-bold">Users</h1>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="rounded-xl bg-white p-6 shadow-md transition duration-300 hover:shadow-lg"
                    >
                        {/* Avatar */}
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-xl font-bold text-white">
                            {user.name.charAt(0).toUpperCase()}
                        </div>

                        {/* User Info */}
                        <h2 className="text-xl font-semibold text-gray-800">
                            {user.name}
                        </h2>

                        <p className="mt-2 text-sm text-gray-600">
                            <span className="font-medium">Email:</span> {user.email}
                        </p>

                        {/* Action Icons */}
                        <div className="mt-6 flex justify-end gap-3">
                            <button
                                onClick={() => (handleEditUser(user))}
                                className="rounded-full cursor-pointer bg-blue-100 p-3 text-blue-600 transition hover:bg-blue-200"
                                title="Edit"
                            >
                                <FaEdit size={18} />
                            </button>

                            <button
                                onClick={() => handleDeleteUser(user?.id)}
                                className="rounded-full cursor-pointer bg-red-100 p-3 text-red-600 transition hover:bg-red-200"
                                title="Delete"
                            >
                                <FaTrash size={18} />
                            </button>
                        </div>
                    </div>
                ))}
                {isEditOpen && (
                    <div className="mt-8 rounded-lg bg-white p-6 shadow">
                        <h2 className="mb-4 text-xl font-bold">Edit User</h2>

                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                            }
                            className="mb-3 w-full rounded border p-2"
                            placeholder="Name"
                        />

                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                            }
                            className="mb-3 w-full rounded border p-2"
                            placeholder="Email"
                        />

                        <button onClick={handleUpdateUser} className="rounded bg-blue-500 px-4 py-2 text-white">
                            Update
                        </button>
                    </div>
                )}
            </div>
        </div>

    );
};

export default Users;