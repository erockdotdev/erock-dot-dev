import React from 'react';
import { Project } from '@custom-types/index';
import ProjectCard from '@components/ProjectCard';
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

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  console.log('props', props);
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'green' }}
      onClick={onClick}
    />
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
    className: 'inner-slider-div',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <section className="projects-gallery__container">
      <span className="projects-gallery__container__title">{sectionTitle}</span>
      <div className="projects-gallery__container__inner">
        <Slider {...settings}>{renderProjects(projects)}</Slider>
      </div>
      {/* seperate previous and next buttons https://react-slick.neostack.com/docs/example/previous-next-methods */}
    </section>
  );
};

export default ProjectsGallery;
