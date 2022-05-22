// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAdMuf7HRr1KeFPnUy5p0IE2Q9cn3NYhII',
  authDomain: 'lamps-manufacturer.firebaseapp.com',
  projectId: 'lamps-manufacturer',
  storageBucket: 'lamps-manufacturer.appspot.com',
  messagingSenderId: '144082124053',
  appId: '1:144082124053:web:aa21da794bb1d1860dfd1c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
