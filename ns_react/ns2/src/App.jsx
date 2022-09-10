import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [noncount, setNonCount] = useState(0);

  useEffect(() => {
    const mountingFunction = () => {
      console.log('Mounting the component.');
    };
    mountingFunction();
    return () => {
      console.log('Unmounting the component.');
    };
  }, [count]);

  const countFunction = () => {
    setCount(count + 1);
  };
  const nonCountFunction = () => {
    setNonCount(noncount + 1);
  };

  const mouseMove = () => {
    console.log(`${event.clientX}, ${event.clientY}`);
  };

  return (
    <div className='App'>
      <div>
        <p>Control Value: {count}</p>
        <button onClick={countFunction}>Dependency Button</button>
        <p onMouseMove={mouseMove}>Non Dpendent Counter: {noncount}</p>
        <button onClick={nonCountFunction}>Non Dependency Button</button>
      </div>
    </div>
  );
}

export default App;
