import React from 'react';
import { chunk } from 'lodash';
import { Project } from '@custom-types/index';
import ProjectCard from '@components/ProjectCard';
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

function renderGroup(projects: Project[]): React.ReactNode {
  const groupProjects = chunk(projects, 2);
  return groupProjects.map((group, index) => {
    const key = `group-${index}`;
    return (
      <div key={key} className="projects-gallery__container__inner__group">
        {renderProjects(group)}
      </div>
    );
  });
}

const ProjectsGallery: React.FC<Props> = ({ fields }) => {
  const { sectionTitle, projects } = fields;
  return (
    <section className="projects-gallery__container">
      I am a {sectionTitle}!
      <div className="projects-gallery__container__inner">
        {renderGroup(projects)}
      </div>
    </section>
  );
};

export default ProjectsGallery;
