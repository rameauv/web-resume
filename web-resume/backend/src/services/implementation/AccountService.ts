import * as  bcrypt from "bcrypt";
import { inject, injectable } from "inversify";
import * as jwt from "jsonwebtoken";
import "reflect-metadata";
import { Credentials } from "../../model/Credentials";
import { Login } from "../../model/Login";
import { IRepository } from "../../repositories/IRepository";
import { IAccountService } from "../IAccountService";
import { InvalidCredentialsError } from "../InvalidCredentialsError";

@injectable()
export class AccountService implements IAccountService {

    private repository: IRepository;
    private secret: string;

    constructor(@inject("IRepository") repository: IRepository, secret: string) {
        this.repository = repository;
        this.secret = secret;
    }

    public async AsyncLogin(credentials: Credentials): Promise<Login> {
        const userid = credentials.userid;
        const password = credentials.password;

        const user = await this.repository.getUserAsync(userid);
        if (user) {
            // console.log(bcrypt.hashSync(user.password, 10));
        }
        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ userid },
                this.secret,
                {
                    expiresIn: "24h" // expires in 24 hours
                }
            );
            // return the JWT token for the future API calls
            const login = new Login();
            login.token = token;
            login.userDatas = user;
            return login;
        }
        throw (new InvalidCredentialsError());
    }
}
