import React, { Component } from 'react';

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return this.state.isLoggedIn && <div>Welcome Chandrakant!</div>;

    // return this.state.isLoggedIn ? (
    //   <div>Welcome Chandrakant!</div>
    // ) : (
    //   <div>Welcome Guest!</div>
    // );

    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Chandrakant!</div>;
    // } else {
    //   message = <div>Welcome Guest!</div>;
    // }
    // return message;

    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Chandrakant!</div>;
    // } else {
    //   return <div>Welcome Guest!</div>;
    // }

    // return (
    //   <div>
    //     <div>Welcome Chandrakant!</div>
    //     <div>Welcome Guest!</div>
    //   </div>
    // )
  }
}

export default UserGreeting;
