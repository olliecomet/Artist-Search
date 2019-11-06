import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Music Finder</h1>
      <nav>
        <Link to="/">Artist Search</Link>
      </nav>
    </header>
  );
};

export default Header;
