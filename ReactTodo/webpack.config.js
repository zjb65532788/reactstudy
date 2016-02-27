var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: {//entry 中的属性是与output中filename中的[name]相对应,如app对应app.js
		app: path.join(__dirname, 'src'),
		vendors: ['react','react-dom']
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js'
	},
	module: {
		loaders: [{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			}, {
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader'
			}, // use ! to chain loaders
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}, {
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8192'
			} // inline base64 URLs for <=8k images, direct URLs for the rest
		]
	},
	plugins: [
        // kills the compilation upon an error.
        // this keeps the outputed bundle **always** valid
        new webpack.NoErrorsPlugin(),
        //这个使用uglifyJs压缩你的js代码
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ]
};