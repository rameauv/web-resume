import { User } from "../model/User";
export interface ISearchService {
    getAsync(query: string): Promise<User[]>;
}
