import React from 'react'
import Face from '../assets/img/1.jpg'

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={Face} alt="" />
        <span>Только что</span>
      </div>
      <div className="messageContent">
        <p>Привет</p>
        <img src={Face} alt="" />
      </div>
    </div>
  )
}

export default Message
