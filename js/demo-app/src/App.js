import logo from './logo.svg';
import './App.css';
import ColorComp from './color';
import React, { useState, useTransition } from 'react';

function App() {
  const [show, setShow] = useState(false);

  const [count, setCount] = useState(0);
  // conditional styling
  const [like, setLike] = useState(false);
  const [color, setColor] = useState('orange');
  const stylingFunction = () => {
    incrementLike();
    setLike(!like);
    like === true ? setColor('teal') : setColor('crimson');
  };
  const incrementLike = () => {
    setCount(count + 1);
  };
  return (
    <div className='App'>
      <div className='card-component'>
        <img
          src='https://media.istockphoto.com/photos/beautiful-meadow-field-with-fresh-grass-and-yellow-dandelion-flowers-picture-id1301592082?b=1&k=20&m=1301592082&s=170667a&w=0&h=i3f9oPDdUoEQ9FE-vD2VQyQ9T-v2ODr-VIKrGDu3Tfw='
          alt='an image'
        />
        <p>Image of Nature</p>
        <button onClick={incrementLike}>Like {count}</button>
        <button onClick={stylingFunction} style={{ background: color }}>
          👍
        </button>
      </div>
      <button onClick={() => setShow(!show)}>
        {show !== true ? 'Show' : 'Hidden'}
      </button>
      {show === true ? <ColorComp name='Chandrakant' /> : ''}
    </div>
  );
}

export default App;

// create a card which will have an username, image
// dynamic values to a component
// react hooks