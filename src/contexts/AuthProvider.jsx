




// import React from 'react';
// import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { auth } from '../firebase/firebase.init';
// import { AuthContext } from './AuthContext'; // ✅ Import the context

// const googleProvider = new GoogleAuthProvider();

// const createUser = (email, password) => {
//   return createUserWithEmailAndPassword(auth, email, password);
// };

// const googleLogin = () => {
//   return signInWithPopup(auth, googleProvider);
// };

// const userInfo = {
//   createUser,
//   googleLogin, 
// };

// const AuthProvider = ({ children }) => {
//   return (
//     <AuthContext.Provider value={userInfo}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;


import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword, // ✅ Add this
  onAuthStateChanged,
  signOut
} from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import { AuthContext } from './AuthContext';
import React, { useEffect, useState } from 'react';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    createUser,
    loginUser, // ✅ Expose login
    googleLogin,
    logOut
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
