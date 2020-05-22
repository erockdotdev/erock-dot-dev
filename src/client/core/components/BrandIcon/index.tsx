import React from 'react';
import './brand-icon.scss';
import logo from '@assets/icons/brand-logo.svg';

const BrandIcon = () => {
  return (
    <section className="brand-icon__container">
      <img src={logo} alt="erock dot dev" />
    </section>
  );
};

export default BrandIcon;
