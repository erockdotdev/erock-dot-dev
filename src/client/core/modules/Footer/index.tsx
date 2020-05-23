import React from 'react';
import instagram from '@assets/icons/instagram.svg';
import github from '@assets/icons/github.svg';
import youtube from '@assets/icons/youtube.svg';
import linkedin from '@assets/icons/linkedin.svg';
import { SOCIAL_LINKS } from '@config/app-config';
import './footer.scss';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <section className="footer__container">
      <div className="footer__container__links">
        <a
          className="footer__container__links__link"
          target="_blank"
          rel="noopener noreferrer"
          href={SOCIAL_LINKS.LINKED_IN}
        >
          <img src={linkedin} alt="linkedin" />
        </a>
        <a
          className="footer__container__links__link"
          target="_blank"
          rel="noopener noreferrer"
          href={SOCIAL_LINKS.YOU_TUBE}
        >
          <img src={youtube} alt="youtube" />
        </a>
        <a
          className="footer__container__links__link"
          target="_blank"
          rel="noopener noreferrer"
          href={SOCIAL_LINKS.INSTAGRAM}
        >
          <img src={instagram} alt="instagram" />
        </a>
        <a
          className="footer__container__links__link"
          target="_blank"
          rel="noopener noreferrer"
          href={SOCIAL_LINKS.GIT_HUB}
        >
          <img src={github} alt="github" />
        </a>
      </div>
      <div className="footer__container__bottom">{year} © EROCK.DEV</div>
    </section>
  );
};

export default Footer;
