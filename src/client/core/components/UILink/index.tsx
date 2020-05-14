import React from 'react';
import { Link } from 'react-router-dom';
import { componentLink } from '@custom-types/index';
import classNames from 'classnames';
import './UILink.scss';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  link: componentLink;
}

const UILink: React.FC<LinkProps> = ({ link, className, children }) => {
  const {
    fields: { linkLabel, linkPath, isExternalLink, openInNewTab }
  } = link;

  const linkClass = classNames('ui-link__container', className);

  const renderLink = isExternalLink ? (
    <a
      className={linkClass}
      href={linkPath}
      target={openInNewTab ? '_blank' : undefined}
      rel={openInNewTab ? 'noopener noreferrer' : undefined}
    >
      {children || linkLabel}
    </a>
  ) : (
    <Link
      className={linkClass}
      to={linkPath}
      target={openInNewTab ? '_blank' : undefined}
      rel={openInNewTab ? 'noopener noreferrer' : undefined}
    >
      {children || linkLabel}
    </Link>
  );

  return renderLink;
};

export default UILink;
