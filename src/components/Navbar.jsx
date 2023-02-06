import { signOut } from 'firebase/auth'
import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { auth } from '../firebase'
import Logout from '../assets/img/logout.png'

const Navbar = () => {
  const { currentUser } = useContext(AuthContext)

  return (
    <div className="navbar">
      <span className="logo">TALK</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="user" />
        <span>{currentUser.displayName}</span>
        <button id="logout" style={{ display: 'none' }} />
        <label htmlFor="logout">
          <img src={Logout} onClick={() => signOut(auth)} className="exit" />
        </label>
      </div>
    </div>
  )
}

export default Navbar
