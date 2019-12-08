import {Contact} from "../ModelDb/Contact";
import { MongoDbHelper } from "../Repositories/MongoDbHelper";

export class ContactService {
    private _mongoDbHelper = new MongoDbHelper();

    public async getContactAsync(userid: string): Promise<Contact> {
        return(await this._mongoDbHelper.getUserContactDatasAsync(userid));
    }
}
