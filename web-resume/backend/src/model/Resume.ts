import { CompetencesDb as Competences } from "./Competences";
import { Contact } from "./Contact";
import { WorkingExperiences as WorkingExperiences } from "./WorkingExperiences";

export class Resume {
    public contact: Contact;
    public workingExperiences: WorkingExperiences;
    public competences: Competences;
}
