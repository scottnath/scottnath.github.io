const context = {
  class: 'resume__section resume__experience',
  title: {
    class: 'resume__section__title',
    content: 'Employment History'
  },
  experiences: [
    {
      class: 'resume__experience__employer',
      header: {
        class: 'resume__section__subtitle resume__experience__title',
        name: {
          class: 'business',
          content: 'IBM',
        },
        position: {
          class: 'job-title',
          content: 'Senior Front End Developer',
        },
      },
      dates: {
        class: 'date resume__experience__date',
        content: '2016 &#8211; Present',
      },
      summary: {
        class: 'summary resume__experience__summary',
        content: '<p>Working in the Watson organization within IBM. Spent 2016 building an open-source content management system&#58; <a href="https://github.com/punchcard-cms/punchcard">Punchcard CMS</a>.</p>',
      },
    },
    {
      class: 'resume__experience__employer',
      header: {
        class: 'resume__section__subtitle resume__experience__title',
        name: {
          class: 'business',
          content: 'NBCUniversal',
        },
        position: {
          class: 'job-title',
          content: 'Software Architect',
        },
      },
      dates: {
        class: 'date resume__experience__date',
        content: '2014 &#8211; 2015',
      },
      summary: {
        class: 'summary resume__experience__summary',
        content: 'I work for an internal agency at NBCUniversal that provides technology services to the company\'s many networks, studios, and brands.</p><p>As Software Architect, I\'ve planned and built an open source, NodeJS-based Pattern Library System (<a href="http://pattern-library.github.io">pattern-library.github.io</a>), which creates stackable and reusable component libraries, bundled with a GulpJS-based development environment. It was a cool thing.',
      },
    },
    {
      class: 'resume__experience__employer',
      header: {
        class: 'resume__section__subtitle resume__experience__title',
        name: {
          class: 'business',
          content: 'NBCUniversal',
        },
        position: {
          class: 'job-title',
          content: 'Senior Development Lead',
        },
      },
      dates: {
        class: 'date resume__experience__date',
        content: '2009 &#8211; 2014',
      },
      summary: {
        class: 'summary resume__experience__summary',
        content: "During my years as Senior Dev Lead, I spearheaded NBC's Wordpress program, NBCUPress. We built and maintained a re-usable, share-able Wordpress deployment system to keep site styling and building away from CMS maintenance. Then we built a gazillion sites on it.",
      },
    },
    {
      class: 'resume__experience__employer',
      header: {
        class: 'resume__section__subtitle resume__experience__title',
        name: {
          class: 'business',
          content: 'NBCUniversal',
        },
        position: {
          class: 'job-title',
          content: 'Senior Site Developer',
        },
      },
      dates: {
        class: 'date resume__experience__date',
        content: '2006 &#8211; 2009',
      },
      summary:{
        class: 'summary resume__experience__summary',
        content: 'These four years I was bangin out sites, creating reusable HTML/Sass patterns, and meticulously documenting our development processes.',
      },
    },
    {
      class: 'resume__experience__employer',
      header: {
        class: 'resume__section__subtitle resume__experience__title',
        name: {
          class: 'business',
          content: 'Atmosphere BBDO',
        },
        position: {
          class: 'job-title',
          content: 'Freelance HTML/CSS Developer',
        },
      },
      dates: {
        class: 'date resume__experience__date',
        content: '2006',
      },
      summary:{
        class: 'summary resume__experience__summary',
        content: 'Built out HTML/CSS structures for multiple campaigns. Clients included Emirates Airlines and the NFL',
      },
    },
    {
      class: 'resume__experience__employer',
      header: {
        class: 'resume__section__subtitle resume__experience__title',
        name: {
          class: 'business',
          content: 'AKQA',
        },
        position: {
          class: 'job-title',
          content: 'Freelance HTML/CSS Developer',
        },
      },
      dates: {
        class: 'date resume__experience__date',
        content: '2006',
      },
      summary:{
        class: 'summary resume__experience__summary',
        content: 'Built out HTML/CSS structures for multiple campaigns, primarily Coca-Cola.'
      },
    },
    {
      class: 'resume__experience__employer',
      header: {
        class: 'resume__section__subtitle resume__experience__title',
        name: {
          class: 'business',
          content: 'Theatre Puget Sound',
        },
        position: {
          class: 'job-title',
          content: 'Website Architect',
        },
      },
      dates: {
        class: 'date resume__experience__date',
        content: '2000 &#8211; 2008',
      },
      summary: {
        class: 'summary resume__experience__summary',
        content: '<p>Creating and maintaining entire online web presence from interface design to back-end MySQL database development, for a large member-driven non-profit organization.',
      }
    }
  ]
};

/**
 * @type {global-typedefs.componentConfig}
 */
const component = {
  name: 'resume-experience',
  label: 'Resume Experience',
  context,
};

module.exports = component;
module.exports.context = context;
