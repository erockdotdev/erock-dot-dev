import React from 'react';
import BrandCard from '@components/BrandCard';
import { componentImage } from '@custom-types/index';
import './brands.scss';

type Props = {
  fields: {
    headline: string;
    subcopy: string;
    brands: componentImage[];
    artists: componentImage[];
  };
};

function renderBrands(brands: componentImage[]): React.ReactNode {
  return brands.map((brand: componentImage) => {
    return <BrandCard brandData={brand} />;
  });
}

const Brands: React.FC<Props> = ({ fields }) => {
  const { headline, subcopy, brands, artists } = fields;
  return (
    <section className="brands__container">
      <div className="brands__container__headline">
        <p>{headline}</p>
        <p>{subcopy}</p>
      </div>
      <div className="brands__container__brands">{renderBrands(brands)}</div>
      <div className="brands__container__artists">{renderBrands(artists)}</div>
    </section>
  );
};

export default Brands;
