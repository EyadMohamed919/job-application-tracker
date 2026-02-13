import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) =>{
    const [user, setUser] = useState(null);

    useEffect(()=>{
        const savedUser = sessionStorage.getItem("user");
        if(savedUser)
        {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const login = (userData)=>{
        setUser(userData);
        sessionStorage.setItem("user", JSON.stringify(userData))
    }

    const logout = () => {
        setUser(null);
        sessionStorage.removeItem("user");
    };

    const getUserData = () =>{
        return user;
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, getUserData }}>
          {children}
        </AuthContext.Provider>
      );
}