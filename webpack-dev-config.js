var path = require('path');
var webpack = require('webpack');
module.exports = {
	//入口
	entry:{
		vendor:['react','react-dom'],
		index:'./src/page/index.js',
		second:'./src/page/second.js',
		three:'./src/page/three.js',
		test:'./src/page/test.js'
	},
	//输出
	output:{
		path: path.join(__dirname, "js"),
		filename: "[name].js"
	},
	//loader
	module:{
		loaders: [{
	        test: /\.js?$/,
	        exclude: /(node_modules|dist)/,
	        loader: 'babel',
	        query: {
	          presets: ['react', 'es2015']
	        }
      	}]
	},
	//plugins
	plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            // The order of this array matters
            names: ["vendor"],
			filename:'react-all.js',
            minChunks: 2
        })
    ],
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
}