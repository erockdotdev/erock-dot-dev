import React from 'react';
import { Callout as CalloutType } from '@custom-types/index';
import './callout.scss';

const Callout: React.FC<CalloutType> = props => {
  const {
    fields: { headline, subcopy }
  } = props;
  return (
    <section className="callout__container">
      <div className="callout__container__text">
        <span className="callout__container__text__headline">{headline}</span>
        <span className="callout__container__text__subcopy">{subcopy}</span>
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
      </div>
    </section>
  );
};

export default Callout;
