import React from 'react'

function Login() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">TALK Чат</span>
        <span className="title">Авторизация</span>
        <form>
          <input type="email" placeholder="Email"></input>
          <input type="password" placeholder="Пароль"></input>
          <button>Войти</button>
          <p>Нет аккаунта? Зарегистрироваться</p>
        </form>
      </div>
    </div>
  )
}

export default Login
