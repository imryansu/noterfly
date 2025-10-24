/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  jsxSingleQuote: true,
  overrides: [
    {
      files: '*.json',
      options: {
        plugins: ['prettier-plugin-sort-json'],
      },
    },
    {
      files: 'package.json',
      options: {
        plugins: ['prettier-plugin-packagejson'],
      },
    },
  ],
  plugins: ['prettier-plugin-sh'],
  printWidth: 96,
  proseWrap: 'never',
  quoteProps: 'consistent',
  semi: false,
  singleQuote: true,
}

export default config
