import { CompetencesDb } from "../ModelDb/CompetencesDb";
import { MongoDbHelper } from "../Repositories/MongoDbHelper";

export class CompetencesService {
    private mongoDbHelper = new MongoDbHelper();

    public async getUserCompetencesAsync(userdataid: string): Promise<CompetencesDb> {
        return(await this.mongoDbHelper.getUserCompetencesAsync(userdataid));
    }
}
