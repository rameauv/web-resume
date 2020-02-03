import { inject, injectable } from "inversify";
import "reflect-metadata";
import { User } from "../../model/User";
import { IRepository } from "../../repositories/IRepository";
import { ISearchService } from "../ISearchService";

@injectable()
export class SearchService implements ISearchService {
    private repository: IRepository;

    constructor(@inject("IRepository") repository: IRepository) {
        this.repository = repository;
    }

    public async getAsync(userdataid: string): Promise<User[]> {
        return(await this.repository.searchAsync(userdataid));
    }
}
