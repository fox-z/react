var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var webpackBaseConfig = require('./webpack.base.config')
var htmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
	entry : {
		entry : path.resolve(__dirname , 'src/main.js')
	},
	output : {
		path : path.resolve(__dirname , 'dist'),
		filename : '[name].js',
		publicPath : 'temp/'
	},
	module:{
		rules : [
			{ test : /\.(js|jsx)$/ , exclude : /node_modules/ , use : 'babel-loader' },
			{ test : /\.(css|scss)$/ , include : /src/ , loaders : ['style-loader', 'css-loader' , 'scss-loader'] },
			{ test : /\.(png|svg|gif|jpe?g)(\?.*)?$/ , include : /src/ , loader : 'url-loader',
				options : { limit : 10000 }
			},
			{ test : /\.(woff2?|eot|otf|ttf)(\?.*)?$/ , include : /src/ ,
				loader : 'url-loader',
				options : { limit : 10000 }
			}
		]
  },
  plugins : [
		new webpack.DefinePlugin({
			"process.env.NODE_ENV" : "dev"
		}),
		new webpack.HotModuleReplacementPlugin(), // 热加载
		new webpack.NamedModulesPlugin(), // 控制台显示正确的文件名
		new webpack.NoEmitOnErrorsPlugin(), // 编译出错的时候 跳过输出阶段，确保输出资源不会包含错误
		new htmlWebpackPlugin({
			filename : 'index.html' , // 用来输出文件名
			template : path.resolve(__dirname,'index.html') , // 模板文件路劲
			favicon :  path.resolve(__dirname, 'favicon.ico')  , // 小图标
			inject : true,  // 默认注入所有的资源到 body 中   body || head
			title : 'gourd | 个人网站', // 网站标题
			// metaKeywords : '张梦辉,vue,vue-cli,html5,css3,javascript,react,react-native,weex,node,webpack,ECMAscript6,jQuery,zepto',
			// metaDescription : '张梦辉,vue,vue-cli,html5,css3,javascript,react,react-native,weex,node,webpack,ECMAscript6,jQuery,zepto'
		})
	],
	devServer : {
		contentBase : path.resolve(__dirname , './dist') , // 不配置静态资源目录 转而使用新的插件 CopyWebpackPlugin
		compress : true,
		host : 'localhost',
		port : 6666
	}
}
