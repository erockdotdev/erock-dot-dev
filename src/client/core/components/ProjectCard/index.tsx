import React from 'react';
import { Project } from '@custom-types/index';
import UILink from '@components/UILink';
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
      <UILink link={entryAsSlideCta} />
    </section>
  );
};

export default ProjectSlide;
