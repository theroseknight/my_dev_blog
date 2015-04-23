/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'my-dev-blog',
    environment: environment,
    firebase: 'https://my-dev-blog.firebaseio.com/',
    baseURL: '/',
    locationType: 'auto',
    contentSecurityPolicy: {
              'default-src': "'none'",
              'script-src': "'self' 'unsafe-inline' 'unsafe-eval'",
              'font-src': "'self' http://fonts.gstatic.com/s/abel/v6/brdGGFwqYJxjg2CD1E9o7g.woff2 http://fonts.gstatic.com/s/indieflower/v7/10JVD_humAd5zP2yrFqw6ugdm0LZdjqr5-oayXSOefg.woff2",
              'connect-src': "'self' wss://s-dal5-nss-34.firebaseio.com/.ws?v=5&ns=my-dev-blog",
              'img-src': "'self'",
              'report-uri':"'localhost'",
              'style-src': "'self' 'unsafe-inline'",
              'frame-src': "'none'"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
