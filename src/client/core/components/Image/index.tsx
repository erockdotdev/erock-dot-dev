import React from 'react';
import { componentImage, ImageSizes } from '@custom-types/index';
import ReactContentfulImage from 'react-contentful-image';
import './image.scss';

type Props = {
  image: componentImage;
  sizes?: ImageSizes[];
};

const Image: React.FC<Props> = ({ image, sizes }) => {
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
  } = image;

  return (
    <div className="image__container">
      <ReactContentfulImage
        className="image__container__image"
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

export default Image;
