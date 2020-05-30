import React from 'react';
import { Callout as CalloutType } from '@custom-types/index';
import UILink from '@components/UILink';
import './callout.scss';

const Callout: React.FC<CalloutType> = props => {
  const {
    fields: { headline, instagramLink, imageLabel }
  } = props;

  return (
    <section className="callout__container">
      <div className="callout__container__text">
        <div className="callout__container__text__headline">{headline}</div>
        <span className="callout__container__text__subcopy">
          <UILink link={instagramLink} className="ui-link__light" />
        </span>
      </div>
      <div className="callout__container__image">
        <iframe
          title="instagram"
          src="https://snapwidget.com/embed/830846"
          className="callout__container__image__resp-iframe"
          frameBorder="0"
          scrolling="no"
          style={{
            border: 'none',
            overflow: 'hidden'
          }}
        />
        {imageLabel && (
          <div className="callout__container__image__tag">
            <span className="callout__container__image__tag__label">
              {imageLabel}
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Callout;
