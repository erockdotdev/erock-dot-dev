import React from 'react';
import { Project } from '@custom-types/index';
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
      entryAsSlideCta: {
        fields: { isExternalLink, linkLabel, linkPath, openInNewTab }
      }
    }
  } = projectData;

  return (
    <section className="project-slide__container">
      <div>
        <p>{projectTitle}</p>
        <p>{subtitle}</p>
        <img src={url} alt={description} />
        <p>LINK: {linkLabel}</p>
      </div>
    </section>
  );
};

export default ProjectSlide;
