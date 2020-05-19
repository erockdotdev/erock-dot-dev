import React from 'react';
import { NavLink } from 'react-router-dom';
import Modal from '@modules/Modal/index';
import ContactForm from '@modules/ContactForm';
import HamburgerIcon from '@components/HamburgerIcon';
import BrandIcon from '@components/BrandIcon';
import './header.scss';
import classNames from 'classnames';

type State = {
  lastScrollY: number;
};
class Header extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      lastScrollY: 0
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, true);
  }

  handleScroll() {
    this.setState({
      lastScrollY: window.scrollY
    });
  }

  render() {
    const { lastScrollY } = this.state;
    const isScrolling = lastScrollY > 5;

    const navClass = classNames('nav__container', 'nav__container__top', {
      nav__container__top__scroll: isScrolling
    });
    return (
      <nav>
        <div className={navClass}>
          <NavLink className="nav__container__brand-icon" to="/">
            <BrandIcon />
          </NavLink>
          <div className="nav__right">
            <NavLink
              className="nav__nav-link"
              activeClassName="nav__nav-link nav__nav-link--active"
              exact
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="nav__nav-link"
              activeClassName="nav__nav-link nav__nav-link--active"
              to="/about"
            >
              About
            </NavLink>
            <div className="nav__nav-link">
              <Modal buttonLabel="Contact">
                <ContactForm />
              </Modal>
            </div>
          </div>
          <HamburgerIcon />
        </div>
      </nav>
    );
  }
}

export default Header;
