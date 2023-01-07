import React, { useContext } from 'react'
import Face from '../assets/img/1.jpg'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext)
  const { data } = useContext(ChatContext)

  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={Face} alt="user" />
        <span>Только что</span>
      </div>
      <div className="messageContent">
        <p>Привет</p>
        <img src={Face} alt="user" />
      </div>
    </div>
  )
}

export default Message
