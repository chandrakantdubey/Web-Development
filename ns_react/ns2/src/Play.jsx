import React from 'react';

function Tick() {
  return (
    <div>
      <h1>Hello, Chandrakant!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

const Play = () => {
  return (
    <div>
      <Tick />
    </div>
  );
};
export default Play;
