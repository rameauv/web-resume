import * as chai from "chai";
import "mocha";
import { TokenExtractorService } from "../../services/implementation/TokenExtractorService";

describe("\"token extractor\" service", () => {
    it("should extract the token from the request header object", () => {
        const tokenExtractorService = new TokenExtractorService();
        const req = {
            headers: {
                "x-access-token": "token"
            }
        };
        const result = tokenExtractorService.MyExtract(req);
        chai.expect(result).to.be.equal("token");
    });

    it("should extract the token from the request object", () => {
        const tokenExtractorService = new TokenExtractorService();
        const req = {
            headers: {
                authorization: "token"
            }
        };
        const result = tokenExtractorService.MyExtract(req);
        chai.expect(result).to.be.equal("token");
    });

    it("should extract the token from the request header object with Bearer as prefix", () => {
        const tokenExtractorService = new TokenExtractorService();
        const req = {
            headers: {
                "x-access-token": "Bearer token"
            }
        };
        const result = tokenExtractorService.MyExtract(req);
        chai.expect(result).to.be.equal("token");
    });

    it("should extract the token from the request object with Bearer as prefix", () => {
        const tokenExtractorService = new TokenExtractorService();
        const req = {
            headers: {
                authorization: "Bearer token"
            }
        };
        const result = tokenExtractorService.MyExtract(req);
        chai.expect(result).to.be.equal("token");
    });
});
