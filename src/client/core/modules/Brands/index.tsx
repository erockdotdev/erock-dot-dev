import React from 'react';
import BrandCard from '@components/BrandCard';
import {
  componentImage,
  Brands as BrandsType,
  screenDimensions
} from '@custom-types/index';
import withScreenDimensions from '@components/hocs/screen_dimensions.jsx';
import chunk from 'lodash/chunk';
import './brands.scss';

type Props = BrandsType & screenDimensions;

function renderBrands(brands: componentImage[]): React.ReactNode {
  return brands.map((brand: componentImage) => {
    const { id } = brand.sys;
    return <BrandCard key={id} brandData={brand} />;
  });
}

function renderBrandGroup(
  brands: componentImage[],
  isMobile: boolean
): React.ReactNode {
  const chunkGroup = isMobile ? 3 : 2;
  const groupBrands = chunk(brands, chunkGroup);
  return groupBrands.map((group: componentImage[]) => {
    return (
      <div className="brands__container__logo-inner__brand-group">
        {renderBrands(group)}
      </div>
    );
  });
}

const Brands: React.FC<Props> = props => {
  const {
    fields: {
      headline,
      subcopy,
      brands,
      brandsHeadline,
      artists,
      artistsHeadline
    },
    isMobile
  } = props;
  return (
    <section className="brands__container">
      <div className="brands__container__headline">
        <p>{headline}</p>
        <p>{subcopy}</p>
      </div>
      <hr />
      <div className="brands__container__logo-wrapper">
        <h3>{brandsHeadline}</h3>
        <div className="brands__container__logo-inner">
          {renderBrandGroup(brands, isMobile)}
        </div>
      </div>
      <hr />
      <div className="brands__container__logo-wrapper">
        <h3>{artistsHeadline}</h3>
        <div className="brands__container__logo-inner">
          {renderBrandGroup(artists, isMobile)}
        </div>
      </div>
      <hr />
    </section>
  );
};

export default withScreenDimensions(Brands);
