import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import Joke from './Joke';
import { jokes } from './jokes';

const App = () => {
  const [likes, setLikes] = useState(likes);
  const [dislikes, setDislikes] = useState(dislikes);

  const handleClickUp = () => {
    setLikes(joke.likes + 1);
  };
  const handleClickDown = () => {
    setDislikes(joke.dislikes + 1);
  };

  return (
    <>
      <div className="container">
        {jokes.map((joke) => (
          <Joke
            key={joke.id}
            userAvatar={joke.avatar}
            userName={joke.name}
            text={joke.text}
            likes={handleClickUp}
            dislikes={handleClickDown}
          />
        ))}
      </div>
    </>
  );
};

render(<App />, document.querySelector('#app'));
