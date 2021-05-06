const plugins = ["babel-plugin-styled-components"];

module.exports = {
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
  plugins: plugins,
};
