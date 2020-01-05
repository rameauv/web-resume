import { CompetencesDto } from "./CompetencesDto";
import { ContactDto } from "./ContactDto";
import { WorkingExperiencesDto } from "./WorkingExperiencesDto";

export class ResumeDto {
    public contact: ContactDto;
    public workingExperiences: WorkingExperiencesDto;
    public competences: CompetencesDto;
}
