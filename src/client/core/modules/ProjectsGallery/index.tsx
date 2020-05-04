import React, { ReactNode } from 'react';
import { Project } from '@custom-types/index';
import ProjectCard from '@components/ProjectCard';
import './projects-gallery.scss';

type Props = {
  fields: {
    sectionTitle: string;
    projects: Project[];
  };
};

function renderProjects(projects: Project[]): React.ReactNode {
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
  return (
    <section className="projects-gallery__container">
      I am a {sectionTitle}!{renderProjects(projects)}
    </section>
  );
};

export default ProjectsGallery;
