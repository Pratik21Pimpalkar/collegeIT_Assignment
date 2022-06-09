import axios from "axios";
import { useState, createContext, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, setState] = useState([]);

  const getUserData = async () => {
    const users = await axios.get("https://randomuser.me/api/?results=10");
    const userData = users.data.results;
    setState(userData);
    console.log(userData);
  };
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <UserContext.Provider value={[state, setState]}>
      {children}
    </UserContext.Provider>
  );
};
