import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyB9o_Tpzv2f4JWYsYUgbVKkn8Y5luyD3z8",
    authDomain: "pdf-chat-app-3a8f7.firebaseapp.com",
    projectId: "pdf-chat-app-3a8f7",
    storageBucket: "pdf-chat-app-3a8f7.appspot.com",
    messagingSenderId: "744272797523",
    appId: "1:744272797523:web:e047f979049c176e864ba6"
  };

  const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()

  const db = getFirestore(app);

  const storage = getStorage(app);

export {db, storage };