import firebase from "firebase/app";

if (typeof window !== "undefined") {
  firebase.initializeApp({
    projectId: "blog-serverless-auth-example",
    apiKey: "AIzaSyABBzWuBByBzryZzv7RKPuqqFaz_ED_KjQ",
    authDomain: "blog-serverless-auth-example.firebaseapp.com",
  });
}

export default firebase;
