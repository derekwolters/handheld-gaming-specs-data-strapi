// Path: ./config/env/production/server.js`

module.exports = ({ env }) => ({
  url: env('APP_URL'),
});