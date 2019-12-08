import { User } from "../ModelDb/User";
import { MongoDbHelper } from "../Repositories/MongoDbHelper";

export class UserDatasService {
    private _mongoDbHelper = new MongoDbHelper();

    public async getUserDatasAsync(userdataid: string): Promise<User> {
        return(await this._mongoDbHelper.getUserAsync(userdataid));
    }
}
