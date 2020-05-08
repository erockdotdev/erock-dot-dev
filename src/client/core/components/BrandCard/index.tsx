import React from 'react';
import { componentImage } from '@custom-types/index';
import './brand-card.scss';

type Props = {
  brandData: componentImage;
};

const ProjectSlide: React.FC<Props> = ({ brandData }) => {
  const {
    fields: {
      image: {
        fields: {
          file: { url },
          description
        }
      }
    }
  } = brandData;

  return (
    <section className="brand-card__container">
      <img src={url} alt={description} title={description} />
    </section>
  );
};

export default ProjectSlide;
