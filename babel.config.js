module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          alias: {
            "@Navigation": "./src/navigation",
            "@Components": "./src/components",
            "@Context": "./src/contexts",
            "@Screens": "./src/screens",
            // "@Stores": "./src/stores",
            "@Assets": "./assets",
          },
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      ],
    ],
  };
};
