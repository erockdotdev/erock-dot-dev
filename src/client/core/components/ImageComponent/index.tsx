import React from 'react';
import { componentImage, ImageSizes } from '@custom-types/index';
import ReactContentfulImage from 'react-contentful-image';
import './image.scss';

type Props = {
  imageData: componentImage;
  sizes?: ImageSizes[];
};

const Image: React.FC<Props> = ({ imageData, sizes }) => {
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
          }
        ]
      }
    />
  );
};

export default Image;
