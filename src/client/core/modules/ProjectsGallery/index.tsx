import React from 'react';
import { Project } from '@custom-types/index';
import ProjectCard from '@components/ProjectCard';
import Slider from 'react-slick';
import './projects-gallery.scss';
import classNames from 'classnames';

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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          draggable: true,
          nextArrow: <div />,
          prevArrow: <div />
        }
      }
    ]
  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    const isDisabled = className.includes('slick-disabled');
    const nextArrowClassNames = classNames(
      className,
      'projects-gallery__container__next-arrow',
      {
        'projects-gallery__container__hide-arrow': isDisabled
      }
    );
    return (
      <div
        className={nextArrowClassNames}
        style={{ ...style, background: 'black' }}
        onClick={onClick}
        onKeyDown={onClick}
        role="button"
        aria-label="Slider Next Button"
        tabIndex={0}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    const isDisabled = className.includes('slick-disabled');
    const prevArrowClassNames = classNames(
      className,
      'projects-gallery__container__prev-arrow',
      {
        'projects-gallery__container__hide-arrow': isDisabled
      }
    );

    return (
      <div
        className={prevArrowClassNames}
        style={{ ...style, background: 'black' }}
        onClick={onClick}
        onKeyDown={onClick}
        role="button"
        aria-label="Slider Previous Button"
        tabIndex={0}
      />
    );
  }

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
