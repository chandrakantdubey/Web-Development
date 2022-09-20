import React from 'react';

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    document.getElementById('try-me').style.background = 'red';
    console.log('You clicked submit');
  }
  return (
    <form onSubmit={handleSubmit}>
      <button type='submit' id='try-me'>
        Try Me!
      </button>
    </form>
  );
}

export default Form;
