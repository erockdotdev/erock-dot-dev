import React from 'react';
import { Link } from 'react-router-dom';
import { componentLink } from '@custom-types/index';
import './CTALink.scss';

type Props = {
  link: componentLink;
};

const CTALink: React.FC<Props> = ({ link }) => {
  const {
    fields: { linkLabel, linkPath, isExternalLink, openInNewTab }
  } = link;

  const renderLink = isExternalLink ? (
    <a
      href={linkPath}
      target={openInNewTab ? '_blank' : undefined}
      rel={openInNewTab ? 'noopener noreferrer' : undefined}
    >
      {linkLabel}
    </a>
  ) : (
    <Link
      to={linkPath}
      target={openInNewTab ? '_blank' : undefined}
      rel={openInNewTab ? 'noopener noreferrer' : undefined}
    >
      {linkLabel}
    </Link>
  );

  return <div className="CTALink__container">{renderLink}</div>;
};

export default CTALink;
