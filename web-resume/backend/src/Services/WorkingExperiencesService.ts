import { WorkingExperiencesDb } from "../ModelDb/WorkingExperiencesDb";
import { MongoDbHelper } from "../Repositories/MongoDbHelper";

export class WorkingExperiencesService {
    private _mongoDbHelper = new MongoDbHelper();

    public async getUserWorkingExperiencesAsync(userid: string): Promise<WorkingExperiencesDb> {
        return(await this._mongoDbHelper.getUserWorkingExperiencesAsync(userid));
    }
}