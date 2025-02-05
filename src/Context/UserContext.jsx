import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registerUser, setRegisterUser] = useState(null)

  const sharedData = {user, setUser, registerUser, setRegisterUser}

  return (
    <UserContext.Provider value={sharedData}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
