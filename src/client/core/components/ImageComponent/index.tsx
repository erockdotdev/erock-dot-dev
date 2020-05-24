import React from 'react';
import { componentImage, ImageSizes } from '@custom-types/index';
import ReactContentfulImage from 'react-contentful-image';
import './image.scss';

type Props = {
  imageData: componentImage;
  sizes?: ImageSizes[];
  showTitle?: boolean;
};

const Image: React.FC<Props> = ({ imageData, sizes, showTitle = true }) => {
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
  const renderTitle = showTitle && title;
  return (
    <ReactContentfulImage
      className="image__container__image"
      title={renderTitle}
      alt={description}
      src={url}
      draggable={false}
      sizes={
        sizes || [
          {
            mediaQuery: 'default',
            params: { w: 1800, q: 100, fm: 'jpg' }
          }
        ]
      }
    />
  );
};

export default Image;
