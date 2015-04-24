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
              'script-src': "'self' 'unsafe-inline' 'unsafe-eval' http://dreamalittledreamwithme.disqus.com/count.js?_=1429903254544 https://a.disquscdn.com/embed.js http://dreamalittledreamwithme.disqus.com/count-data.js?1=Hurr&1=Neew&1=adsfas&1=asdf",
              'font-src': "'self' http://fonts.gstatic.com/s/abel/v6/brdGGFwqYJxjg2CD1E9o7g.woff2 http://fonts.gstatic.com/s/indieflower/v7/10JVD_humAd5zP2yrFqw6ugdm0LZdjqr5-oayXSOefg.woff2 http://fonts.gstatic.com/s/monofett/v6/B5kbLBv_e4xu3btOMFc8LfesZW2xOQ-xsNqO47m55DA.woff2",
              'connect-src': "'self' wss://s-dal5-nss-34.firebaseio.com/.ws?v=5&ns=my-dev-blog",
              'img-src': "'self' https://referrer.disqus.com/juggler/stat.gif?event=lounge.loading.view http://a.disquscdn.com/next/embed/assets/img/loader-bg.83a51a23e5c47337475113016b8fb0de.png",
              'report-uri':"'localhost'",
              'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com/css?family=Indie+Flower http://fonts.googleapis.com/css?family=Abel http://fonts.googleapis.com/css?family=Monofett http://a.disquscdn.com/next/embed/styles/loading.aaa873ed4a78106f29994d34d7eabec1.css",
              'frame-src': " https://disqus.com/embed/comments/?base=default&version=f46e9ff9693ef6bae3d…th%20me...&t_t=Dream%20a%20little%20dream%20with%20me...&t_c&s_o=default#2 https://disqus.com/home/preload?utm_source=disqus_embed#5"
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
