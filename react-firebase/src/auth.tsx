import { getAuth } from '@firebase/auth'
import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
