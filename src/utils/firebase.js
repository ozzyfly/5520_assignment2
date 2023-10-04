import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Use your firebase configuration here
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
