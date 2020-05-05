import React from 'react';
import instagram from '@assets/icons/instagram.svg';
import github from '@assets/icons/github.svg';
import youtube from '@assets/icons/youtube.svg';
import linkedin from '@assets/icons/linkedin.svg';
import './footer.scss';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <section className="footer__container">
      <div className="footer__container__links">
        <a className="footer__container__links__link" href="/">
          <img src={instagram} alt="instagram" />
        </a>
        <a className="footer__container__links__link" href="/">
          <img src={github} alt="github" />
        </a>
        <a className="footer__container__links__link" href="/">
          <img src={linkedin} alt="linkedin" />
        </a>
        <a className="footer__container__links__link" href="/">
          <img src={youtube} alt="youtube" />
        </a>
      </div>
      <div className="footer__container__copyright">
        <a href="/">Powered by Contentful</a>
        <span className="">{year}©EROCK.DEV</span>
      </div>
    </section>
  );
};

export default Footer;
