import React, { Component } from 'react';

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Welcome Visitor',
    };
  }
  changeMessage() {
    this.setState({
      message: 'Thank you for Subscribing!',
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Suscribe!</button>
      </div>
    );
  }
}

//props get passed to the component vs state is managed within the component
// function parameters vs vars declared in the function body
// props are immutable vs state can be changed
// props - functional components vs useState Hook - Functional comp
// this.props - class comp vs this.state - class comp

export default Message;
