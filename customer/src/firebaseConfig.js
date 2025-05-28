import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIjS7cP7xH1wsh2e8L8L6kFeNjoETVBD0",
  authDomain: "zuvees-afb81.firebaseapp.com",
  projectId: "zuvees-afb81",
  storageBucket: "zuvees-afb81.firebasestorage.app",
  messagingSenderId: "1022748251509",
  appId: "1:1022748251509:web:2b7e3ba54d1a358e2e2f3c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };