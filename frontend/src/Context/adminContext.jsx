import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ISSERVER = typeof window === "undefined";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
    const [currentAdmin, setCurrentAdmin] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();
  
    useEffect(() => {
      const token = !ISSERVER && localStorage.getItem('adminToken');
      if (token) {
        setCurrentAdmin(JSON.parse( !ISSERVER && localStorage.getItem('admin')));
        setLoggedIn(true);
      }
    }, []);
  
    const logout = () => {
      !ISSERVER && localStorage.removeItem('adminToken');
      !ISSERVER && localStorage.removeItem('admin');
      setLoggedIn(false);
      setCurrentAdmin(null);
      navigate('/');
    }
  
    return (
      <AdminContext.Provider value={{ loggedIn, setLoggedIn, logout, currentAdmin, setCurrentAdmin }}>
        {children}
      </AdminContext.Provider>
    );
  }
const useAdminContext = () => useContext(AdminContext);
export default useAdminContext;