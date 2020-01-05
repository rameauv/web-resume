import { CompetencesDb } from "../model/Competences";
import { Contact } from "../model/Contact";
import { User } from "../model/User";
import { WorkingExperiences } from "../model/WorkingExperiences";
export interface IRepository {
    getUserAsync(userid: string): Promise<User>;
}
