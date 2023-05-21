import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
const auth = getAuth(app);

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [loading,setLoading] = useState(true)
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const loginWithEmailAndPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };
    const loginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    };
    const logout = () => {
        return signOut(auth);
    };
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            return unSubscribe();
        };
    }, []);

    const authInfo = {
        user,
        createUser,
        loginWithEmailAndPassword,
        logout,
        loading,
        setLoading,
        loginWithGoogle
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;