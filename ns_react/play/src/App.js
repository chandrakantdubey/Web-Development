import Clock from './components/Clock';
import Form from './components/Form';
import Toggle from './components/Toggle';
import LoggingButton from './components/LoggingButton';
import Greeting from './components/Greeting';
import Message from './components/Message';
import Counter from './components/Counter';
import Destructuring from './components/Destructuring';
import FunctionCLick from './components/FunctionCLick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';

function App() {
  return (
    <div>
      <UserGreeting />
      <ParentComponent />
      <Clock />
      <Form />
      <Toggle />
      <LoggingButton />
      <Greeting isLoggedIn={true} name={'Chandrakant'} />
      <Message />
      <Counter />
      <Destructuring name='Chandrakant' heroname='blue_rabbit' />
      <FunctionCLick />
      <ClassClick />
      <EventBind />
    </div>
  );
}

export default App;
