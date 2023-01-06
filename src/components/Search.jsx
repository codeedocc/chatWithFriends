import React, { useState } from 'react'
import Face from '../assets/img/1.jpg'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase'

const Search = () => {
  const [userName, setUserName] = useState('')
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)

  const handleSearch = async () => {
    const q = query(
      collection(db, 'users'),
      where('displayName', '==', userName)
    )

    try {
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      })
    } catch (e) {
      setErr(true)
    }
  }

  const handlePress = (e) => {
    e.code === 'Enter' && handleSearch()
  }

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Найти пользователя..."
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handlePress}
        />
      </div>
      {err && <span>Что-то пошло не так...</span>}
      {user && (
        <div className="userChat">
          <img src={user.photoURL} alt="user" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Search
