import React, { useState } from 'react'
import AddAvatar from '../assets/img/addAvatar.png'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, db, storage } from '../firebase'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { doc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

function Register() {
  const [err, setErr] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password)

      //Create a unique image name
      const storageRef = ref(storage, displayName)

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            })
            //create user on firestore
            await setDoc(doc(db, 'users', res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            })
            //create empty user chats on firestore
            await setDoc(doc(db, 'userChats', res.user.uid), {})
            navigate('/')
          } catch (err) {
            console.log(err)
            setErr(true)
          }
        })
      })
    } catch (err) {
      setErr(true)
    }
  }

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">TALK Чат</span>
        <span className="title">Регистрация</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Имя"></input>
          <input type="email" placeholder="Email"></input>
          <input type="password" placeholder="Пароль"></input>
          <input style={{ display: 'none' }} type="file" id="file"></input>
          <label htmlFor="file">
            <img src={AddAvatar} alt="img for register"></img>
            <span>Выбрать аватарку</span>
          </label>
          <button>Зарегистрироваться</button>
          {err && <span>Что-то пошло не так...</span>}
          <p>Уже есть аккаунт? Войти</p>
        </form>
      </div>
    </div>
  )
}

export default Register
