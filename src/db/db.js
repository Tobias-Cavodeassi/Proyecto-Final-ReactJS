import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCKhf9lbyKgUAoUv3z2MAM5nj8cV16xai8",
    authDomain: "ecommerce-coder-6d1d9.firebaseapp.com",
    projectId: "ecommerce-coder-6d1d9",
    storageBucket: "ecommerce-coder-6d1d9.firebasestorage.app",
    messagingSenderId: "206458299263",
    appId: "1:206458299263:web:7e5654edf8c9804e05704a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db