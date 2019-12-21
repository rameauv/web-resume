
import * as express from "express";
import * as jwt from "jsonwebtoken";
import { IJwtService } from "../Services/IJwtService";
import { InvalidTokenError } from "../Services/InvalidTokenError";

export const AsyncCheckToken = (jwtService: IJwtService) => {
    return async (req: any, res: any, next: any) => {
        try {
            let token = req.headers["x-access-token"]
                || req.headers.authorization; // Express headers are auto converted to lowercase
            if (token && token.startsWith("Bearer ")) {
                // Remove Bearer from string
                token = token.slice(7, token.length);
            }

            if (token) {
                try {
                    const decoded = await jwtService.AsyncCheckToken(token);
                    req.decoded = decoded;
                    next();
                } catch (e) {
                    if (!(e instanceof InvalidTokenError)) {
                        throw e;
                    }
                    return res.json(
                        {
                            error: {
                                code: 401,
                                location: "Authorization",
                                locationType: "header",
                                message: "Invalid token",
                                type: "invalidToken"
                            }
                        }
                    );
                }
            } else {
                res.status(401);
                return res.json({
                    error: {
                        code: 401,
                        location: "Authorization",
                        locationType: "header",
                        message: "missing parameter",
                        type: "missingParameter"
                    }
                });
            }
        } catch (e) {
            next(e);
        }
    };
}
