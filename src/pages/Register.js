import React from 'react'

function Register() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">TALK Chat</span>
        <span className="title">Регистрация</span>
        <form>
          <input type="text" placeholder="Имя"></input>
          <input type="email" placeholder="Email"></input>
          <input type="password" placeholder="Пароль"></input>
          <input type="file"></input>
          <button>Зарегистрироваться</button>
          <p>Нет аккаунта? Авторизация</p>
        </form>
      </div>
    </div>
  )
}

export default Register
