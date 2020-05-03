import React from 'react';
import Slider from 'react-slick';
// import {
//   componentLink,
// } from '@custom-types/index';
import ProjectSlide from '@components/ProjectSlide';
import './projects-gallery.scss';

type Props = {
  fields: {
    sectionTitle: string;
    slides: any;
  };
};
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2
};

function renderSlides(slides: any): any {
  return slides.map((slide: any): any => {
    return (
      <div>
        <ProjectSlide slideData={slide} />
      </div>
    );
  });
}

const ProjectsGallery: React.FC<Props> = ({ fields }) => {
  const { sectionTitle, slides } = fields;

  return (
    <section className="projects-gallery__container">
      I am a {sectionTitle}!
      <Slider {...settings}>{renderSlides(slides)}</Slider>
    </section>
  );
};

export default ProjectsGallery;
