module.exports = {
  /**
   * We need to explicitly enable all prettier plugins, as to ensure
   * prettier-plugin-tailwindcss get loaded the last.
   */
  plugins: [
    'prettier-plugin-css-order',
    'prettier-plugin-jsdoc',
    'prettier-plugin-organize-attributes',
    'prettier-plugin-organize-imports',
    'prettier-plugin-style-order',
    'prettier-plugin-tailwindcss',
  ],
  pluginSearchDirs: false,
  tailwindConfig: './tailwind.config.js',

  // Config
  endOfLine: 'auto',
  singleQuote: true,
};
