import { ResumeDto } from "./ResumeDto";

export class UserDto {
    public userid: string;
    public firstname: string;
    public lastname: string;
    public profilePicture: string;
    public resumeTitle: string;
    public resume: ResumeDto;
}
