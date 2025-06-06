// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.apiKey,
  authDomain: "discord-embed-testing.firebaseapp.com",
  projectId: "discord-embed-testing",
  storageBucket: "discord-embed-testing.firebasestorage.app",
  messagingSenderId: "153034548666",
  appId: "1:153034548666:web:3b985f77553c51283ae983",
  measurementId: "G-HMS1M8NGEF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const storage = getStorage(app);

export { storage };