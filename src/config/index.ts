import dotenv from "dotenv";
import { Algorithm } from "jsonwebtoken";

dotenv.config();

export const jwtKey = process.env.JWT_KEY;
export const jwtTTL = process.env.JWT_TTL;
export const jwtAlgo = (process.env.JWT_ALGO as Algorithm) ?? "HS256";
