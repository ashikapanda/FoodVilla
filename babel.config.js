module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }], // to use imports in test file
    ["@babel/preset-react", { runtime: "automatic" }], // to make jest understand jsx written inside test file
  ],
};
