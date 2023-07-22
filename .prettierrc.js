module.exports = {
  singleQuote: true,
  arrowParens: 'always',
  trailingComma: 'all',
  endOfLine: 'lf',
  printWidth: 120,
  bracketSpacing: true,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleAttributePerLine: true,
  plugins: ['prettier-plugin-organize-imports'],
  overrides: [{ files: '*.svg', options: { parser: 'html' } }],
};
