import { inject, injectable } from "inversify";
import "reflect-metadata";
import { myContainer } from "../../config/inversify.config";
import { User } from "../../Model/User";
import { IRepository } from "../../Repositories/IRepository";
import { IUserService } from "../IUserService";

@injectable()
export class UserService implements IUserService {
    private repository: IRepository;

    constructor(@inject("IRepository") repository: IRepository) {
        this.repository = myContainer.get<IRepository>("IRepository");
    }

    public async getUserAsync(userdataid: string): Promise<User> {
        return(await this.repository.getUserAsync(userdataid));
    }
}
