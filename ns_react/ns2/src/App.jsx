import './styles.css';
import React, { useState } from 'react';

export default function App() {
  const [text, setText] = useState('');
  let todo = ['Meeting', 'Sunday game'];
  function updateTodo(event) {
    event.preventDefault();
    setText(event.target.value);
    todo.push(text);
  }
  return (
    <div className='App'>
      <h1>Todo List</h1>
      <input type='text' />
      <label>
        Click to add
        <input type='submit' onClick={() => updateTodo} />
      </label>
      {todo.map((todos, index) => (
        <p key={index}>{todos}</p>
      ))}
    </div>
  );
}
// import { useState } from 'react';
// import './App.css';
// import { useEffect } from 'react';
// import Play from './Play';

// function App() {

//   // const [count, setCount] = useState(0);
//   // const [noncount, setNonCount] = useState(0);
//   // useEffect(() => {
//   //   const mountingFunction = () => {
//   //     console.log('Mounting the component.');
//   //   };
//   //   mountingFunction();
//   //   return () => {
//   //     console.log('Unmounting the component.');
//   //   };
//   // }, [count]);
//   // const countFunction = () => {
//   //   setCount(count + 1);
//   // };
//   // const nonCountFunction = () => {
//   //   setNonCount(noncount + 1);
//   // };
//   // const mouseMove = () => {
//   //   console.log(`${event.clientX}, ${event.clientY}`);
//   // };
//   // return (
//   //   <div className='App'>
//   //     <div>
//   //       <p>Control Value: {count}</p>
//   //       <button onClick={countFunction}>Dependency Button</button>
//   //       <p onMouseMove={mouseMove}>Non Dpendent Counter: {noncount}</p>
//   //       <button onClick={nonCountFunction}>Non Dependency Button</button>
//   //     </div>
//   //     <Play />
//   //   </div>
//   // );
// }

// export default App;
