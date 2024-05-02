const path = require('path');

const config = {
  entry: './src/components/Index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images/', // Carpeta de salida para las imágenes
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react','@babel/preset-env']
            }
        }
      }
      
    ]
  },
  mode: 'development'
};

module.exports = config;