// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD92UztenLlEHVC3eQr5pQExXdcNCaywEw',
  authDomain: 'boboloc-testing.firebaseapp.com',
  projectId: 'boboloc-testing',
  storageBucket: 'boboloc-testing.appspot.com',
  messagingSenderId: '522989710424',
  appId: '1:522989710424:web:60d3594613729252d1ee2d',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app)

export { app, db }
