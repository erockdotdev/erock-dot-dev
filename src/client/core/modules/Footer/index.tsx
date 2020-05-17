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
          <img src={linkedin} alt="linkedin" />
        </a>
        <a className="footer__container__links__link" href="/">
          <img src={instagram} alt="instagram" />
        </a>
        <a className="footer__container__links__link" href="/">
          <img src={github} alt="github" />
        </a>
        <a className="footer__container__links__link" href="/">
          <img src={youtube} alt="youtube" />
        </a>
      </div>
      <div className="footer__container__bottom">
        <span className="footer__container__bottom__copyright">
          {year}©EROCK.DEV
        </span>
        <a
          href="https://www.contentful.com/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <img
            src="https://images.ctfassets.net/fo9twyrwpveg/7F5pMEOhJ6Y2WukCa2cYws/398e290725ef2d3b3f0f5a73ae8401d6/PoweredByContentful_DarkBackground.svg"
            style={{ maxWidth: '100px', width: '100%' }}
            alt="Powered by Contentful"
          />
        </a>
      </div>
    </section>
  );
};

export default Footer;
