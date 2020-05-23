import React from 'react';
import { componentImage } from '@custom-types/index';
import Image from '@components/ImageComponent';
import { brandCard } from '@utils/images-sizes';
import './brand-card.scss';

type Props = {
  brandData: componentImage;
};

const BrandCard: React.FC<Props> = ({ brandData }) => {
  return (
    <section className="brand-card__container">
      <Image sizes={brandCard} imageData={brandData} />
    </section>
  );
};

export default BrandCard;
