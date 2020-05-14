import React from 'react';
import { Project } from '@custom-types/index';
import Image from '@components/ImageComponent';
import UILink from '@components/UILink';
import './project-card.scss';

type Props = {
  projectData: Project;
};

const ProjectSlide: React.FC<Props> = ({ projectData }) => {
  const {
    fields: { projectTitle, subtitle, thumbnail, entryAsSlideCta }
  } = projectData;

  return (
    <section className="project-card__container">
      <Image imageData={thumbnail} />
      <div className="project-card__container__content">
        <div className="project-card__container__inner">
          <p>{projectTitle}</p>
          <p>{subtitle}</p>
          <UILink link={entryAsSlideCta} />
        </div>
      </div>
    </section>
  );
};

export default ProjectSlide;
