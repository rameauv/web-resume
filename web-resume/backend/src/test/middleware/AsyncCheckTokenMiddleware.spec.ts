// import { Arg, Substitute } from "@fluffy-spoon/substitute";
import * as chai from "chai";
import * as express from "express";
import "mocha";
import sinon from "sinon";
import * as TypeMoq from "typemoq";
import { AsyncCheckTokenMiddleware } from "../../middleware/AsyncCheckTokenMiddleware";
import { IJwtService } from "../../services/IJwtService";
import { InvalidTokenError } from "../../services/InvalidTokenError";
import { ITokenExtractorService } from "../../services/ITokenExtractorService";

describe("\"AsyncCheckToken\" middleware", () => {
    it("should not go in the next function when the token empty", async () => {
        // setup mocked services
        const jwtServiceMock = TypeMoq.Mock.ofType<IJwtService>();
        const decoded = "myUserId";
        jwtServiceMock.setup((x) => x.AsyncCheckToken(TypeMoq.It.isAny())).returns(() => Promise.resolve(decoded));
        const jwtService = jwtServiceMock.object;
        const token = "";
        const tokenExtractorServiceMock = TypeMoq.Mock.ofType<ITokenExtractorService>();
        tokenExtractorServiceMock.setup((x) => x.MyExtract(TypeMoq.It.isAny())).returns(() => token);
        const tokenExtractorService = tokenExtractorServiceMock.object;
        const resMock = TypeMoq.Mock.ofType<express.Response>();
        const res = resMock.object;

        const middleware = new AsyncCheckTokenMiddleware(jwtService, tokenExtractorService).build();

        const nextSpy = sinon.spy();

        // run
        await middleware({}, res, nextSpy);

        // test
        chai.expect(nextSpy.notCalled).to.be.true;
    });

    it("should fill the response object when the token is empty", async () => {
        // setup mocked services
        const jwtServiceMock = TypeMoq.Mock.ofType<IJwtService>();
        const decoded = "myUserId";
        jwtServiceMock.setup((x) => x.AsyncCheckToken(TypeMoq.It.isAny())).returns(() => Promise.resolve(decoded));
        const jwtService = jwtServiceMock.object;
        const token = "";
        const tokenExtractorServiceMock = TypeMoq.Mock.ofType<ITokenExtractorService>();
        tokenExtractorServiceMock.setup((x) => x.MyExtract(TypeMoq.It.isAny())).returns(() => token);
        const tokenExtractorService = tokenExtractorServiceMock.object;
        const mockRes = TypeMoq.Mock.ofType<express.Response>();
        mockRes.setup((x) => x.json(TypeMoq.It.isAny)).returns((x) => x);
        mockRes.setup((x) => x.status(401)).returns((x) => x);
        const jsonRes = {
            error: {
                code: 401,
                location: "Authorization",
                locationType: "header",
                message: "missing parameter",
                type: "missingParameter"
            }
        };

        const mockResponse = () => {
            const res = {
                json: null,
                status: null
            };
            res.status = sinon.stub().returns(res);
            res.json = sinon.stub().returns(res);
            return res;
        };
        const res = mockRes.object;

        const middleware = new AsyncCheckTokenMiddleware(jwtService, tokenExtractorService).build();

        // run
        await middleware({}, res, {});
        // test
        mockRes.verify((x) => x.status(TypeMoq.It.isValue(401)), TypeMoq.Times.atLeastOnce());
        mockRes.verify((x) => x.json(TypeMoq.It.isValue(jsonRes)), TypeMoq.Times.atLeastOnce());
        chai.expect(true);
    });

    it("should go in the next function when the token is not empty", async () => {
        // setup mocked services
        const jwtServiceMock = TypeMoq.Mock.ofType<IJwtService>();
        const decoded = "myUserId";
        jwtServiceMock.setup((x) => x.AsyncCheckToken(TypeMoq.It.isAny())).returns(() => Promise.resolve(decoded));
        const jwtService = jwtServiceMock.object;
        const token = "nyanpasu";
        const tokenExtractorServiceMock = TypeMoq.Mock.ofType<ITokenExtractorService>();
        tokenExtractorServiceMock.setup((x) => x.MyExtract(TypeMoq.It.isAny())).returns(() => token);
        const tokenExtractorService = tokenExtractorServiceMock.object;

        const res: string = tokenExtractorService.MyExtract("");
        const middleware = new AsyncCheckTokenMiddleware(jwtService, tokenExtractorService).build();
        const nextSpy = sinon.spy();

        // run
        await middleware({}, {}, nextSpy);

        // test
        chai.expect(nextSpy.called).to.be.true;
    });

    it("should store the payload in the response when the token is not empty", async () => {
        // setup mocked services
        const jwtServiceMock = TypeMoq.Mock.ofType<IJwtService>();
        const decoded = "myUserId";
        jwtServiceMock.setup((x) => x.AsyncCheckToken(TypeMoq.It.isAny())).returns(() => Promise.resolve(decoded));
        const jwtService = jwtServiceMock.object;
        const token = "nyanpasu";
        const tokenExtractorServiceMock = TypeMoq.Mock.ofType<ITokenExtractorService>();
        tokenExtractorServiceMock.setup((x) => x.MyExtract(TypeMoq.It.isAny())).returns(() => token);
        const tokenExtractorService = tokenExtractorServiceMock.object;

        const res: string = tokenExtractorService.MyExtract("");
        const middleware = new AsyncCheckTokenMiddleware(jwtService, tokenExtractorService).build();
        const req = {
            decoded
        };
        const nextSpy = sinon.spy();

        // run
        await middleware(req, {}, nextSpy);

        // test
        chai.expect(req.decoded).to.be.equal(decoded);
    });

    it("should fill the response object when the token is not valid", async () => {
        // setup mocked services
        const jwtServiceMock = TypeMoq.Mock.ofType<IJwtService>();
        const decoded = "myUserId";
        jwtServiceMock.setup((x) => x.AsyncCheckToken(TypeMoq.It.isAny()))
            .returns(() => { throw new InvalidTokenError("") });
        const jwtService = jwtServiceMock.object;
        const token = "nyanpasu";
        const tokenExtractorServiceMock = TypeMoq.Mock.ofType<ITokenExtractorService>();
        tokenExtractorServiceMock.setup((x) => x.MyExtract(TypeMoq.It.isAny())).returns(() => token);
        const tokenExtractorService = tokenExtractorServiceMock.object;
        const mockRes = TypeMoq.Mock.ofType<express.Response>();
        mockRes.setup((x) => x.json(TypeMoq.It.isAny)).returns((x) => x);
        mockRes.setup((x) => x.status(401)).returns((x) => x);
        const jsonRes = {
            error: {
                code: 401,
                location: "Authorization",
                locationType: "header",
                message: "Invalid token",
                type: "invalidToken"
            }
        };

        const res = mockRes.object;

        const middleware = new AsyncCheckTokenMiddleware(jwtService, tokenExtractorService).build();

        // run
        const result = await middleware({}, res, {});
        // test
        mockRes.verify((x) => x.status(TypeMoq.It.isValue(401)), TypeMoq.Times.atLeastOnce());
        mockRes.verify((x) => x.json(TypeMoq.It.isValue(jsonRes)), TypeMoq.Times.atLeastOnce());
        chai.expect(true);
    });

    it("should rethrow unknown errors when the token is not empty", async () => {
        // setup mocked services
        const jwtServiceMock = TypeMoq.Mock.ofType<IJwtService>();
        jwtServiceMock.setup((x) => x.AsyncCheckToken(TypeMoq.It.isAny()))
            .returns(() => { throw new Error(""); });
        const jwtService = jwtServiceMock.object;
        const token = "nyanpasu";
        const tokenExtractorServiceMock = TypeMoq.Mock.ofType<ITokenExtractorService>();
        tokenExtractorServiceMock.setup((x) => x.MyExtract(TypeMoq.It.isAny())).returns(() => token);
        const tokenExtractorService = tokenExtractorServiceMock.object;

        const middleware = new AsyncCheckTokenMiddleware(jwtService, tokenExtractorService).build();

        // run
        let error: Error = null;
        try {
            await middleware({}, {}, {});
        } catch (e) {
            error = e;
        }
        // test
        chai.expect(error).to.be.not.null;
        chai.expect(!(error instanceof InvalidTokenError));
    });
});
