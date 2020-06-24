module.exports = {
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader' // translates CSS into CommonJS
        ]
      },
      {
        test: /\.tsx?$/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  }
};
