import { ServerRoute } from "@hapi/hapi";
import Joi from "joi";
import * as UserHandler from "./user.handler";

const UserRoute: Array<ServerRoute> = [
	{
		path: "/user",
		method: "GET",
		options: {
			handler: UserHandler.getUser,
			tags: ["api", "user"], // ADD THIS TAG
		},
	},
	{
		path: "/login",
		method: "POST",
		options: {
			handler: UserHandler.login,
			auth: false,
			description: "Login",
			notes: "Returns a json web token by the username and password passed",
			validate: {
				payload: Joi.object({
					username: Joi.string().required(),
					password: Joi.string().required(),
				}),
			},
			tags: ["api", "login"], // ADD THIS TAG
			plugins: {
				"hapi-swagger": {
					responses: {
						"200": {
							description: "Login successed.",
							schema: Joi.object({
								token: "Token",
							}),
						},
						"401": {
							description: "Login failed.",
						},
					},
				},
			},
		},
	},
];

export default UserRoute;
