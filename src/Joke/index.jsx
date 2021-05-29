import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import { jokes } from '../jokes';

const Joke = (props) => {
  const handleClickLikes = () => {
    props.setLikes(likes + 1);
  };

  const handleClickDislikes = () => {
    props.setDislikes(dislikes + 1);
  };

  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={props.userAvatar} />
          <p className="user-name">{props.userName}</p>
        </div>

        <p className="joke__text">{props.text}</p>
      </div>
      <div className="joke__likes">
        <button
          onClick={handleClickLikes}
          id="btn-up"
          className="btn-like btn-like--up"
        ></button>
        <span id="likes-up" className="likes-count likes-count--up">
          {props.likes}
        </span>
        <button
          onClick={handleClickDislikes}
          id="btn-down"
          className="btn-like btn-like--down"
        ></button>
        <span id="likes-down" className="likes-count likes-count--down">
          {props.dislikes}
        </span>
      </div>
    </div>
  );
};

export default Joke;
