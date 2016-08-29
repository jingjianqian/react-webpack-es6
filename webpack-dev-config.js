var path = require('path');
var webpack = require('webpack');

console.log('aaa');
module.exports = {
	//入口
	entry:{
		vender:['react','react-dom'],
		index:'./src/page/index.js',
		second:'./src/page/second.js',
		three:'./src/page/three.js'
	},
	//输出
	output:{
		path: path.join(__dirname, "js"),
		filename: "[name].js"
	},
	//loader
	module:{
		loaders: [{
	        test: /\.jsx?$/,
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
            names: ["common","vender"],
            minChunks: 2
        })
    ]
}