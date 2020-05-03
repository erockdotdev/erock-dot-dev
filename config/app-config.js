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
  }
};
