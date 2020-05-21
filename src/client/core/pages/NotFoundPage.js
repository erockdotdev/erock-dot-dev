import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return (
    <section style={{ height: '60vh', padding: '100px' }}>
      <h1>Sorry the page you're looking for doesn't exist</h1>
    </section>
  );
};

export default {
  component: NotFoundPage
};
