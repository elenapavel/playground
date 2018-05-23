const isProduction = process.env.NODE_ENV === "production";
const publicURL = isProduction ? "https://elenapavel.github.io/playground" : "";

module.exports = {
	"process.env.BACKEND_URL": publicURL,
};
