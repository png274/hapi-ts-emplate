import { ServerRoute } from "@hapi/hapi";
import * as UserHandler from "./user.handler";

const UserRoute: Array<ServerRoute> = [
	{
		path: "/user",
		method: "GET",
		handler: UserHandler.getUser,
	},
	{
		path: "/login",
		method: "POST",
		handler: UserHandler.login,
		options: {
			auth: false,
		},
	},
];

export default UserRoute;
