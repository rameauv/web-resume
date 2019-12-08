import { CompetencesDb } from "../ModelDb/CompetencesDb";
import { MongoDbHelper } from "../Repositories/MongoDbHelper";

export class CompetencesService {
    private _mongoDbHelper = new MongoDbHelper();

    public async getUserCompetencesAsync(userdataid: string): Promise<CompetencesDb> {
        return(await this._mongoDbHelper.getUserCompetencesAsync(userdataid));
    }
}
