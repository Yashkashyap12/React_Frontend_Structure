import { useState } from "react";
import type { UserForm, User, UserAction } from "./types/user-types";
import { useUsers } from "../../hooks/useUsers";
import UserList from "./components/UserList";
import UserFormModal from "./components/UserFormModal";
import { INITIAL_USER_FORM } from "../../constants/constant";
import { Link } from "react-router-dom";


const Users = () => {
    const {
        users,
        createUser,
        deleteUser,
        updateUser,
    } = useUsers()

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [action, setAction] = useState<UserAction>("add");
    const [formData, setFormData] = useState<UserForm>({
        ...INITIAL_USER_FORM
    })

    const resetForm = () => {
        setFormData({ ...INITIAL_USER_FORM });
        setSelectedUser(null);
    };

    const closeModal = () => {
        resetForm();
        setIsModalOpen(false);
    };

    const handleEditUser = (user: User) => {
        setSelectedUser(user);

        setFormData({
            name: user.name,
            email: user.email,
        });

        setAction("edit");
        setIsModalOpen(true);
    };

    const handleUpdateUser = async () => {
        try {
            if (!selectedUser) return;
            await updateUser(selectedUser.id, formData);
            closeModal();
        } catch (error) {
            console.log(error)
        }
    }

    const handleCreateUser = async () => {
        try {
            await createUser(formData);
            closeModal();
        } catch (error) {
            console.log(error)
        }
    }

    const handleAddUser = () => {
        resetForm();
        setAction("add");
        setIsModalOpen(true);
    };

    const handleSubmit = async () => {
        if (action === "add") {
            await handleCreateUser();
            return;
        } else {
            await handleUpdateUser();
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="mb-8 flex items-center justify-between">
                <h1 className="text-3xl font-bold">
                    Users
                </h1>

                <Link className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700" to="/">

                    Add User
                </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <UserList
                    users={users}
                    onEdit={handleEditUser}
                    onDelete={deleteUser}
                />
                <UserFormModal
                    action={action}
                    isOpen={isModalOpen}
                    formData={formData}
                    setFormData={setFormData}
                    onSubmit={handleSubmit}
                    onClose={closeModal}
                />
            </div>
        </div>

    );
};

export default Users;