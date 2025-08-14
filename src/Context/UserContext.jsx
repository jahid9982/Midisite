import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase';
export const AuthContext = createContext()
const auth = getAuth(app);
const UserContext = ({ children }) => {
    const [user, setUser] = useState({})


    const createuserByEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sing in user 
    const singInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // update user 
    const updateUser = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name,
        }).then(() => {

        }).catch((error) => {

        });
    }
    // tacking user 
    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
        return () => unSubscribed()
    }, [])
    // sing Out user 
    const logOut = () => {
        return signOut(auth)
    }

    const authInfo = {
        createuserByEmail,
        singInUser,
        updateUser,
        logOut,
        user

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;