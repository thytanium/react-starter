module.exports = {
  presets: [
    ["@babel/preset-env", { useBuiltIns: "entry", corejs: "3.19" }],
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};
