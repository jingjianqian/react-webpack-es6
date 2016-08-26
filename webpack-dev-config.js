var path = require('path');
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
console.log('aaaa');
module.exports = {
	//插件
	plugins: [commonsPlugin],
	//入口
	entry:[
		'./src/component/liveRoom/roomConfig/liveRoomCfg.js'
	],
	//输出
	output:{
		path:'./dist/component/liveRoom/roomConfig/',
		filename:'[name].js'
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
	}
}