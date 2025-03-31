import { createContext, useState, useEffect, useContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../types/global";

interface MyComponentProps {
    children: ReactNode;
  }

interface AuthContextType {
    isLoggedIn: boolean;
    currUser: User | null;
    handleLogin: (token: string, user: User) => void;
    handleLogout: () => void;
  }

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<MyComponentProps> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currUser, setCurrUser] = useState<User | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem("access_token");
        const user = sessionStorage.getItem("user") || "";

        if (token) {
            setIsLoggedIn(true);
            setCurrUser(JSON.parse(user));
        }
    }, []);

    const handleLogin = (token: string, user: User) => {
        sessionStorage.setItem("access_token", token);
        sessionStorage.setItem("user", JSON.stringify(user));
        setIsLoggedIn(true);
        setCurrUser(user);
        navigate("/");
    };

    const handleLogout = () => {
        sessionStorage.clear();
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
