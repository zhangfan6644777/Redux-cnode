let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

let ROOT_PATH = path.resolve(__dirname);
let ModuleConfig = {};

// ModuleConfig.devtool = false; //'eval'; //false;

ModuleConfig.entry = require('./webpack.config/module.config.js').entry;

ModuleConfig.output = {
	path: path.join(ROOT_PATH, '/dist'),
	publicPath: '',
	filename: '[hash].[name].js'
};

ModuleConfig.plugins = require('./webpack.config/plugins.config.js').plugins;
ModuleConfig.plugins.push(new webpack.DefinePlugin({
	'process.env': {
		NODE_ENV: JSON.stringify('production')
	}
}));

ModuleConfig.resolve = {};


ModuleConfig.module = {
	loaders: [{
		test: /\.js$/,
		exclude: /node_modules/,
		loader: 'babel',
		// loaders: ['react-hot', 'babel'],
		query: {
			presets: ['react', 'es2015']
		}
	}, {
		test: /\.css$/,
		loader: ExtractTextPlugin.extract('style', 'css')
	}, {
		test: /\.less$/,
		loader: ExtractTextPlugin.extract('style', 'css', 'less')
	}, {
		test: /\.(png|jpg|jpeg|gif|bmp)$/,
		loader: 'url?limit=8192' //小于8K直接转为base64
	}, {
		test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
		loader: "url-loader?limit=10000&minetype=application/font-woff"
	}, {
		test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
		loader: "file-loader"
	}]

};

ModuleConfig.devServer = require('./webpack.config/devServer.config.js');

module.exports = ModuleConfig;