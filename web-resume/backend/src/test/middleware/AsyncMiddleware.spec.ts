import * as chai from "chai";
import "mocha";
import sinon from "sinon";
import { AsyncMiddleware } from "../../middleware/AsyncMiddleware";

describe("AsyncMiddleware", () => {
    it("call next on every errors", async () => {
        const middleware = (req, res, next) => { throw new Error(); };
        const asyncMiddleware = AsyncMiddleware(middleware);
        const nextSpy = sinon.spy();
        try {
            await asyncMiddleware({}, {}, nextSpy);
        } catch (e) { }
        chai.expect(nextSpy.called);
    });
});