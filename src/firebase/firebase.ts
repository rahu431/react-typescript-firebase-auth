// import "firebase/auth";
// import "firebase/database";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const config = {
  apiKey: "AIzaSyAdtPNdLLHl66jLPs_Nppce3u4nObi3MFM",
  appId: "1:86065592930:web:53a33009bd4c0f667cef3b",
  authDomain: "db-migration-42a2b.firebaseapp.com",
  databaseURL:
    "https://db-migration-42a2b-default-rtdb.asia-southeast1.firebasedatabase.app",
  messagingSenderId: "86065592930",
  projectId: "db-migration-42a2b",
  storageBucket: "db-migration-42a2b.appspot.com",
};

// Check if Firebase app is not already initialized, then initialize it
const app = initializeApp(config);
const db = getFirestore(app);
export const auth = getAuth(app);
export { db }; // Export the Firestore instance for use in other files, if needed
