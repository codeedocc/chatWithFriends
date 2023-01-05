import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_SECRET_KEY,
  authDomain: 'advanced-chat-app-20c0f.firebaseapp.com',
  projectId: 'advanced-chat-app-20c0f',
  storageBucket: 'advanced-chat-app-20c0f.appspot.com',
  messagingSenderId: '923649806682',
  appId: '1:923649806682:web:d18127acdc7cf8ef676363',
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
