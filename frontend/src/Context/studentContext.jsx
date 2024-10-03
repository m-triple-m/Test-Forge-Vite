import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const ISSERVER = typeof window === "undefined";

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(!ISSERVER && localStorage.getItem('student'))
    );

    const [loggedIn, setLoggedIn] = useState(currentUser !== null);
    const navigate = useNavigate();

    const logout = () => {
        !ISSERVER && localStorage.removeItem('student');
        setLoggedIn(false);
        navigate('/login');
    }

    return (
        <StudentContext.Provider value={{ loggedIn, setLoggedIn, logout, currentUser, setCurrentUser }} >
            {children}
        </StudentContext.Provider>
    )
}

const useStudentContext = () => useContext(StudentContext);
export default useStudentContext;