import { createContext, useEffect, useReducer } from "react";
import {
    createUserDocumentFromAuth,
    onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    CurrentUser: null,
    setCurrentUser: () => null,
});

const userReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "SET_CURRENT_USER":
            return {
                ...state,
                CurrentUser: payload,
            };
        default:
            throw new Error("[UserReducer] Unhandled type: ", type);
    }
};
const INITIAL_STATE = {
    CurrentUser: null,
};
export const UserProvider = ({ children }) => {
    const [{ CurrentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

    const setCurrentUser = (user) => {
        dispatch({ type: "SET_CURRENT_USER", payload: user });
    };

    const value = { CurrentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            console.log(user);
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};
