import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '@modules/Modal';
import ContactForm from '@modules/ContactForm';
import BrandIcon from '@components/BrandIcon';
import './header.scss';

const Header = () => {
  return (
    <nav>
      <div className="nav__container">
        <Link className="nav__container__brand-icon" to="/">
          <BrandIcon />
        </Link>
        <div className="nav__right">
          <Link className="nav__nav-link" to="/">
            Home
          </Link>
          <Link className="nav__nav-link" to="/about">
            About
          </Link>
          <div className="nav__nav-link">
            <Modal buttonLabel="Contact">
              <ContactForm />
            </Modal>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
