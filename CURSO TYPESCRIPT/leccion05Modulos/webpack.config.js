const path = require("path");

module.exports = {
	entry: "./src/modulos.ts",
	output: {
		filename: "modulos.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	devServer: {
		static: "./dist",
		hot: true,
		open: true,
	},
};
