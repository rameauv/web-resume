import { User } from "../Model/User";
export interface IUserService {
    getUserAsync(userdataid: string): Promise<User>;
}
