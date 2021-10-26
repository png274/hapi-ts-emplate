import { ServerRoute } from "@hapi/hapi";
import * as UserHandler from "./user/user.handler";

const AuthRoute: [ServerRoute] = [
	{
		path: "/login",
		method: "POST",
		handler: UserHandler.getUser,
		options: {
			auth: false,
		},
	},
];

export default AuthRoute;
