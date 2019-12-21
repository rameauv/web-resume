import { Credentials } from "../Model/Credentials";
import { Login } from "../Model/Login";
export interface IAccountService {
    AsyncLogin(credentials: Credentials): Promise<Login>;
}
