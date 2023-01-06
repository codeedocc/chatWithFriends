import { signOut } from 'firebase/auth'
import React from 'react'
import { useContext } from 'react'
import Face from '../assets/img/1.jpg'
import { AuthContext } from '../context/AuthContext'
import { auth } from '../firebase'

const Navbar = () => {
  const { currentUser } = useContext(AuthContext)

  return (
    <div className="navbar">
      <span className="logo">TALK Чат</span>
      <div className="user">
        <img src={currentUser.photoURL} />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Выйти</button>
      </div>
    </div>
  )
}

export default Navbar
