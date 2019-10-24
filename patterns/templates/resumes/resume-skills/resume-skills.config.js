const context = {
  skillsets: {
    class: 'resume-skills',
    sets: [
      {
        title: {
          class: null,
          content: null
        },
        subsets: [
          {
            class: 'skills skills--recently',
            title: {
              class: null,
              content: 'Daily development with'
            },
            skills: [
              'Node.js &amp; NPM',
              'HTML5',
              'CSS3',
              'Sass/SCSS',
              'Javascript (+ES6)',
              'Javascript Unit Testing',
              'git/GitHub',
              'Scrum/agile development',
              'Pattern Lab'
            ]
          },
          {
            class: 'skills skills--recently',
            title: {
              class: null,
              title: 'Recent experience with'
            },
            skills: [
              'Compass',
              'Wordpress development',
              'PHP',
              'AngularJS',
              'ExpressJS',
              'Polymer',
              'Web Components',
              'Raspi'
            ]
          }
        ]
      }
    ],
  }
}

/**
 * @type {global-typedefs.componentConfig}
 */
const component = {
  name: 'resume-skills',
  description: 'Resume section for listing out skills.',
  context,
};

module.exports = component;
module.exports.context = context;
