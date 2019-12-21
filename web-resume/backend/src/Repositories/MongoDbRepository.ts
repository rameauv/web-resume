import { injectable } from "inversify";
import * as MongoClient from "mongodb";
import "reflect-metadata";
import config from "../config/config";
import { CompetencesDb } from "../Model/Competences";
import { Contact } from "../Model/Contact";
import { User } from "../Model/User";
import { WorkingExperiences } from "../Model/WorkingExperiences";
import { IRepository } from "./IRepository";

@injectable()
export class MongoDbRepository implements IRepository {
    // Connection URL
    private uri: string;
    // Database Name
    private dbName: string;
    private client: MongoClient.MongoClient;
    private db: MongoClient.Db;

    constructor() {
        // Create a new MongoClient
        this.uri = config.get("db").uri;
        this.dbName = config.get("db").dbname;
        console.log("mongodburi:" + this.uri);
        this.client = new MongoClient.MongoClient(this.uri, { useNewUrlParser: true, useUnifiedTopology: true });

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

    public async getUserWorkingExperiencesAsync(userdataid: string): Promise<WorkingExperiences> {
        return await this.db.collection("workingExperiences").findOne({ userdataid });
    }

    public async getUserCompetencesAsync(userdataid: string): Promise<CompetencesDb> {
        return await this.db.collection("competences").findOne({ userdataid });
    }
    // TODO close
}
