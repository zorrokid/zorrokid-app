import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <div>
        <Link to="/">Home </Link>
        <Link to="/movies">Movies </Link>
        <Link to="/photos">Photos </Link>
    </div>
  )
}

export default Navigation;