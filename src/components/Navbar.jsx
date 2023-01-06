import { signOut } from 'firebase/auth'
import React from 'react'
import Face from '../assets/img/1.jpg'
import { auth } from '../firebase'

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">TALK Чат</span>
      <div className="user">
        <img src={Face} />
        <span>Руслан</span>
        <button onClick={() => signOut(auth)}>Выйти</button>
      </div>
    </div>
  )
}

export default Navbar
