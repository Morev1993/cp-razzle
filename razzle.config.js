module.exports = {
  plugins: ['scss'],
  modify: (config) => {
    delete config.externals;

    return config;
  },
};