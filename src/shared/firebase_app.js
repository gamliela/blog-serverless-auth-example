import firebase from "firebase/app";

if (typeof window !== "undefined") {
  firebase.initializeApp({
    projectId: "blog-serverless-auth-example",
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  });
}

export default firebase;
