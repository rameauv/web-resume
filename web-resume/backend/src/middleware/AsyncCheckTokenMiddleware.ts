
import { inject, injectable } from "inversify";
import "reflect-metadata";
import { IJwtService } from "../services/IJwtService";
import { InvalidTokenError } from "../services/InvalidTokenError";
import { ITokenExtractorService } from "../services/ITokenExtractorService";
import { IAsyncCheckTokenMiddleware } from "./IAsyncCheckTokenMiddleware";

@injectable()
export class AsyncCheckTokenMiddleware implements IAsyncCheckTokenMiddleware {
    private jwtService: IJwtService;
    private tokenExtractorService: ITokenExtractorService;

    constructor(
        @inject("IJwtService") jwtService: IJwtService,
        @inject("ITokenExtractorService") tokenExtractorService: ITokenExtractorService) {

        this.jwtService = jwtService;
        this.tokenExtractorService = tokenExtractorService;
    }

    public build() {
        return async (req: any, res: any, next: any) => {
            const token = this.tokenExtractorService.MyExtract(req);
            if (token) {
                try {
                    const decoded = await this.jwtService.AsyncCheckToken(token);
                    req.decoded = decoded;
                    next();
                } catch (e) {
                    if (!(e instanceof InvalidTokenError)) {
                        throw e;
                    }
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
        };
    }
}
