import { User } from "../model/User";
export interface IUserService {
    getUserAsync(userdataid: string): Promise<User>;
}
