import { createContext, useState, useEffect } from "react";
import {
  onAuthChangedListener,
  signOutUser,
  createUserDocumentFromAuth
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };


  //centralize authchange handling
  useEffect(() => {
    const unsubscribe = onAuthChangedListener((user) => {
        if (user) {
            createUserDocumentFromAuth(user.user);
        }
        setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={value}> {children} </UserContext.Provider>
  );
};
