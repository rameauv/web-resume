import { IRepository } from "./IRepository";
import { ISearchRepository } from "./ISearchRepository";

export interface IUnitOfWork {
    Repository: IRepository;
    SearchRepository: ISearchRepository;
}
