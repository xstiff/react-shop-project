import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  CurrentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [CurrentUser, setCurrentUser] = useState(null);
  const value = { CurrentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
