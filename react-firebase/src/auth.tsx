import { getAuth } from '@firebase/auth'
import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCF2rdRdpPBtYRZxIoFVSVttG_JxBPt7ck",
  authDomain: "reference-app-2820e.firebaseapp.com",
  projectId: "reference-app-2820e",
  storageBucket: "reference-app-2820e.appspot.com",
  messagingSenderId: "914112482301",
  appId: "1:914112482301:web:1fd8f75835c02d0e532794",
  measurementId: "G-3HN9WCPQM9"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
