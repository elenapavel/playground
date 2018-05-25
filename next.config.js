const withCSS = require("@zeit/next-css");
const isProduction = process.env.NODE_ENV === "production";

const repository = "playground";
const publicURL = isProduction
	? `https://elenapavel.github.io/${repository}`
	: "";
const staticURL = isProduction ? `${publicURL}/static` : "/static";

const config = {
	assetPrefix: publicURL,
	publicRuntimeConfig: {
		publicURL,
		staticURL
	},
	exportPathMap: () => ({
		"/": { page: "/" },
		"/architecture": { page: "/architecture" },
		"/books": { page: "/books" },
		"/universe-facts": { page: "/universe-facts" },
		"/plants": { page: "/plants" },
		"/responsive-layout": { page: "/responsive-layout" },
		"/grid": { page: "/grid" }
	}),
	webpack(config, options) {
		config.resolve.alias["~"] = config.context;
		config.output.publicPath = isProduction ? `/${repository}` : "/";

		return config;
	}
};

const cssModules = {
	cssModules: true,
	cssLoaderOptions: {
		importLoaders: 1,
		localIdentName: "[local]_[hash:base64:5]"
	}
};

module.exports = withCSS({
	...cssModules,
	...config
});
