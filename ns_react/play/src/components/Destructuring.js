import React from 'react';

const Destructuring = ({ name, heroname }) => {
  // const {name, heroname} = props
  // second way of destucturing in body
  // const {name,heroname} = this.props
  // for class component
  // const {state1, state2} = this.state
  // for states
  return (
    <div>
      <h1>
        We have {name} a.k.a {heroname}
      </h1>
    </div>
  );
};

export default Destructuring;
