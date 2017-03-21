let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

let ROOT_PATH = path.resolve(__dirname);
let ModuleConfig = {};

const svgDirs = [
	require.resolve('antd-mobile').replace(/warn\.js$/, ''), // 1. 属于 antd-mobile 内置 svg 文件
	path.resolve(__dirname, 'src/images'), // 2. 自己私人的 svg 存放目录
];

//ModuleConfig.devtool = false; //'eval'; //false;

ModuleConfig.entry = require('./webpack.config/module.config.js').entry;

ModuleConfig.output = {
	path: path.join(ROOT_PATH, '/dist'),
	publicPath: '',
	filename: '[hash].[name].js'
};

ModuleConfig.plugins = require('./webpack.config/module.config.js').plugins;


ModuleConfig.resolve = {
	modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
	extensions: ['', '.web.js', '.js', '.json'],
};


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
		test: /\.(svg)$/i,
		loader: 'svg-sprite',
		include: svgDirs, // 把 svgDirs 路径下的所有 svg 文件交给 svg-sprite-loader 插件处理
	}, {
		test: /\.css$/,
		loader: ExtractTextPlugin.extract("style-loader", "css-loader")
	}, {
		test: /\.less$/,
		loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
	}]

};

ModuleConfig.devServer = require('./webpack.config/devServer.config.js');

module.exports = ModuleConfig;