import { Resume } from "./Resume";

export class User {
    public userid: string;
    public password: string;
    public firstname: string;
    public lastname: string;
    public profilePicture: string;
    public resumeTitle: string;
    public resume: Resume;
}
