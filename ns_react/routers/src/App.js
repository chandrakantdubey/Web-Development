import './App.css';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { Route, Switch, useHistory } from 'react-router-dom';

function App() {
  const history = useHistory();
  return (
    <div className='App'>
      <div>
        <button onClick={() => history.goBack()}>&lt; goBack</button>
        <button onClick={() => history.goForward()}>goForward &gt;</button>
      </div>
      <div className='nav-btn'>
        <button onClick={() => history.push('/')}>Home</button>
        <button onClick={() => history.push('/skills')}>Skills</button>
        <button onClick={() => history.push('/about')}>About</button>
        <button onClick={() => history.push('/contact/102/ghj')}>
          Contact
        </button>
      </div>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/skills'>
          <Skills />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact/:id/:token'>
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
