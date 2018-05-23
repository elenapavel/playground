const withCSS = require("@zeit/next-css");
const isProduction = process.env.NODE_ENV === "production";
const publicURL = isProduction ? "https://elenapavel.github.io/playground" : "";

module.exports = withCSS({
	cssModules: true,
	cssLoaderOptions: {
		importLoaders: 1,
		localIdentName: "[local]_[hash:base64:5]",
	},
	assetPrefix: publicURL,
	exportPathMap: () => ({
		"/": { page: "/" },
		"/architecture": { page: "/architecture" },
		"/books": { page: "/books" },
		"/universe-facts": { page: "/universe-facts" },
		"/plants": { page: "/plants" },
		"/responsive-layout": { page: "/responsive-layout" },
	}),
	webpack(config, options) {
		config.resolve.alias["~"] = config.context;
		config.output.publicPath = publicURL;

		return config;
	},
});
