import React from 'react';
import { componentImage } from '@custom-types/index';
import './image.scss';

type Props = {
  image: componentImage;
};

const Image: React.FC<Props> = ({ image }) => {
  const {
    fields: {
      image: {
        fields: {
          description,
          file: { url }
        }
      }
    }
  } = image;

  return (
    <div>
      <img src={url} alt={description} />
    </div>
  );
};

export default Image;
