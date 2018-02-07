var path = require('path')
var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
	entry : {
		main : path.resolve(__dirname , 'src/main.js')
	},
	output : {
		path : path.resolve(__dirname , 'dist'),
		filename : '[name].js'
		// publicPath : 'temp/'
  },
  resolve : {
    extensions : ['.js' , '.jsx' , '.json'],
    alias : {
      'src' : path.resolve(__dirname , 'src')
    }
  } ,
	module:{
		rules : [
			{ 
				test : /\.(js|jsx)$/ , 
				exclude : /node_modules/ , 
				use : 'babel-loader' 
			},
			{ 
				test : /\.(css|scss)$/ , 
				include : /src/ , 
				loaders : ['style-loader', 'css-loader' , 'sass-loader']
			},
			{ 
				test : /\.(png|svg|gif|jpe?g)(\?.*)?$/ , 
				include : /src/ , 
				use : {
					loader : 'url-loader',
					options : { limit : 10000 }
				}
			},
			{ test : /\.(woff2?|eot|otf|ttf)(\?.*)?$/ , include : /src/ ,
				use : {
					loader : 'url-loader',
					options : { limit : 10000 }
				}
			}
		]
  },
  plugins : [
		new webpack.DefinePlugin({
			"process.env.NODE_ENV" : '"dev"'
		}),
		new webpack.HotModuleReplacementPlugin(), // 热加载
		new webpack.NamedModulesPlugin(), // 控制台显示正确的文件名
		new webpack.NoEmitOnErrorsPlugin(), // 编译出错的时候 跳过输出阶段，确保输出资源不会包含错误
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			favicon: 'favicon.ico',
			inject: true
		}),
	],
	devtool : 'cheap-module-eval-source-map' ,
	devServer : {
		contentBase : './' , // 不配置静态资源目录 转而使用新的插件 CopyWebpackPlugin
		compress : true ,
		host : 'localhost',
		port : 8887,
		inline : true ,
		hotOnly : true,
		open : true ,
		proxy : {
			"^/api" : {
				target : "http://api.lanhanba.net" ,
				changeorigin : true ,
				pathRewrite : {
					"^/api" : "/api"
				}
			}	
		}
	}
}
