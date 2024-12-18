// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // For Firestore database
import { getAuth } from "firebase/auth"; // For Firebase Authentication

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVoHSeYrkMgs11QEKTrkg0kpoIuxa-Ghc",
  authDomain: "medicare-inventory.firebaseapp.com",
  projectId: "medicare-inventory",
  storageBucket: "medicare-inventory.firebasestorage.app",
  messagingSenderId: "817103524699",
  appId: "1:817103524699:web:00845964524359732e807e",
  measurementId: "G-1S958DYPVV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const analytics = getAnalytics(app);
const db = getFirestore(app); // Firestore database
const auth = getAuth(app); // Firebase Authentication

// Export services for use in other files
export { db, auth, analytics };
