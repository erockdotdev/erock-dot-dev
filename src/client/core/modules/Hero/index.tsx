import React from 'react';
import {
  Hero as HeroType,
  componentLink,
  componentImage,
  componentVideo,
  BackgroundType
} from '@custom-types/index';
import CTALink from '@components/CTALink';
import Image from '@components/Image';
import './hero.scss';

const renderLinks = (ctaLinks: componentLink[]): React.ReactNodeArray => {
  return ctaLinks.map(link => {
    const { id } = link.sys;
    return (
      link && (
        <React.Fragment key={id}>
          <CTALink link={link} />
        </React.Fragment>
      )
    );
  });
};
const renderBackgroundDesktop = (
  backgroundDesktop: componentImage | componentVideo
): React.ReactElement | null => {
  const { id } = backgroundDesktop.sys.contentType.sys;
  if (id === BackgroundType.image) {
    return <Image image={backgroundDesktop} />;
  }
  return null;
};

const Hero: React.FC<HeroType> = ({ hero }) => {
  const {
    fields: { headline, subcopy, ctaLinks, backgroundDesktop, backgroundMobile }
  } = hero;
  return (
    <section className="hero__container">
      <div className="hero__container__content">
        <span className="hero__container__content__headline">{headline}</span>
        {subcopy && (
          <span className="hero__container__content__subcopy">{subcopy}</span>
        )}
        {ctaLinks && (
          <div className="hero__container__content__link-container">
            {renderLinks(ctaLinks)}
          </div>
        )}
      </div>

      <div className="hero__container__background">
        {renderBackgroundDesktop(backgroundDesktop)}
      </div>
    </section>
  );
};

export default Hero;
