var webpack = require('webpack');
var path = require('path');

module.exports = {
	
		context: __dirname,
		entry: {
			'main': './src/index.js'
		},
		devtool: 'source-map',
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: '[name].min.js',			
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: ['babel-loader']
				},
				{
					test: /\.css$/,
					use: ['style-loader',
						{
							loader: 'css-loader',
							options: { modules: true },
						}]
				}
			]
		},
		devServer: {
			contentBase: path.join(__dirname, "dist"),
			compress: true,
		},
		plugins: [	
			new webpack.NamedModulesPlugin(),		
			new webpack.optimize.CommonsChunkPlugin({
				name: ['main', 'vendor']
			})		
		]

}