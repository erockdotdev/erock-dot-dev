import React from 'react';
import './hamburger-icon.scss';

const HamburgerIcon: React.FC = ({ onClick }) => {
  return (
    <div onClick={onClick} tabIndex={0} className="hamburger-icon">
      <div />
    </div>
  );
};

export default HamburgerIcon;
