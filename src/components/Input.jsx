import React from 'react'
import Img from '../assets/img/img.png'
import Attach from '../assets/img/attach.png'

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Написать сообщение..." />
      <div className="send">
        <img src={Attach} alt="add attach png" />
        <input type="file" style={{ display: 'none' }} id="file" />
        <label htmlFor="file">
          <img src={Img} alt="add pic png" />
        </label>
        <button>Отправить</button>
      </div>
    </div>
  )
}

export default Input
