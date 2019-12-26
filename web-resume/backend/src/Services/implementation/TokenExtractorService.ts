import { injectable } from "inversify";
import "reflect-metadata";
import { ITokenExtractorService } from "../ITokenExtractorService";

@injectable()
export class TokenExtractorService implements ITokenExtractorService {
    public MyExtract(req: any): string {
        let token = req.headers["x-access-token"]
            || req.headers.authorization; // Express headers are auto converted to lowercase
        if (token && token.startsWith("Bearer ")) {
            // Remove Bearer from string
            token = token.slice(7, token.length);
        }
        return token;
    }
}
