import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '@modules/Modal';
import './header.scss';

const Header = () => {
  return (
    <nav>
      <div className="nav__container">
        <Link className="nav__brand-logo" to="/">
          erock.dev
        </Link>
        <div className="nav__right">
          <Link className="nav__nav-link" to="/">
            Home
          </Link>
          <Link className="nav__nav-link" to="/about">
            About
          </Link>
          <Modal />
        </div>
      </div>
    </nav>
  );
};

export default Header;
