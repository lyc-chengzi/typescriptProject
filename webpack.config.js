var webpack = require('webpack');
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
	              
    ],
    resolve: {
        
    },
    devtool: 'source-map'
};
