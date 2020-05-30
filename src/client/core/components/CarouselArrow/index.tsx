import React from 'react';
import classNames from 'classnames';
import './carousel-arrow.scss';

interface CarouselArrow extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isPrev?: boolean;
  isNext?: boolean;
}

const CarouselArrow: React.FC<CarouselArrow> = props => {
  const { className = '', style, onClick = () => {}, isPrev, isNext } = props;
  const isDisabled = className.includes('slick-disabled');
  const nextArrowClassNames = classNames(
    className,
    'arrow__container',
    {
      'arrow__container--prev': isPrev
    },
    {
      'arrow__container--next': isNext
    },
    {
      'arrow__container--hide': isDisabled
    }
  );

  return (
    <button
      type="button"
      className={nextArrowClassNames}
      style={{ ...style, background: 'black' }}
      onClick={onClick}
      aria-label={`Slider ${isNext ? 'Next' : 'Previous'} Button`}
    />
  );
};

export default CarouselArrow;
