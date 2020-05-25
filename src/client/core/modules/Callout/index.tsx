import React from 'react';
import { Callout as CalloutType } from '@custom-types/index';
// import Image from '@components/ImageComponent';
// import { callout } from '@utils/images-sizes';
import IframeResizer from 'iframe-resizer-react';
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
        {/* <IframeResizer
          log
          src="https://snapwidget.com/embed/830846"
          style={{
            // width: '100%',
            // minWidth: '100%',
            height: 'auto',
            border: 'none',
            overflow: 'hidden'
          }}
          allowTransparency
          heightCalculationMethod="lowestElement"
          className="resp-iframe"
        /> */}
        <iframe
          title="instagram"
          src="https://snapwidget.com/embed/830846"
          className="callout__container__image__resp-iframe"
          allowTransparency
          frameBorder="0"
          scrolling="no"
          style={{
            border: 'none',
            overflow: 'hidden'
            // height: 'auto;',
            // width: '100%'
          }}
        />
      </div>
    </section>
  );
};

export default Callout;
