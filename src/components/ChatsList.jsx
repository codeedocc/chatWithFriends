import React from 'react'
import Face from '../assets/img/1.jpg'

const ChatsList = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img src={Face} alt="user" />
        <div className="userChatInfo">
          <span>Ruslan</span>
          <p>Hello </p>
        </div>
      </div>
      <div className="userChat">
        <img src={Face} alt="user" />
        <div className="userChatInfo">
          <span>Ruslan</span>
          <p>Hello </p>
        </div>
      </div>
      <div className="userChat">
        <img src={Face} alt="user" />
        <div className="userChatInfo">
          <span>Ruslan</span>
          <p>Hello </p>
        </div>
      </div>
    </div>
  )
}

export default ChatsList
