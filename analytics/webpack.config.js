const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  devtool: 'source-map',
  output: {
    uniqueName: 'analytics',
    publicPath: 'auto',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devServer: {
    port: 3004,
    host: '0.0.0.0',
    allowedHosts: 'all',
    historyApiFallback: true,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'analytics',
      filename: 'remoteEntry.js',
      remotes: {
        users: 'users@http://localhost:3001/remoteEntry.js',
        orders: 'orders@http://localhost:3002/remoteEntry.js',
      },
      exposes: {
        './AnalyticsApp': './src/mount',
        './AnalyticsRevenueChart': './src/mountRevenueChart',
        './AnalyticsUserMetrics': './src/mountUserMetrics',
        './AnalyticsRealtimeWidget': './src/mountRealtimeWidget',
      },
      shared: {
        '@angular/core': { singleton: true, requiredVersion: deps['@angular/core'] },
        '@angular/common': { singleton: true, requiredVersion: deps['@angular/common'] },
        '@angular/platform-browser': { singleton: true, requiredVersion: deps['@angular/platform-browser'] },
        rxjs: { singleton: true, requiredVersion: deps.rxjs },
        'zone.js': { singleton: true, requiredVersion: deps['zone.js'] },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
