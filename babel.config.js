module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@Navigation': './src/navigation',
          '@Components': './src/components',
          '@database': './src/database',
          '@models': './src/database/model',
          '@Screens': './src/screens',
          '@Assets': './assets',
          '@lib': './src/lib',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    'react-native-reanimated/plugin',
  ],
};
