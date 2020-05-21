import React from 'react';
import './mobile-menu.scss';

const MobileMenu: React.FC = props => {
  const { children } = props;
  return <section className="mobile-menu__container">{children}</section>;
};

export default MobileMenu;
