import {initializeApp} from 'firebase/app';
import {getFirestore} from  "firebase/firestore";
import dotenv from 'dotenv';

dotenv.config();

const firebaseConfig = {
    apiKey: process.env.API_KEY ,
    authDomain: "nihome-ke.firebaseapp.com",
    projectId: "nihome-ke",
    storageBucket: "nihome-ke.appspot.com",
    messagingSenderId: "23961049044",
    appId: process.env.APP_ID ,
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);