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
    return link && <CTALink link={link} />;
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
    <section>
      <h1>{headline}</h1>
      <span>{subcopy}</span>
      <div>{renderLinks(ctaLinks)}</div>
      {renderBackgroundDesktop(backgroundDesktop)}
    </section>
  );
};

export default Hero;
