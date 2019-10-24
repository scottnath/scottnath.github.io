const context = {
  title: 'Scott Nath',
  subtitle: 'Senior Front End Developer, IBM',
  email: 'online@scottnath.com',
  description: 'Coding-related things by Scott Nath. Many smarts, much wizard!\n',
  baseurl: '',
  url: 'http://scottnath.github.io',
  twitter_username: 'scottnath',
  github_username: 'scottnath',
  linkedin_username: 'scottnath',
  exclude: [
    'node_modules',
    'global-assets',
    'patterns',
    'styles',
    'lib',
    'config.yml'
  ],
  timezone: 'America/New_York',
  markdown: 'kramdown',
  kramdown: {
    input: 'GFM'
  }
}

/**
 * @type {global-typedefs.componentConfig}
 */
const component = {
  name: 'header',
  label: 'Header',
  context,
};

module.exports = component;
module.exports.context = context;
