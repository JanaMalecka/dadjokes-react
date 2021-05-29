import React, { useState } from 'react';

import './style.css';
import { jokes } from '../jokes';

const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const handleClickLikes = () => {
    setLikes(likes + 1);
  };
  const handleClickDislikes = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={userAvatar} />
          <p className="user-name">{userName}</p>
        </div>

        <p className="joke__text">{text}</p>
      </div>
      <div className="joke__likes">
        <button
          onClick={handleClickLikes}
          id="btn-up"
          className="btn-like btn-like--up"
        ></button>
        <span id="likes-up" className="likes-count likes-count--up">
          {likes}
        </span>
        <button
          onClick={handleClickDislikes}
          id="btn-down"
          className="btn-like btn-like--down"
        ></button>
        <span id="likes-down" className="likes-count likes-count--down">
          {dislikes}
        </span>
      </div>
    </div>
  );
};

export default Joke;
