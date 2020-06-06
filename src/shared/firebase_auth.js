import firebase from "./firebase_app";
import "firebase/auth";
import { useEffect, useState } from "react";

function useAuth() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setIsLoading(false);
      setUser(user);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return { isLoading, user };
}

async function signIn() {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithRedirect(provider);
}

async function signOut() {
  return firebase.auth().signOut();
}

export { useAuth, signIn, signOut };
