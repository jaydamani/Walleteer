module.exports = {
  overrides: [
    {
      files: ['*.js'],
      // parser: '@babel/eslint-parser',
    },
  ],
  rules: {
    'no-undef': 'off',
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 'warn',
  },
  extends: '@react-native',
};
