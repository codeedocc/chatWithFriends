import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_SECRET_KEY,
  authDomain: 'advanced-chat-app-4c67a.firebaseapp.com',
  projectId: 'advanced-chat-app-4c67a',
  storageBucket: 'advanced-chat-app-4c67a.appspot.com',
  messagingSenderId: '604278974782',
  appId: '1:604278974782:web:0eeca72c825271b394e46f',
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()
