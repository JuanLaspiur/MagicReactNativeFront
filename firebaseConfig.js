// Imports de Firebase y configuración
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDDp-sqvMm0AnPTG9n5oeRlYjedd5A2sv8",
  authDomain: "magicnative.firebaseapp.com",
  projectId: "magicnative",
  storageBucket: "magicnative.appspot.com",
  messagingSenderId: "677838847471",
  appId: "1:677838847471:android:f536fbec77177f2a760a1a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);