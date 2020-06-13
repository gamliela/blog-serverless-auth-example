import firebase from "firebase/app";

if (typeof window !== "undefined") {
  firebase.initializeApp({
    projectId: "blog-serverless-auth-example",
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "blog-serverless-auth-example.firebaseapp.com",
  });
}

export default firebase;
