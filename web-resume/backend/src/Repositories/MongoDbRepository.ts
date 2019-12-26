import { injectable } from "inversify";
import * as MongoClient from "mongodb";
import "reflect-metadata";
import config from "../config/config";
import { CompetencesDb } from "../model/Competences";
import { Contact } from "../model/Contact";
import { User } from "../model/User";
import { WorkingExperiences } from "../model/WorkingExperiences";
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
        this.uri = config.db.uri;
        this.dbName = config.db.dbname;
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
    // TODO close
}
