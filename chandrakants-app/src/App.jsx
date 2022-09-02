import { useState } from 'react';
import reactLogo from './assets/react.svg';
import logo from './assets/chandrakant.jpeg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <div>
        <a>
          <img src={logo} className='logo react chandrakant' alt='React logo' />
        </a>

        <a>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Chandrakant's App</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
