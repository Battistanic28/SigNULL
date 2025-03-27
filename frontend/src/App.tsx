import { useEffect, useState } from "react";
import { fetchUsers } from "./api";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currUser, setCurrUser] = useState(null)

  const handleLogin = (token, user) => {
    localStorage.setItem("access_token", token);
    localStorage.setItem("user", JSON.stringify(user));

    setIsLoggedIn(true);
    setCurrUser(user);
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setCurrUser(null);
  };
    
  
  useEffect(() => {

    fetchUsers()
      .then(setUsers)
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Users</h1>
      <p>{`Logged in as: ${currUser?.firstName} ${currUser?.lastName}`}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="border p-2 my-2">
            {user.firstName} {user.lastName}- {user.email}
          </li>
        ))}
      </ul>
    {!isLoggedIn ? (
      <>
        <Login handleLogin={handleLogin} />
        <Register />
      </>
    ) : <button onClick={handleLogout}>Logout</button>
    }
    </div>
  );
}

export default App;