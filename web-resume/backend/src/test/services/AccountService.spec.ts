import { Arg, Substitute } from "@fluffy-spoon/substitute";
import * as chai from "chai";
import * as jwt from "jsonwebtoken";
import "mocha";
import { Credentials } from "../../Model/Credentials";
import { Login } from "../../Model/Login";
import { User } from "../../Model/User";
import { IRepository } from "../../Repositories/IRepository";
import { AccountService } from "../../Services/implementation/AccountService";
import { InvalidCredentialsError } from "../../Services/InvalidCredentialsError";

describe("'account' service", () => {
    it("the password should match", (done) => {
        const repo = Substitute.for<IRepository>();
        const user = new User();
        user.password = "$2b$10$tklWsyrCrkFgCMkSRQxSQuBov9p8UalCXZnKcOcBrQN7XBq2qwceC";
        repo.getUserAsync(Arg.any()).returns(new Promise((resolve) => resolve(user)));
        const service = new AccountService(repo, "secret");
        const credentials = new Credentials("", "password");
        service.AsyncLogin(credentials).then((res: Login) => {
            chai.expect(res).to.not.be.null;
            done();
        }).catch();
    });

    it("the password should not match", (done) => {
        const repo = Substitute.for<IRepository>();
        const user = new User();
        user.password = "$2b$10$tklWsyrCrkFgCMkSRQxSQuBov9p8UalCXZnKcOcBrQN7XBq2qwceC";
        repo.getUserAsync(Arg.any()).returns(new Promise((resolve) => resolve(user)));
        const service = new AccountService(repo, "secret");
        const credentials = new Credentials("", "wrong_password");
        service.AsyncLogin(credentials).catch((e) => {
            chai.expect(e instanceof InvalidCredentialsError).to.be.true;
            done();
        });
    });

    it("should return a valid token", (done) => {
        const repo = Substitute.for<IRepository>();
        const user = new User();
        user.password = "$2b$10$tklWsyrCrkFgCMkSRQxSQuBov9p8UalCXZnKcOcBrQN7XBq2qwceC";
        repo.getUserAsync(Arg.any()).returns(new Promise((resolve) => resolve(user)));
        const secret = "MIIBOgIBAAJBAIRgN2ZysbxMlcd9WHwt8q/xC8ym3Zynv2Q7XVobCdrKbE2+SBWuTQxRvAN4SLHckBv+I3LK8aoGdTetz/mORhECAwEAAQJASDQ/I6dd4QqZDBYHxLw/Ss6dFATUjlVFZQOoeLSU3HySQ0S/uE3HI7H/HNN4qnjcjHSyp02/2xyE0vBp1o2j0QIhAL6MAHcX9dks4iX88Fd2gCpmsls35ToK/l4Hmc+GnXutAiEAsdjdnP3TCjWjHS1vWK3lsGn/tmmSnWH4cXuuBGx/wHUCIFgNgEWIl/51BEiDu1jflNiDPpZynQYWgHdZUdWZonq9AiEAk/0He8liwQ4c6vyRuNMLXB74H8v9qmSJnbTy+s9mBrkCIAWwcxdKKv45apyPXuwAb4hH34YTQ9gteIyRfi/BisWH";
        const service = new AccountService(repo, secret);
        const credentials = new Credentials("", "password");
        service.AsyncLogin(credentials).then((res: Login) => {
            jwt.verify(res.token, secret, (err: jwt.VerifyErrors, decoded: string) => {
                chai.expect(err).to.be.null;
                done();
            });
        }).catch();
    });
});
