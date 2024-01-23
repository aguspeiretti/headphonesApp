// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi_Vv-ovHhjaDwuxKofaPdmaRaQp60IJM",
  authDomain: "headphones-8e977.firebaseapp.com",
  databaseURL: "https://headphones-8e977-default-rtdb.firebaseio.com",
  projectId: "headphones-8e977",
  storageBucket: "headphones-8e977.appspot.com",
  messagingSenderId: "737736963653",
  appId: "1:737736963653:web:c761300ca43cb580ad952c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { app, auth };
