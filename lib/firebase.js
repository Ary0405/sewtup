// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// export const firebaseConfig = {
//   apiKey: "AIzaSyAahi0rsfdtb2iCnVujC0i5nsXSvswuLMQ",
//   authDomain: "sewtup-918bb.firebaseapp.com",
//   projectId: "sewtup-918bb",
//   storageBucket: "sewtup-918bb.appspot.com",
//   messagingSenderId: "244445187429",
//   appId: "1:244445187429:web:1477c7b5d78719a106258c",
//   measurementId: "G-JV97YTZ2LD"
// };

export const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID
};


const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { app, storage };
