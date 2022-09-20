import React from 'react';

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}</h2>;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.chandrakant = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.chandrakant);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hey!</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

export default Clock;
