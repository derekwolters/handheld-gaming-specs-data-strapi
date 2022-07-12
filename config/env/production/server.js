module.exports = ({ env }) => ({
  url: env('APP_URL'),
  proxy: true,
  app: {
    keys: env.array('APP_KEYS', ['6pkrqndy5clz1xoi', 'vhb9cqunefgji6yx'])
  }
});