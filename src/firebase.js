import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_SECRET_KEY,
  authDomain: 'evolved-chat-3eca0.firebaseapp.com',
  projectId: 'evolved-chat-3eca0',
  storageBucket: 'evolved-chat-3eca0.appspot.com',
  messagingSenderId: '594413652034',
  appId: '1:594413652034:web:6480fda8e5f32b2fbcc5db',
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()
