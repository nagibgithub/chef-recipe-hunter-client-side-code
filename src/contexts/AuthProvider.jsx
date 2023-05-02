import React, {createContext, useEffect, useState} from 'react';
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
            setUser(loggedInUser);
        });
        return () => {
            unSubscribe();
        };
    }, []);

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const authInfo = {
        auth,
        setUser,
        user,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;