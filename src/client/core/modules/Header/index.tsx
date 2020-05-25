import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import Modal from '@modules/Modal';
import ContactForm from '@modules/ContactForm';
import HamburgerIcon from '@components/HamburgerIcon';
import BrandIcon from '@components/BrandIcon';
import MobileMenu from '@components/MobileMenu';
import withScreenDimensions from '@components/hocs/screen_dimensions.jsx';

import { screenDimensions } from '@custom-types/index';
import { toggleMobileMenu } from '@redux/actions';
import { toggleMobileMenuSelector } from '@redux/selectors';
import './header.scss';

type State = {
  lastScrollY: number;
};
type Props = {
  menuOpen: boolean;
  handleToggleMenu: () => void;
} & screenDimensions;

class Header extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      lastScrollY: 0
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.handleHamburgerIconClick = this.handleHamburgerIconClick.bind(this);
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

  handleHamburgerIconClick() {
    const { handleToggleMenu } = this.props;
    handleToggleMenu();
  }

  handleNavLinkClick(): { (): void } | null {
    const { isResponsive, handleToggleMenu } = this.props;
    if (!isResponsive) return () => {};
    handleToggleMenu();
    return null;
  }

  handleLogoClick(): { (): void } | null {
    const { menuOpen } = this.props;
    if (!menuOpen) return () => {};
    this.handleNavLinkClick();
    return null;
  }

  renderNavLinks() {
    return (
      <React.Fragment>
        <NavLink
          onClick={() => {
            this.handleNavLinkClick();
          }}
          className="nav__nav-link"
          activeClassName="nav__nav-link nav__nav-link--active"
          exact
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => {
            this.handleNavLinkClick();
          }}
          className="nav__nav-link"
          activeClassName="nav__nav-link nav__nav-link--active"
          to="/about"
        >
          About
        </NavLink>
        <div>
          <Modal
            onClick={() => {
              this.handleNavLinkClick();
            }}
            className="nav__nav-link"
            buttonLabel="Contact"
          >
            <ContactForm />
          </Modal>
        </div>
      </React.Fragment>
    );
  }

  render() {
    const { lastScrollY } = this.state;
    const isScrolling = lastScrollY > 5;
    const { isResponsive, menuOpen } = this.props;

    const navClass = classNames('nav__container', 'nav__container__top', {
      nav__container__top__scroll: isScrolling
    });
    return (
      <nav>
        <div className={navClass}>
          <NavLink
            onClick={() => {
              this.handleLogoClick();
            }}
            className="nav__container__brand-icon"
            to="/"
          >
            <BrandIcon />
          </NavLink>
          <div className="nav__right">{this.renderNavLinks()}</div>
          <HamburgerIcon onClick={this.handleHamburgerIconClick} />
          {isResponsive && menuOpen && (
            <MobileMenu>{this.renderNavLinks()}</MobileMenu>
          )}
        </div>
      </nav>
    );
  }
}

const mapDispatchToProps = {
  handleToggleMenu: toggleMobileMenu
};
function mapStateToProps(state: any) {
  return { menuOpen: toggleMobileMenuSelector(state) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withScreenDimensions(Header));
