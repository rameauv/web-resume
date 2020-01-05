import { Credentials } from "../model/Credentials";
import { Login } from "../model/Login";
export interface IAccountService {
    AsyncLogin(credentials: Credentials): Promise<Login>;
}
