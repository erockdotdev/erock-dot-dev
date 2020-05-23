import React from 'react';
import { Callout as CalloutType } from '@custom-types/index';
import Image from '@components/ImageComponent';
import { callout } from '@utils/images-sizes';
import './callout.scss';

const Callout: React.FC<CalloutType> = props => {
  const {
    fields: { headline, media, subcopy }
  } = props;
  return (
    <section className="callout__container">
      <div className="callout__container__text">
        <span className="callout__container__text__headline">{headline}</span>
        <span className="callout__container__text__subcopy">{subcopy}</span>
      </div>
      <div className="callout__container__image">
        <Image imageData={media} sizes={callout} />
      </div>
    </section>
  );
};

export default Callout;
