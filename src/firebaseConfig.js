import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKM4y52rdSMFRdFQhhj6ysBWF3DqLd9RY",
  authDomain: "relu-cc92d.firebaseapp.com",
  projectId: "relu-cc92d",
  storageBucket: "relu-cc92d.firebasestorage.app",
  messagingSenderId: "933808196399",
  appId: "1:933808196399:web:126497d0ed23d400d4efda",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
