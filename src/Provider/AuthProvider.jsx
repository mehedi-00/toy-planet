import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";
const auth = getAuth(app);

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    const authInfo = {
        user,
        createUser,
        login,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;