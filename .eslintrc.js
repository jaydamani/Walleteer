module.exports = {
  overrides: [
    {
      files: ['*.js'],
      // parser: '@babel/eslint-parser',
    },
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 'warn',
    curly: 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
  extends: '@react-native',
};
