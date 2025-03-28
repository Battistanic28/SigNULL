import { useState, useEffect } from "react";
import { fetchUsers } from "../api";
import { useAuth } from "../hooks/useAuth";
import { User } from "../types/global";

interface UsersProps {
    setChatMembers: React.Dispatch<React.SetStateAction<User[]>>;
}

const Users = ({ setChatMembers }: UsersProps) => {
  const { currUser } = useAuth();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      setUsers(await fetchUsers());
    };

    getUsers();
  }, []);

  return (
    <div className="users-container">
      <ul>
        {users.map((user: User) => {
          if (user.id !== currUser.id) {
            const participants = [currUser, user];
            return (
              <li className="users-item" key={user.id}>
                <button
                  className="users-btn"
                  onClick={() => setChatMembers(participants)}
                >
                  {`${user.firstName} ${user.lastName}`}
                </button>
              </li>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
};

export default Users;
