import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currUser, setCurrUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("access_token");
        const user = localStorage.getItem("user");

        if (token) {
            setIsLoggedIn(true);
            setCurrUser(JSON.parse(user));
        }
    }, []);

    const handleLogin = (token, user) => {
        localStorage.setItem("access_token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setIsLoggedIn(true);
        setCurrUser(user);
        navigate("/");
    };

    const handleLogout = () => {
        localStorage.clear();
        setIsLoggedIn(false);
        setCurrUser(null);
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, currUser, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
