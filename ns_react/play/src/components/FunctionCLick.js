import React from 'react';

const FunctionCLick = () => {
  function clickHandler() {
    console.log('Clicked');
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
};

export default FunctionCLick;
