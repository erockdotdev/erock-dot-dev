import React from 'react';
// import {
//   componentLink,
// } from '@custom-types/index';
import './projects-gallery.scss';

const ProjectsGallery: React.FC = ({ fields }) => {
  const { sectionTitle, slides } = fields;
  return (
    <section className="projects-gallery__container">
      I am a {sectionTitle}!
    </section>
  );
};

export default ProjectsGallery;
