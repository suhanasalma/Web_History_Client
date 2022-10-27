
import React , { createContext } from 'react';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  GithubAuthProvider,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateEmail,
} from "firebase/auth";
import app from '../Firebase/Firebase.init';
import { useState } from 'react';
import { useEffect } from 'react';



export const ContextDetails = createContext();
const auth = getAuth(app)


const ContextProvide = ({ children }) => {

   const [user,setUser] = useState('salma')
      const [loading, setLoading] = useState(true);


   useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
        if (currentUser === null || currentUser.emailVerified) {
          setUser(currentUser);
        }
        setLoading(false);
        // console.log(user);
      });

      return () => {
        unsubscribe();
      };
   })


   const googleProvider = new GoogleAuthProvider();
   const gitProvider = new GithubAuthProvider();

   const googleSignIn = ()=>{
    setLoading(true);

      return signInWithPopup(auth, googleProvider)

   }

   const gitLogIn = () => {
    setLoading(true);
     return signInWithPopup(auth, gitProvider);
   };



   const signInEmailPass = (email, password) => {
    setLoading(true);
     return signInWithEmailAndPassword(auth, email, password);
   };

   const logOut = ()=>{
    setLoading(true);
      return signOut(auth)
        
   }

   const createUser = (email, password) => {
    setLoading(true);
     return createUserWithEmailAndPassword(auth, email, password);
   };

   const updateInfo = (profile) =>{
    return updateProfile(auth.currentUser,profile)
   }

   const verifyEmail = () =>{
    return sendEmailVerification(auth.currentUser)

   }

   const passwordReset = (email) =>{
    return sendPasswordResetEmail(auth, email);
   }

 
   const allInfo = {
     user,
     googleSignIn,
     logOut,
     createUser,
     signInEmailPass,
     gitLogIn,
     updateInfo,
     verifyEmail,
     passwordReset,
     loading,
   
   };

  return <div>
      <ContextDetails.Provider value={allInfo}>
         {children}
      </ContextDetails.Provider>
  </div>;
};

export default ContextProvide;