/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'theroseknight',
    environment: environment,
    firebase: 'https://theroseknight.firebaseio.com/',
    baseURL: '/',
    locationType: 'auto',
    contentSecurityPolicy: {
              'default-src': "'none'",
              'script-src': "'self' 'unsafe-inline' 'unsafe-eval' http://dreamalittledreamwithme.disqus.com http://a.disquscdn.com",
              'font-src': "'self' http://fonts.gstatic.com",
              'connect-src': "'self' wss://s-dal5-nss-28.firebaseio.com",
              'img-src': "'self' http://octodex.github.com https://octodex.github.com https://referrer.disqus.com",
              'report-uri':"'localhost'",
              'style-src':"'self'   'unsafe-inline'  http://fonts.googleapis.com http://a.disquscdn.com",
              'frame-src': "http://disqus.com"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      disqus: {
        shortname: 'dreamalittledreamwithme'
      }
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
