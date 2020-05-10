import React from 'react';
import {
  Hero as HeroType,
  componentLink,
  componentImage,
  componentVideo,
  BackgroundType,
  screenDimensions
} from '@custom-types/index';
import withScreenDimensions from '@components/hocs/screen_dimensions.jsx';
import UILink from '@components/UILink';
import BackgroundImage from '@components/BackgroundImage';
import BackgroundVideo from '@components/BackgroundVideo';
import './hero.scss';

type Props = HeroType & screenDimensions;

const renderLinks = (ctaLinks: componentLink[]): React.ReactNodeArray => {
  return ctaLinks.map(link => {
    const { id } = link.sys;
    return (
      link && (
        <React.Fragment key={id}>
          <UILink link={link} className="ui-link__light" />
        </React.Fragment>
      )
    );
  });
};
const renderBackgroundImage = (
  background: componentImage
): React.ReactElement => {
  return <BackgroundImage imageData={background} />;
};
const renderBackgroundVideo = (
  background: componentVideo
): React.ReactElement => {
  return <BackgroundVideo videoData={background} />;
};

const renderBackground = (background: any): React.ReactElement | null => {
  const { id } = background.sys.contentType.sys;
  if (id === BackgroundType.image) {
    return renderBackgroundImage(background);
  }
  if (id === BackgroundType.video) {
    return renderBackgroundVideo(background);
  }
  return null;
};

const Hero: React.FC<Props> = props => {
  const {
    hero: {
      fields: {
        headline,
        subcopy,
        ctaLinks,
        backgroundDesktop,
        backgroundMobile
      }
    },
    isMobile,
    isTablet
  } = props;

  const background =
    isMobile || isTablet ? backgroundMobile : backgroundDesktop;

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
        {renderBackground(background)}
      </div>
    </section>
  );
};

export default withScreenDimensions(Hero);
