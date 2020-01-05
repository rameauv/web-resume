import { injectable } from "inversify";
import * as jwt from "jsonwebtoken";
import config from "../../config/config";
import { IJwtService } from "../IJwtService";
import { InvalidTokenError } from "../InvalidTokenError";

@injectable()
export class JwtService implements IJwtService {

    public AsyncCheckToken(token: string): Promise<string> {
        const secret = config.jwtSecret;
        return new Promise<string>((resolve) => {
            jwt.verify(token, secret, (err: jwt.VerifyErrors, decoded: string) => {
                if (err) {
                    throw(new InvalidTokenError(err.message));
                }
                resolve(decoded);
            });
        });
    }
}
