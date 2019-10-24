/**
 * Primary preview uses Watson Health css/js
 *
 * @type {Object}
 */
const primary = {
  name: 'default',
  label: 'Default',
};


const options = {
  variants: {
    primary,
  },
};

module.exports = {
  title: 'Preview',
  label: 'Preview',
  status: 'ready',
  hidden: true,
  variants: [primary],
};
