import { IRepository } from "../IRepository";
import { ISearchRepository } from "../ISearchRepository";
import { IUnitOfWork } from "../IUnitOfWork";

export class UnitOfWork implements IUnitOfWork {
    public Repository: IRepository;
    public SearchRepository: ISearchRepository;

    constructor(IRepository) {
        
    }
}
