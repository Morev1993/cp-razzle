module.exports = {
  plugins: ['scss', 'svg-react-component'],
  modify: (config) => {
    delete config.externals;

    return config;
  },
};
