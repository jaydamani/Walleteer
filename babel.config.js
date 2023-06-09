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
            "@Styles": "./src/styles",
            "@Assets": "./assets",
          },
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      ],
      ["@babel/plugin-proposal-decorators", { legacy: true }],
    ],
  };
};
