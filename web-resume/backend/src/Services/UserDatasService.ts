import { User } from "../Model/User";
import { MongoDbHelper } from "../Repositories/MongoDbHelper";

export class UserDatasService {
    private mongoDbHelper = new MongoDbHelper();

    public async getUserDatasAsync(userdataid: string): Promise<User> {
        return(await this.mongoDbHelper.getUserAsync(userdataid));
    }
}
