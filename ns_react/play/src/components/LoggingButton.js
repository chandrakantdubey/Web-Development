import React from 'react';

class LoggingButton extends React.Component {
  handleClick = () => {
    document.getElementById('lick-me').style.background = 'red';
  };
  render() {
    return (
      <button onClick={this.handleClick} id='lick-me'>
        Click lick me!
      </button>
    );
  }
}
export default LoggingButton;
