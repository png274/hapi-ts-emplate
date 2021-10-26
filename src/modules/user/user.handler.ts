import { Boom } from "@hapi/boom";
import { ResponseToolkit, Request } from "@hapi/hapi";
import { generateToken } from "utils/helper";
import Users from "../../../mock/user";
import { iLoginPayload } from "./interfaces";

export const login = async (req: Request, h: ResponseToolkit) => {
	try {
		const { username, password } = req.payload as iLoginPayload;
		const foundUser = Users.find(
			(i) => i.username === username && i.password === password,
		);
		console.log({ foundUser });
		if (!foundUser) {
			throw new Boom("Invalid username or password", {
				statusCode: 401,
			});
		}
		const token = await generateToken(foundUser);
		return { token };
	} catch (error) {
		console.log(error);
		return error;
	}
};

export const getUser = (req: Request, h: ResponseToolkit) => {
	try {
		return { message: "GET USER" };
	} catch (error) {
		return error;
	}
};
