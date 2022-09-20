import React from 'react';

function UserGreeting(props) {
  return <h1>Welcomeback! {props.name}</h1>;
}
function GuestGreeting(props) {
  return (
    <div>
      <h1>Please sign up {props.name}</h1>
      {props.children}
    </div>
  );
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting name={props.name} />;
  }
  return <GuestGreeting name={props.name} />;
}

export default Greeting;
