import React from 'react';
import Slider from 'react-slick';
// import {
//   componentLink,
// } from '@custom-types/index';
import './projects-gallery.scss';

type Props = {
  fields: {
    sectionTitle: string;
    slides: any;
  };
};

const ProjectsGallery: React.FC<Props> = ({ fields }) => {
  const { sectionTitle, slides } = fields;
  console.log('slides', slides);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <section className="projects-gallery__container">
      I am a {sectionTitle}!
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </section>
  );
};

export default ProjectsGallery;
