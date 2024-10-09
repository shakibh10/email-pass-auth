import {createUserWithEmailAndPassword } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useState } from "react";
import auth from "../../init.config";



 // we have created and exported 
 export const AuthContext=createContext(null)



 const AuthProvider = ({children}) => {

    // declaring user state and value null
    const[user,setUser]=useState(null);


    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }


    // value to be set
    const authInfo={user,createUser}
   
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes={
    children:PropTypes.node
}