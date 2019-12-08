import * as MongoClient from "mongodb";
import { CompetencesDb } from "../ModelDb/CompetencesDb";
import { Contact } from "../ModelDb/Contact";
import { User } from "../ModelDb/User";
import { WorkingExperiencesDb } from "../ModelDb/WorkingExperiencesDb";

export class MongoDbHelper {
    // Connection URL
    private uri = process.env.mongodburi;
    // Database Name
    private dbName = "truc";
    private client: MongoClient.MongoClient;
    private db: MongoClient.Db;

    constructor() {
        // Create a new MongoClient
        console.log("mongodburi:" + this.uri);
        this.client = new MongoClient.MongoClient(this.uri, { useNewUrlParser: true });

        // Use connect method to connect to the Server
        this.client.connect((err) => {
            console.log("Database connection error:", err);
            this.db = this.client.db(this.dbName);
        });
    }
    public async getUserAsync(userid: string): Promise<User> {
        return await this.db.collection("UserDatas").findOne({ userid });
    }

    public async getUserContactDatasAsync(userdataid: string): Promise<Contact> {
        return await this.db.collection("contact").findOne({ userdataid });
    }

    public async getUserWorkingExperiencesAsync(userdataid: string): Promise<WorkingExperiencesDb> {
        return await this.db.collection("workingExperiences").findOne({ userdataid });
    }

    public async getUserCompetencesAsync(userdataid: string): Promise<CompetencesDb> {
        return await this.db.collection("competences").findOne({ userdataid });
    }
    // TODO close
}