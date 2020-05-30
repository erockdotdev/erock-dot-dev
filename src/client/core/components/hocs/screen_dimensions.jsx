import React, { Component } from 'react';
import { debounce } from 'lodash';

export default function withScreenDimensions(WrappedComponent) {
  return class ScreenDimensions extends Component {
    constructor(props) {
      super(props);
      this.state = {
        width: 0,
        height: 0,
        isMobile: false,
        isTablet: false,
        isDesktop: false,
        isResponsive: false
      };
      this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener(
        'resize',
        debounce(this.updateWindowDimensions, 100)
      );
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
      const isMobile = window.innerWidth <= 425;
      const isTablet = window.innerWidth >= 425 && window.innerWidth <= 768;
      const isDesktop = window.innerWidth > 768;
      const isResponsive = isMobile || isTablet;
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile,
        isTablet,
        isDesktop,
        isResponsive
      });
    }

    render() {
      const {
        width,
        height,
        isMobile,
        isTablet,
        isDesktop,
        isResponsive
      } = this.state;
      return (
        <WrappedComponent
          {...this.props}
          windowWidth={width}
          windowHeight={height}
          isMobile={isMobile}
          isTablet={isTablet}
          isDesktop={isDesktop}
          isResponsive={isResponsive}
        />
      );
    }
  };
}
