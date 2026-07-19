import { useEffect, useState } from "react";
import type { User, UserForm } from "../pages/Users/types/user-types";
import userService from "../http/services/userService";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const createUser = async (data: UserForm) => {
    try {
      await userService.createUser(data);
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };
  const fetchUsers = async () => {
    try {
      const res = await userService.getUsers();

      setUsers(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteUser = async (id: number) => {
    await userService.deleteUser(id);

    fetchUsers();
  };

  const updateUser = async (id: number, data: UserForm) => {
    await userService.updateUser(id, data);

    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    users,
    createUser,

    deleteUser,

    updateUser,
  };
};
