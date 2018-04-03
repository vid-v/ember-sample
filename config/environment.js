'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'project',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.APP.LOG_RESOLVER = true;
  ENV.APP.LOG_ACTIVE_GENERATION = true;
   ENV.APP.LOG_TRANSITIONS = true;
  ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
  ENV.APP.LOG_VIEW_LOOKUPS = true;
  }


  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};

var ENV = {
  firebase: {
    apiKey: 'AIzaSyAHGBezSkDG_RrYS1yFZ45qmk8wmcoGh6M',
    authDomain: 'disease-d3b61.firebaseapp.com',
    databaseURL: 'https://disease-d3b61.firebaseio.com',
    storageBucket: '',
  }
}

var ENV = {
  torii: {
    sessionServiceName: 'session'
  }
  }

ENV.contentSecurityPolicy = {
  'default-src': "'none'",
  'script-src': "'self' 'unsafe-eval' *.googleapis.com maps.gstatic.com",
  'font-src': "'self' fonts.gstatic.com",
  'connect-src': "'self' maps.gstatic.com",
  'img-src': "'self' *.googleapis.com maps.gstatic.com csi.gstatic.com",
  'style-src': "'self' 'unsafe-inline' fonts.googleapis.com maps.gstatic.com"
};

ENV.googleMap = {
  libraries: ['drawing']
};

ENV.googleMap = {
  libraries: ['visualization']
};

ENV.googleMap = {
  // your configuration goes in here
  libraries: ['places', 'geometry'], // milage varies based on g-maps supported features
  version: '3', // not recommended
  apiKey: 'your-unique-google-map-api-key',
  lazyLoad: false, // default
  language: 'ja', // optional
  region: 'JA' // optional
}
