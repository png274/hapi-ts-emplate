import Pack from "../../package.json";

const SwaggerOptions = {
	info: {
		title: "Api",
		description: "Api Documentation",
		version: Pack.version,
	},
	tags: [
		{
			name: "login",
			description: "Api login interface.",
		},
		{
			name: "user",
			description: "Api user interface.",
		},
	],
	grouping: "tags", // IMPORTANT, use this for simplification, by default it'll be grouping by path
	documentationPage: true,
	documentationPath: "/docs",
};

export default SwaggerOptions;
