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
        <a
          href="https://www.contentful.com/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          {/* Other contentful links available herehttps://www.contentful.com/r/knowledgebase/how-attribution-works/ */}
          <img
            src="https://images.ctfassets.net/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg"
            style={{ maxWidth: '100px', width: '100%' }}
            alt="Powered by Contentful"
          />
        </a>
        <span className="">{year}©EROCK.DEV</span>
      </div>
    </section>
  );
};

export default Footer;
