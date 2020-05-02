import React from 'react';
import { componentImage, ImageSizes } from '@custom-types/index';
import ReactContentfulImage from 'react-contentful-image';
import './background-image.scss';

type Props = {
  imageData: componentImage;
  sizes?: ImageSizes[];
};

const BackgroundImage: React.FC<Props> = ({ imageData, sizes }) => {
  const {
    fields: {
      image: {
        fields: {
          title,
          description,
          file: { url }
        }
      }
    }
  } = imageData;

  return (
    <div className="background-image__container">
      <ReactContentfulImage
        className="background-image__container__image"
        title={title}
        alt={description}
        src={url}
        draggable={false}
        sizes={
          sizes || [
            {
              mediaQuery: 'default',
              params: { w: 1800, q: 100 }
            },
            {
              mediaQuery: 'mobile',
              params: { w: 1800, q: 100 }
            }
          ]
        }
      />
    </div>
  );
};

export default BackgroundImage;
