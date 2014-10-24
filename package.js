Package.describe({
  name: 'thepumpinglemma:ssl-root-cas',
  summary: 'Wrapper for the ssl-root-cas package in NPM.',
  version: '1.0.0',
  git: 'https://github.com/ThePumpingLemma/meteor-ssl-root-cas.git'
});

Npm.depends({
  'ssl-root-cas': '1.1.7'
});

Package.onUse(function(api) {
  api.export('SslRootCAs', ['server']);
  api.addFiles('thepumpinglemma:ssl-root-cas.js', ['server']);
});

