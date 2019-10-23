const path = require('path');
const webpack = require('webpack');
const nodeSass = require('node-sass');

module.exports = {
	mode: 'development',
	entry: {
		nadam: './src/index.ts',
		bootstrap: './src/bootstrap.js'
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test:/\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}		
		]
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ]
	},
	// output: {
	// 	filename: '[name].bundle.js',
	// 	chunkFilename: '[name].chunk.js',
	// 	path: path.resolve(__dirname, './dist')
	//   },
	// plugins: [
	// 	new webpack.ProvidePlugin({
	// 		$: 'jquery',
	// 		jQuery: 'jquery',
	// 		'window.jQuery': 'jquery',
	// 		Masonry: 'masonry-layout',
	// 		jQueryBridget: 'jquery-bridget'
	// 	})
	// ],
};
