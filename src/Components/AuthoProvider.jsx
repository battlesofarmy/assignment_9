import { createContext, useState } from "react";
import PropTypes  from 'prop-types'
import {createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import auth from "./FireBase.Config";


export const AuthContext = createContext(null);


export default function AuthoProvider({children}) {
    const [user, setUser] = useState(null);


    const googleProvidar = new GoogleAuthProvider();
    const githubProvidar = new GithubAuthProvider();

    const googleRegister = ()=>{
       return signInWithPopup(auth, googleProvidar)
    }
    const githubRegister =()=>{
        return signInWithPopup(auth, githubProvidar)
    }
  

    const createUser=(email, password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const checkLogin =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    

    const authInfo = {user, createUser, checkLogin, googleRegister, githubRegister};
    
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}


AuthoProvider.propTypes = {
  children: PropTypes.node
}