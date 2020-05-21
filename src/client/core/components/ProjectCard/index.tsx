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
    fields: {
      projectTitle,
      subtitle,
      thumbnail,
      entryAsSlideCta,
      entryAsSlideCta: {
        fields: { linkLabel }
      }
    }
  } = projectData;

  return (
    <UILink link={entryAsSlideCta}>
      <section className="project-card__container" tabIndex={0}>
        <Image imageData={thumbnail} />
        <div className="project-card__container__content">
          <div className="project-card__container__content__inner">
            <p>{projectTitle}</p>
            <p>{subtitle}</p>
            <p>{linkLabel}</p>
          </div>
        </div>
      </section>
    </UILink>
  );
};

export default ProjectSlide;
