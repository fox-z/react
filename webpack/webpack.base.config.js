var path = require('path')

module.exports = {
	entry : {
		entry : path.resolve(__dirname , '../src/main.js')
	},
	output : {
		path : path.resolve(__dirname , '../dist'),
		filename : '[name].js',
    chunkFilename: "[name]"
	},
	resolve: {
		extensions: ['.jsx', '.js', '.json'],
		alias: {

		}
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
	}
}
