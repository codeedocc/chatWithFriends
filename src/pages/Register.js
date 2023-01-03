import React from 'react'
import AddAvatar from '../assets/img/addAvatar.png'

function Register() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">TALK Чат</span>
        <span className="title">Регистрация</span>
        <form>
          <input type="text" placeholder="Имя"></input>
          <input type="email" placeholder="Email"></input>
          <input type="password" placeholder="Пароль"></input>
          <input style={{ display: 'none' }} type="file" id="file"></input>
          <label htmlFor="file">
            <img src={AddAvatar} alt="img for register"></img>
            <span>Выбрать аватарку</span>
          </label>
          <button>Зарегистрироваться</button>
          <p>Уже есть аккаунт? Войти</p>
        </form>
      </div>
    </div>
  )
}

export default Register
