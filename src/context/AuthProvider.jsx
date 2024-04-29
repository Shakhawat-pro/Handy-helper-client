import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    // google sign in
    const signInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // github sign in
    const signInWithGithub = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password) 
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            unSubscribe()
        }
        
    }, [])

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const authInfo ={user, loading, createUser, signInUser, signInWithGoogle, signInWithGithub, logOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}