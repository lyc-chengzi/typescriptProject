var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

const app_dir = path.join(__dirname, './src') ;
const node_modules_dir = path.join(__dirname, 'node_modules');

module.exports = {
    entry: {
        app: ["./src/index.js"]
    },
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: "bundle_[name]_[hash].js"
    },
    module: {        
        loaders: [
            {
                test: /\.jade$/,
                loaders: ['jade'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loaders: ['style','css'],
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader?presets=es2015']
            },            
            {
            	test: /\.(png|jpg|gif|svg)$/,
            	exclude: /node_modules/,
            	loader: "url?limit=8092"
            },
	        {
		        // required for bootstrap icons
		        test: /\.(woff|woff2)(\?(.*))?$/,
		        loader: 'url?prefix=factorynts/&limit=5000&mimetype=application/font-woff'
	        },
	        {
		        test: /\.ttf(\?(.*))?$/,
		        loader: 'file?prefix=fonts/'
	        },
	        {
		        test: /\.eot(\?(.*))?$/,
		        loader: 'file?prefix=fonts/'
	        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: 'body',
            hash: false,
            inject: true,
            compile: true,
            favicon: false,
            minify: false,
            cache: true,
            showErrors: true
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ],
    resolve: {
        //查找module的话从这里开始查找
        root: 'D:/project/my/typescriptProject/src', //绝对路径
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['', '.js', '.json', '.scss'],
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {
            AppStore : 'js/stores/AppStores.js',//后续直接 require('AppStore') 即可
            ActionType : 'js/actions/ActionType.js',
            AppAction : 'js/actions/AppAction.js'
        }
    },
    devtool: 'source-map'
};
