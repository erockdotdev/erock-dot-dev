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
    description: string;
    thumbnail: image;
    title: string;
    videoId: string;
    videoProvider: string[];
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
    linkLabel: string;
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
