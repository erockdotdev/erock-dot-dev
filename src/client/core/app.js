import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from '@modules/Header';
import Footer from '@modules/Footer';
import { fetchCurrentUser } from '@redux/actions';
import './app.scss';

const App = ({ route }) => {
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
