import React from 'react';
import './footer.scss';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <section className="footer__container">
      <div className="footer__container__links">
        <a href="/">Instagram</a>
        <a href="/">Github</a>
        <a href="/">LinkedIn</a>
        <a href="/">Contact</a>
      </div>
      <div className="footer__container__copyright">
        <a href="/">Powered by Contentful</a>
        <span className="">{year}©EROCK.DEV</span>
      </div>
    </section>
  );
};

export default Footer;
