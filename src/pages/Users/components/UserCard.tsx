import { FaEdit, FaTrash } from "react-icons/fa";
import type { User } from "../types/user-types";

interface Props {

    user: User;

    onEdit: (user: User) => void;

    onDelete: (id: number) => void;

}
const UserCard = ({ user, onEdit, onDelete }: Props) => {
    return (
        <div className="rounded-xl bg-white p-6 shadow-md transition duration-300 hover:shadow-lg">
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

            {/* Actions */}
            <div className="mt-6 flex justify-end gap-3">
                <button
                    onClick={() => onEdit(user)}
                    className="cursor-pointer rounded-full bg-blue-100 p-3 text-blue-600 transition hover:bg-blue-200"
                    title="Edit"
                >
                    <FaEdit size={18} />
                </button>

                <button
                    onClick={() => onDelete(user.id)}
                    className="cursor-pointer rounded-full bg-red-100 p-3 text-red-600 transition hover:bg-red-200"
                    title="Delete"
                >
                    <FaTrash size={18} />
                </button>
            </div>
        </div>
    )
}

export default UserCard
