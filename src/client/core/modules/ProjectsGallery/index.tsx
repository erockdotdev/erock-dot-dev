import React from 'react';
import { Project } from '@custom-types/index';
import ProjectCard from '@components/ProjectCard';
import CarouselArrow from '@components/CarouselArrow';
import Slider from 'react-slick';
import './projects-gallery.scss';

type Props = {
  fields: {
    sectionTitle: string;
    projects: Project[];
  };
};

function renderProjects(projects: Project[]) {
  return projects.map(
    (project: Project): React.ReactNode => {
      const {
        sys: { id }
      } = project;
      return (
        <div key={id}>
          <ProjectCard projectData={project} />
        </div>
      );
    }
  );
}

const ProjectsGallery: React.FC<Props> = ({ fields }) => {
  const { sectionTitle, projects } = fields;
  const settings = {
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 3,
    dots: false,
    infinite: false,
    draggable: false,
    nextArrow: <CarouselArrow isNext />,
    prevArrow: <CarouselArrow isPrev />,
    responsive: [
      {
        // @todo move breakpoint to config
        breakpoint: 769,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          initialSlide: 1,
          draggable: true,
          arrows: false
        }
      }
    ]
  };

  return (
    <section className="projects-gallery__container">
      <span className="projects-gallery__container__title">{sectionTitle}</span>
      <div className="projects-gallery__container__inner">
        <Slider {...settings}>{renderProjects(projects)}</Slider>
      </div>
    </section>
  );
};

export default ProjectsGallery;
