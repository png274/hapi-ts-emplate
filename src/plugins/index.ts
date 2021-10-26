import { Server } from "@hapi/hapi";
import jwt from "./jwt";
import swagger from "./swagger";

export default async (server: Server) => {
	await server.register(jwt);
	await server.register(swagger, {
		routes: {
			prefix: "/api",
		},
	});
};
