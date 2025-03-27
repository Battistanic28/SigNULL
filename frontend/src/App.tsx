import { useEffect, useState } from "react";
import { fetchUsers } from "./api";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


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
    <Router>
      <>
      <nav>
        <ul>
          <li><Link to="/login">Sign in</Link></li>
          <li><Link to="/register">Create new user</Link></li>
        </ul>
      </nav>
      {isLoggedIn && <div>{`Logged in as: ${currUser.firstName} ${currUser.lastName}`}</div>}
      {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
      </>

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login handleLogin={handleLogin}/>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}


export default App;