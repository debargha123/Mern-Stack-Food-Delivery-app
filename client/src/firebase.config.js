import { initializeApp, getApp, getApps, } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "food-delivery-app-61cc9.firebaseapp.com",
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: "food-delivery-app-61cc9",
    storageBucket: "food-delivery-app-61cc9.appspot.com",
    messagingSenderId: "348954940204",
    appId: "348954940204",
};

const app = getApps.length > 0 ? getApp() :  initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export {app,firestore,storage}