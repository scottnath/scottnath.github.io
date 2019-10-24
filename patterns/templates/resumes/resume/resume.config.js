const resumeSkills = require('../resume-skills/resume-skills.config').context;
const context =  {
  class: 'resume',
  header:{
    class: 'resume__header',
    title:{
      class: 'title resume__title',
      content: 'Scott Nath'},
    subtitle: {
      class: 'subtitle resume__subtitle',
      content: 'Senior Front End Developer, IBM',
    },
    summary: {
      class: 'summary resume__summary',
      content: "Web architect, front-end developer, and team leader. 15 years of experience. I like clean &amp; testable code, clear documentation, and growth through challenged pull requests.",
    }
  },
  skills: {
    class: 'resume__section resume__tech-skills',
  },
  skillsets: resumeSkills.skillsets
};

/**
 * @type {global-typedefs.componentConfig}
 */
const component = {
  name: 'resume',
  label: 'Resume',
  context,
};

module.exports = component;
module.exports.context = context;
