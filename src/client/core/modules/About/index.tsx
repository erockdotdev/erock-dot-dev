/* eslint-disable react/no-danger */
import React from 'react';
import './about.scss';
import FormatRichTextField from '@utils/contentful-rich-text-formatting';
import Image from '@components/ImageComponent';
import { BackgroundType, componentImage } from '@custom-types/index';

type Props = {
  fields: {
    headline: string;
    about: string;
    media: componentImage;
    coreSkills: string[];
    otherSkills: string[];
  };
};
function renderSkills(coreSkills: string[]): React.ReactNodeArray {
  return coreSkills.map(skill => {
    return <li key={skill}>{skill}</li>;
  });
}

const About: React.FC<Props> = ({ fields }) => {
  const { headline, about, media, coreSkills, otherSkills } = fields;
  const { id } = media.sys.contentType.sys;
  const isImage = id === BackgroundType.image;
  const formatAbout = FormatRichTextField(about);

  return (
    <section className="about__container">
      {isImage && <Image imageData={media} />}
      <div className="about__container__about-info">
        <h1>{headline}</h1>
        {formatAbout}
      </div>
      <div className="about__container__skills">
        <div>
          <h2>Core Skills</h2>
          <ul>{renderSkills(coreSkills)}</ul>
        </div>
        <div>
          <h2>Other Skills</h2>
          <ul>{renderSkills(otherSkills)}</ul>
        </div>
      </div>
    </section>
  );
};

export default About;
