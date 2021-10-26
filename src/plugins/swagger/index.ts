import { Server } from "@hapi/hapi";
import Inert from "@hapi/inert";
import Vision from "@hapi/vision";
import * as HapiSwagger from "hapi-swagger";

import SwaggerOptions from "config/swagger";

const register = async (server: Server) => {
	try {
		server.register([
			{ plugin: Inert },
			{ plugin: Vision },
			{
				plugin: HapiSwagger,
				options: SwaggerOptions,
			},
		]);
	} catch (err) {
		console.log(`Error registering swagger plugin: ${err}`);
	}
};

export default {
	register,
	name: "Swagger Documentation",
	version: "1.0.0",
};
