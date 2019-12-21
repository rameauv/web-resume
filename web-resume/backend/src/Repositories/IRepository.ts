import { CompetencesDb } from "../Model/Competences";
import { Contact } from "../Model/Contact";
import { User } from "../Model/User";
import { WorkingExperiences } from "../Model/WorkingExperiences";
export interface IRepository {
    getUserAsync(userid: string): Promise<User>;
    getUserContactDatasAsync(userdataid: string): Promise<Contact>;
    getUserWorkingExperiencesAsync(userdataid: string): Promise<WorkingExperiences>;
    getUserCompetencesAsync(userdataid: string): Promise<CompetencesDb>;
}
