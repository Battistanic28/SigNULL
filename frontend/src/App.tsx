import { useEffect, useState } from "react";
import { fetchUsers } from "./api";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers()
      .then(setUsers)
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="border p-2 my-2">
            {user.firstName} {user.lastName}- {user.email}
          </li>
        ))}
      </ul>
      <Login />
      <Register />
    </div>
  );
}

export default App;