var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var webpackBaseConfig = require('./webpack.base.config')
var htmlWebpackPlugin = require('html-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = merge( webpackBaseConfig , {
	plugins : [
		new webpack.DefinePlugin({
			"process.env.NODE_ENV" : "'dev'"
		}),
		new webpack.HotModuleReplacementPlugin(), // 热加载
		new webpack.NamedModulesPlugin(), // 控制台显示正确的文件名
		new webpack.NoEmitOnErrorsPlugin(), // 编译出错的时候 跳过输出阶段，确保输出资源不会包含错误
        new htmlWebpackPlugin({
            template: 'index.html'
        }),
        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        }),
	],
	devServer : {
		compress : true,
        proxy: {
            // 凡是 `/api` 开头的 http 请求，都会被代理到 localhost:3000 上，由 koa 提供 mock 数据。
            // koa 代码在 ./mock 目录中，启动命令为 npm run mock
            '/api': {
                target: 'http://localhost:3000',
                secure: false
            }
        },
        contentBase: "../dist", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true, //实时刷新
        hot: true  // 使用热加载插件 HotModuleReplacementPlugin
	}
})
