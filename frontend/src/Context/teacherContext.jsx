import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const ISSERVER = typeof window === "undefined";


const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [currentTeacher, setcurrentTeacher] = useState(
        (!ISSERVER && localStorage.getItem('teacherId'))
    );

    const [loggedIn, setLoggedIn] = useState(currentTeacher !== null);
    const navigate = useNavigate();

    const logout = () => {
        !ISSERVER && localStorage.removeItem('teacherId');
        setLoggedIn(false);
        navigate('/Teacher-login');
    }

    return (
        <AppContext.Provider value={{ loggedIn, setLoggedIn, logout, currentTeacher, setcurrentTeacher }} >
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => useContext(AppContext);
export default useAppContext;