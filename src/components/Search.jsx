import React from 'react'
import Face from '../assets/img/1.jpg'

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Найти пользователя..." />
      </div>
      <div className="userChat">
        <img src={Face} alt="user photo" />
        <div className="userChatInfo">
          <span>Ruslan</span>
        </div>
      </div>
    </div>
  )
}

export default Search
