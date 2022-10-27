
import React , { createContext } from 'react';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  GithubAuthProvider,
} from "firebase/auth";
import app from '../Firebase/Firebase.init';
import { useState } from 'react';
import { useEffect } from 'react';



export const ContextDetails = createContext();
const auth = getAuth(app)


const ContextProvide = ({ children }) => {

   const [user,setUser] = useState('salma')

   useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        console.log(user);
      });

      return () => {
        unsubscribe();
      };
   })


   const googleProvider = new GoogleAuthProvider();
   const facebookProvider = new FacebookAuthProvider();
   const gitProvider = new GithubAuthProvider();

   const googleSignIn = ()=>{

      return signInWithPopup(auth, googleProvider)

   }

   const faceBookSignIn = ()=>{
      return signInWithPopup(auth, facebookProvider)
   }

   const signInEmailPass = (email, password) => {
     return signInWithEmailAndPassword(auth, email, password);
   };

   const logOut = ()=>{
      return signOut(auth)
        
   }

   const createUser = (email, password) => {
     return createUserWithEmailAndPassword(auth, email, password);
   };

   const gitLogIn =()=>{
      return signInWithPopup(auth, gitProvider);
   }

 
   const allInfo = {
     user,
     googleSignIn,
     faceBookSignIn,
     logOut,
     createUser,
     signInEmailPass,
     gitLogIn,
   };

  return <div>
      <ContextDetails.Provider value={allInfo}>
         {children}
      </ContextDetails.Provider>
  </div>;
};

export default ContextProvide;