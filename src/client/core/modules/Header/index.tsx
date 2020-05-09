import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '@modules/Modal/index';
import ContactForm from '@modules/ContactForm';
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
  }
}

export default Header;
