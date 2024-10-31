import { createContext, useEffect, useState } from "react";
import PropTypes  from 'prop-types'
import {createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
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
  

    // const createUser=(email, password)=>{
    //    return createUserWithEmailAndPassword(auth, email, password)
    // }


    const createUser = (email, password, name, imgURL) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // Update the user's profile with the display name
                return updateProfile(user, {
                    displayName: name,
                    photoURL: imgURL
                });
            });
    };

    


    const checkLogin =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const logOut = ()=>{
        // setLoading(true);
        return signOut(auth);
    }
    const updateUserProfile =(name)=>{
        updateProfile(auth.currentUser,{
            displayName: name
        } )
    }
    


      // Check user Current State (log or out)
        useEffect(()=>{
            const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            // setLoading(false);
            console.log("obsurb: ", currentUser);
            });

            return ()=>{
            unSubscribe();
            }

        },[])


    const authInfo = {user, createUser, checkLogin, googleRegister, githubRegister, logOut, updateUserProfile};
    
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}


AuthoProvider.propTypes = {
  children: PropTypes.node
}