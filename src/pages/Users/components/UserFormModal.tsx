import Input from "../../../components/common/Input/Input";
import type { UserAction, UserForm } from "../types/user-types";

interface Props {
  isOpen: boolean;
  action: UserAction;
  formData: UserForm;
  setFormData: React.Dispatch<React.SetStateAction<UserForm>>;
  onSubmit: () => void;
  onClose: () => void;
}

const UserFormModal = ({
  isOpen,
  formData,
  action,
  setFormData,
  onSubmit,
  onClose,
}: Props) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">{action === "add" ? "Add User" : "Edit User"}</h2>

          <button
            onClick={onClose}
            className="text-xl font-bold text-gray-500 hover:text-black"
          >
            ×
          </button>
        </div>

        <Input
          label="Name"
          name="name"
          type="text"
          placeholder="Enter Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
        />

        <Input
          label="Email"
          name="email"
          type="text"
          placeholder="Enter Email"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="rounded bg-gray-300 px-4 py-2"
          >
            Cancel
          </button>

          <button
            onClick={onSubmit}
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            {action === "add" ? "Create" : "Update"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserFormModal;