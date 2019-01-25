const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");

// process.env.NODE_ENV = process.env.NODE_ENV || "development";
// if (process.env.NODE_ENV === "test") {
// } else if (process.env.NODE_ENV === "development") {
// }

module.exports = env => {
	isProduction = env === "production";
	return {
		entry: ["babel-polyfill", "./src/index.js"],
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
				},
				{
					test: /\.(png|jpg|gif)$/,
					use: [
						{
							loader: "file-loader",
							options: {
								name: "[name][hash].[ext]"
							}
						}
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
			}),
			new CopyWebpackPlugin([{ from: "public/images", to: "images" }])
		],
		devtool: isProduction ? "source-map" : "inline-source-map",
		devServer: {
			contentBase: path.join(__dirname, "dist"),
			historyApiFallback: true
		}
	};
};
