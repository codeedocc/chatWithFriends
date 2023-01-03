import React from 'react'
import Face from '../assets/img/1.jpg'

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">TALK Чат</span>
      <div className="user">
        <img src={Face} />
        <span>Руслан</span>
        <button>Выйти</button>
      </div>
    </div>
  )
}

export default Navbar
