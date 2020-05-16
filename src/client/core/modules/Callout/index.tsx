import React from 'react';
import { Callout as CalloutType } from '@custom-types/index';
import Image from '@components/ImageComponent';
import './callout.scss';

const Callout: React.FC<CalloutType> = props => {
  const {
    fields: { headline, media, subcopy }
  } = props;
  return (
    <section className="callout__container">
      <div className="callout__container__text">
        <h3>{headline}</h3>
        <h4>{subcopy}</h4>
      </div>
      <div className="callout__container__image">
        <Image imageData={media} />
      </div>
    </section>
  );
};

export default Callout;
