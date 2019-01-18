const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => {
	isProduction = env === "production";
	return {
		entry: "./src/index.js",
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: "bundle.js"
		},
		module: {
			rules: [
				{
					loader: "babel-loader",
					test: /\.js$/,
					exclude: /node_modules/
				},
				{
					test: /\.s?css$/,
					use: [
						"style-loader",
						MiniCssExtractPlugin.loader,
						"css-loader",
						"sass-loader"
					]
				}
			]
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: "style.css"
			}),
			new HtmlWebpackPlugin({
				template: "./public/index.html",
				favicon: "./public/favicon.png"
			})
		],
		devtool: isProduction ? "source-map" : "inline-source-map",
		devServer: {
			historyApiFallback: true,
			contentBase: path.resolve(__dirname, "dist"),
			publicPath: "/dist/"
		}
	};
};
