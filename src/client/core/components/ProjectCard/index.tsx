import React from 'react';
import { Project } from '@custom-types/index';
import CTALink from '@components/CTALink';
import './project-card.scss';

type Props = {
  projectData: Project;
};

const ProjectSlide: React.FC<Props> = ({ projectData }) => {
  const {
    fields: {
      projectTitle,
      subtitle,
      thumbnail: {
        fields: {
          description,
          file: { url }
        }
      },
      entryAsSlideCta
    }
  } = projectData;

  return (
    <section className="project-card__container">
      <p>{projectTitle}</p>
      <p>{subtitle}</p>
      <img src={url} alt={description} />
      <CTALink link={entryAsSlideCta} />
    </section>
  );
};

export default ProjectSlide;
