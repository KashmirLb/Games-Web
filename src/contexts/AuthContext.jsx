import React, { useContext, useEffect, useState } from 'react'
import { auth, authId } from '../firebase'

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export default function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true)

    function login (email, password){
        return auth.signInWithEmailAndPassword(authId, email, password)
    }

    function register (email, password){
        return auth.createUserWithEmailAndPassword(authId, email, password)
    }

    function registerName(user, name){
        return auth.updateProfile(user, {
            displayName: name
        })
    }

    function logout(){
        return authId.signOut();
    }

    function updateEmail(email){
        return auth.updateEmail(currentUser, email)
    }

    function updatePassword(password){
        return auth.updatePassword(currentUser, password)
    }

    function updateName(name){
        return auth.updateProfile(currentUser, {
            displayName: name
        })
    }
    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(authId, (user) =>{
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    },[])

    const value={
        currentUser,
        login,        
        register,
        registerName,
        logout,
        updateEmail,
        updatePassword,
        updateName
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
