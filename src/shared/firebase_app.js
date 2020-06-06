import firebase from "firebase/app";

if (typeof window !== "undefined") {
  firebase.initializeApp({
    projectId: "blog-serverless-auth-example",
  });
}

export default firebase;
