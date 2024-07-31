import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyClngzjgujIwQc5DtI2F3Ivn78GNa11ZTs',
    authDomain: 'student-management-system-427.firebaseapp.com',
    projectId: 'student-management-system-427',
    storageBucket: 'student-management-system-427.appspot.com',
    messagingSenderId: '280267142669',
    appId: '1:280267142669:web:18a4b8c397207b839a8744',
    measurementId: 'G-7FPYT80306',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
