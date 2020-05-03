import React from 'react';
import './project-slide.scss';

const ProjectSlide: React.FC = ({ slideData }) => {
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
  } = slideData;

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
