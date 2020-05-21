import React, { useEffect } from 'react';
import { setup as reactContentfulImageSetup } from 'react-contentful-image';
import { renderRoutes } from 'react-router-config';
import Header from '@modules/Header';
import Footer from '@modules/Footer';
import { fetchCurrentUser } from '@redux/actions';
import './app.scss';

const App = ({ route }) => {
  useEffect(() => {
    const screenXs = '0px';
    const screenSm = '486px';
    const screenMd = '768px';
    const screenLg = '1192px';
    const screenXl = '1448px';

    const media = {
      xs: `(max-width: ${screenXs})`,
      sm: `(max-width: ${screenSm})`,
      md: `(max-width: ${screenMd})`,
      lg: `(max-width: ${screenLg})`,
      xl: `(max-width: ${screenXl})`,
      dpr2: '(min-resolution: 144dpi)', // 1.5x devices and up get 2x images
      dpr3: '(min-resolution: 240dpi)', // 2.5x devices and up get 3x images
      portrait: '(orientation: portrait)',
      landscape: '(orientation: landscape)'
    };

    // Object keys are media query names from above. 'default' means no media query (default match).
    // E.g. for mobile first 'default' would be the mobile media query
    const variants = {
      default: {
        quality: 45,
        density: 1
      },
      dpr2: {
        quality: 35,
        density: 2
      },
      dpr3: {
        quality: 35,
        density: 2
      }
    };
    reactContentfulImageSetup(media, variants);
  });
  return (
    <div id="app-root">
      <Header />
      {renderRoutes(route.routes)}
      <Footer />
    </div>
  );
};

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};
