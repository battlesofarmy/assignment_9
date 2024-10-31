import { createContext, useState } from "react";
import PropTypes  from 'prop-types'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import auth from "./FireBase.Config";

export const AuthContext = createContext(null);


export default function AuthoProvider({children}) {
    const [user, setUser] = useState(null);
    

    const createUser=(email, password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const checkLogin =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    

    const authInfo = {user, createUser, checkLogin};
    
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}


AuthoProvider.propTypes = {
  children: PropTypes.node
}