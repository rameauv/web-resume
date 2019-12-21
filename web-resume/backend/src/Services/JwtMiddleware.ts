
import * as express from "express";
import * as jwt from "jsonwebtoken";
import { JwtConfig } from "../config/jwt";

export class JwtFunctions { // TODO service
    public checkToken(req: any, res: any, next: any) {
        let token = req.headers["x-access-token"]
            || req.headers.authorization; // Express headers are auto converted to lowercase
        if (token && token.startsWith("Bearer ")) {
            // Remove Bearer from string
            token = token.slice(7, token.length);
        }

        if (token) {
            jwt.verify(token, JwtConfig.secret, (err: any, decoded: any) => {
                if (err) {
                    res.status(401);
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
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            res.status(401);
            return res.json(                        {
                error: {
                    code: 401,
                    location: "Authorization",
                    locationType: "header",
                    message: "missing parameter",
                    type: "missingParameter"
                }
            });
        }
    }
}
