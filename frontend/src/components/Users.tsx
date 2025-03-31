import { useAuth } from "../hooks/useAuth";
import { UserType } from "../types/global";
import { Link } from "react-router-dom";



const Users = ({ users }: {users:UserType[]}) => {
  const { currUser } = useAuth()

  return (
    <div className="users-container">
      <div className="users-title">My Friends</div>
      <ul>
        {users.map((user: UserType) => {
          if (user.id !== currUser.id) {
            return (
              <li className="users-item" key={user.id}>
                <button className="users-btn">
                  <Link to={`/chat/${currUser.id}/${user.id}/${user.firstName}`}>{`${user.firstName} ${user.lastName}`}</Link>
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
