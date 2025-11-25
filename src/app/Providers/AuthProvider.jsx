"use client";

import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth } from "../lib/fibase.init";
import Loading from "@/Components/Loading";

const googleProvider = new GoogleAuthProvider();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /* Google Login */
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  /* Register */
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  /* Login */
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  /* Update User Profile */
  const updateUserProfile = (name, photoURL) => {
    if (!auth.currentUser) return;

    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  /* Logout */
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    googleLogin,
    registerUser,
    loginUser,
    updateUserProfile,
    logOut,
  };

  /* Auth State */
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);

      if (currentUser) {
        const email = currentUser.email || currentUser.providerData[0]?.email;
        setUser({ ...currentUser, email });
      } else {
        setUser(null);
      }
    });

    return () => unSubscribe();
  }, []);

  if(loading){
    return <Loading/>
  }

  return <AuthContext value={authInfo}>{children}</AuthContext>;
}
