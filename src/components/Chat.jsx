import React from 'react'
import Cam from '../assets/img/cam.png'
import Add from '../assets/img/add.png'
import More from '../assets/img/more.png'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Ruslan</span>
        <div className="chatIcons">
          <img src={Cam} alt="cam" />
          <img src={Add} alt="add" />
          <img src={More} alt="more" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat
