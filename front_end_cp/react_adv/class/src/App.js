import { Component } from 'react';
import './App.css';

export default class App extends Component {
  state = {
    character: {},
  };
  componentDidMount() {
    fetch('https://swapi.dev/api/people/1')
      .then((res) => res.json())
      .then((data) => {});
    // runs for the first time only
    console.log('Component Did Mount');
  }
  render() {
    return (
      <>
        <h1>Chandrakant's first class component.</h1>
        <p>Recieving the {this.props.prop}</p>
      </>
    );
  }
}
