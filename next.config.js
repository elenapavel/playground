const withCSS = require("@zeit/next-css");
const isProduction = process.env.NODE_ENV === "production";

const repository = "playground";
const publicURL = isProduction
	? `https://elenapavel.github.io/${repository}`
	: "";
const staticURL = isProduction ? `${publicURL}/static` : "/static";

const routes = {
	"/": { page: "/" },
	"/books": { page: "/books" },
	"/plants": { page: "/plants" },
	"/architecture": { page: "/architecture" },
	"/calendar": { page: "/calendar" },
	"/universe-facts": { page: "/universe-facts" },
	"/responsive-layout": { page: "/react-wireframe" },
};

const config = {
	assetPrefix: publicURL,
	publicRuntimeConfig: {
		publicURL,
		staticURL,
	},
	exportPathMap: () => routes,
	webpack(config, options) {
		config.resolve.alias["~"] = config.context;
		config.output.publicPath = isProduction ? `/${repository}` : "/";

		return config;
	},
};

const cssModules = {
	cssModules: true,
	cssLoaderOptions: {
		importLoaders: 1,
		localIdentName: "[local]_[hash:base64:5]",
	},
};

module.exports = withCSS({
	...cssModules,
	...config,
});
