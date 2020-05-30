import React from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import './mobile-menu.scss';

const MobileMenu: React.FC = props => {
  const { children } = props;
  return (
    <section className="mobile-menu__container">
      <RemoveScroll className="mobile-menu__container__inner">
        {children}
      </RemoveScroll>
    </section>
  );
};

export default MobileMenu;
