import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav--left'>
        <img src='./logo192.png' alt='logo' className='nav--logo' />
        <h2 className='nav--title'>ReactFacts</h2>
      </div>

      <p className='nav--right'>React Project - 1</p>
    </nav>
  );
};

export default Navbar;
