import type { User } from "../types/user-types";
import UserCard from "./UserCard";

interface Props {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}
const UserList = ({ users, onEdit, onDelete }: Props) => {
  return (
    <>
      {
        users.map((user) => (
          <UserCard
            key={user?.id}
            user={user}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      }
    </>
  )
}

export default UserList