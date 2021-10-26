import Hapi from "@hapi/hapi";

import UserRoute from "modules/user/user.route";
import jwtAuth from "plugins/jwt";

const init = async () => {
	const server = Hapi.server({
		port: 3000,
		host: "localhost",
	});

	server.realm.modifiers.route.prefix = "/api";
	server.route(UserRoute);

	await server.register(jwtAuth);

	await server.start();
	console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
	console.log(err);
	process.exit(1);
});

init();
