export interface MetaData {
  fields: {
    title: string;
    description: string;
    keywords: string;
    url: string;
  };
}
export interface Hero {
  hero: {
    fields: {
      title: string;
      headline: string;
      subcopy: string;
      ctaLinks: componentLink[];
      backgroundDesktop: componentImage | componentVideo;
      backgroundMobile: componentImage | componentVideo;
    };
    sys: sys;
  };
}
export interface Brands {
  fields: {
    headline: string;
    subcopy: string;
    brands: componentImage[];
  };
}
export interface Callout {
  fields: {
    headline: string;
    subcopy: string;
    media: componentImage;
  };
}

type file = {
  contentType: string;
  fileName: string;
  url: string;
};

export type image = {
  fields: {
    title: string;
    description: string;
    file: file;
  };
};

export type componentVideo = {
  fields: {
    title: string;
    headline: string;
    description: string;
    thumbnail: image;
    videoId: string;
    videoProvider: string[];
    loopContinuously: boolean;
  };
  sys: sys;
};

export type componentImage = {
  fields: {
    title: string;
    image: image;
  };
  sys: sys;
};

export type componentLink = {
  fields: {
    title: string;
    linkLabel?: string;
    linkPath: string;
    isExternalLink: boolean;
    openInNewTab: boolean;
  };
  sys: sys;
};

type sys = {
  contentType: {
    sys: {
      id: string;
    };
  };
  id: string;
};

export type ImageSizes = {
  mediaQuery: string;
  params: {
    w: number;
    h?: number;
    q: number;
    fit?: string;
  };
};

export const BackgroundType = {
  video: 'componentVideo',
  image: 'componentImage'
};

export type screenDimensions = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isResponsive: boolean;
};

export interface Project {
  fields: {
    projectTitle: string;
    subtitle: string;
    thumbnail: componentImage;
    entryAsSlideCta: componentLink;
  };
  sys: sys;
}
