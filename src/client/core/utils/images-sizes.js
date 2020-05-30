import Utilities from './formatting.js';

module.exports = {
  navigationBrandImages: [
    {
      mediaQuery: 'default',
      params: { w: 700, h: 135, q: 60, fit: 'fill' }
    }
  ],
  card: [
    {
      mediaQuery: 'default',
      params: { w: 900 }
    }
  ],
  brandCard: [
    {
      mediaQuery: 'default',
      params: { w: 85, q: 100 }
    }
  ],
  callout: [
    {
      mediaQuery: 'default',
      params: { w: 650, q: 100 }
    }
  ],
  socialIcon: [
    {
      mediaQuery: 'default',
      params: { w: 40, h: 40 }
    }
  ],
  fullScreenBackgroundDesktop: () => {
    const settings = {
      fl: 'progressive',
      fm: 'jpg',
      q: 55,
      w: 2200
    };
    return Utilities.objectToQueryString(settings);
  },
  fullScreenBackgroundMobile: () => {
    const settings = {
      fl: 'progressive',
      fm: 'jpg',
      q: 45,
      w: 768
    };
    return Utilities.objectToQueryString(settings);
  }
};
