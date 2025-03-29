import Login from "./components/Login";
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import Chat from "./components/Chat";
import { useState, useEffect } from "react";
import { fetchUsers } from "./api";
import { useAuth } from "./hooks/useAuth";
import { Navigate } from "react-router-dom";

function App() {
  const { currUser } = useAuth()
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      setUsers(await fetchUsers());
    };

    getUsers();
  }, []);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat/:senderId/:recieverId" element={<Chat />} />
        <Route path="/" element={currUser ? <Dashboard users={users} /> : <Navigate to="/login" />} />
      </Routes>
    </>
  );
}

export default App;
