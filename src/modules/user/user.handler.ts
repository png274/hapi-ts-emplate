import { ResponseToolkit, Request } from "@hapi/hapi";

export const login = (req: Request, h: ResponseToolkit) => {
	try {
		return { message: "GET USER" };
	} catch (error) {
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
