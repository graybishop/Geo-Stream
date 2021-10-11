module.exports = {
  purge: {
    enabled: true,
    content: [
      '*.js',
      '*.html',
      './*.js',
      './*.html',
    ]
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
