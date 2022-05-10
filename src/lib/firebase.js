import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAOyPIVUt3Ua9KkL9TynXtHAAs568EDGoM',
  authDomain: 'cloudquiz-a6970.firebaseapp.com',
  projectId: 'cloudquiz-a6970',
  storageBucket: 'cloudquiz-a6970.appspot.com',
  messagingSenderId: '865732387605',
  appId: '1:865732387605:web:ad623576c85cfb8bf2ff1c',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
