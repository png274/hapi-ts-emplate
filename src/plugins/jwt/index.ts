import { Server } from "@hapi/hapi";
import HapiAuthJwt from "hapi-auth-jwt2";
import { pick } from "lodash";

import { jwtKey } from "config";

const register = async (server: Server) => {
	await server.register(HapiAuthJwt);
	server.auth.strategy("jwt", "jwt", {
		key: jwtKey,
		validate: async function (decoded: never) {
			return { isValid: true, credentials: pick(decoded, ["id", "email"]) };
		},
	});
	server.auth.default("jwt");
};

export default {
	name: "JWT Authentication",
	version: "1.0.0",
	register,
};
