import { signOut } from 'firebase/auth'
import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { auth } from '../firebase'

const Navbar = () => {
  const { currentUser } = useContext(AuthContext)

  return (
    <div className="navbar">
      <span className="logo">TALK</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="user" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Выйти</button>
      </div>
    </div>
  )
}

export default Navbar
