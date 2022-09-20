import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    // this.state.count = this.state.count + 1;
    // always make use of setState and never modify the state directly

    // for the code to be updated state update place it in callBack function
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log('Callback value', this.state.count);
    //   }
    // );

    // console.log(this.state.count);
    // calls to setState are asynchronous
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    // to update based on the prevState use function and not the object
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        Count - {this.state.count}
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
