import { jwtAlgo, jwtKey, jwtTTL } from "config";
import jwt from "jsonwebtoken";
import { pick } from "lodash";
import { iTokenPayload } from "plugins/interface";

export const generateToken = (data: iTokenPayload) => {
	return new Promise((resolve, reject) => {
		jwt.sign(
			pick(data, ["id", "name"]),
			jwtKey,
			{ expiresIn: jwtTTL, algorithm: jwtAlgo },
			(err, token) => {
				if (err) {
					return reject(err);
				}
				resolve(token);
			},
		);
	});
};
