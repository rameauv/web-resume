import { CompetencesDb } from "./CompetencesDb";
import { Contact } from "./Contact";
import { WorkingExperiencesDb } from "./WorkingExperiencesDb";

export class ResumeDb {
    public contact: Contact;
    public workingExperiences: WorkingExperiencesDb;
    public competences: CompetencesDb;
}
