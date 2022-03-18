import { initializeApp } from "firebase/app";
import { addDoc, getFirestore, Timestamp, collection } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAEFnezkSfy2Kjh7oudf0FMwBKOfvaZz3o",
    authDomain: "tiendaecommerce-fd53f.firebaseapp.com",
    projectId: "tiendaecommerce-fd53f",
    storageBucket: "tiendaecommerce-fd53f.appspot.com",
    messagingSenderId: "931967212950",
    appId: "1:931967212950:web:a4a1923777960cc1dc51b7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


// Generacion de orden

export const generateOrder = async (order) => {
    const newOrder = addDoc(collection(db, "orders"), {
        ...order,
        date: Timestamp.fromDate(new Date())
    })
    return newOrder
}