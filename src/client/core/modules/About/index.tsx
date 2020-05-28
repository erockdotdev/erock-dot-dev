/* eslint-disable react/no-danger */
import React from 'react';
import Marked from 'marked';
import { useDispatch } from 'react-redux';
import { toggleModal } from '@redux/actions';
import Image from '@components/ImageComponent';
import Button from '@components/Button';
import { BackgroundType, componentImage } from '@custom-types/index';
import './about.scss';

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
  const dispatch = useDispatch();
  const { id } = media.sys.contentType.sys;
  const isImage = id === BackgroundType.image;
  const formatBody = Marked(about);
  const body = JSON.parse(JSON.stringify(formatBody));

  return (
    <section className="about__container">
      <div className="about__container__cover-image">
        {isImage && <Image imageData={media} />}
      </div>
      <div className="about__container__inner">
        <div className="about__container__inner__about-info">
          <div className="about__container__inner__about-info__headline">
            <h2 className="about__container__inner__about-info__headline__inner">
              {headline}
            </h2>
          </div>
          <div className="about__container__inner__about-info__body">
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <div className="about__container__inner__about-info__body__button-container">
              <Button
                type="button"
                onClick={() => {
                  dispatch(toggleModal());
                }}
              >
                Get in touch!
              </Button>
            </div>
          </div>
        </div>
        <div className="about__container__inner__skills">
          <div>
            <h2>Core Skills</h2>
            <ul>{renderSkills(coreSkills)}</ul>
          </div>
          <div>
            <h2>Other Skills</h2>
            <ul>{renderSkills(otherSkills)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
