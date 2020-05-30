module.exports = {
  PORT: process.env.PORT || 3000,
  HOST: process.env.HOST || 'localhost',
  REGEX: {},
  DATE_FORMATS: {},
  VIDEO_PROVIDER: {
    YouTube: {
      BASE_URL: 'https://www.youtube.com/watch?v='
    },
    Vimeo: {
      BASE_URL: 'https://vimeo.com/'
    }
  },
  SOCIAL_LINKS: {
    LINKED_IN: 'https://www.linkedin.com/in/ericsanchez87',
    YOU_TUBE: 'https://www.youtube.com/channel/UC0gdeCuIb7iV4PDwmEMuA-A',
    INSTAGRAM: 'https://www.instagram.com/erockdanger',
    GIT_HUB: 'https://github.com/unit57'
  }
};
