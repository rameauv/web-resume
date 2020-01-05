import { inject, injectable } from "inversify";
import "reflect-metadata";
import { User } from "../../model/User";
import { IRepository } from "../../repositories/IRepository";
import { IUserService } from "../IUserService";

@injectable()
export class UserService implements IUserService {
    private repository: IRepository;

    constructor(@inject("IRepository") repository: IRepository) {
        this.repository = repository;
    }

    public async getUserAsync(userdataid: string): Promise<User> {
        return(await this.repository.getUserAsync(userdataid));
    }
}
