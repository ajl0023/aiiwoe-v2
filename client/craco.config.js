const webpack = require("webpack");
module.exports = {
  plugins: [
    {
      plugin: require("craco-plugin-scoped-css"),
    },
  ],
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
          @import "src/styles/root.scss";
       
        `,
      },
    },
  },
  webpack: {
    plugins: {
      add: [
        new webpack.DefinePlugin({
          process: { env: {} },
        }),
      ],
    },
  },
};
