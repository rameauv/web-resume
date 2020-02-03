// eslint-disable-next-line import/prefer-default-export
export class User {
  constructor({
    Userid = '',
    Firstname = '',
    Lastname = '',
    ProfilePicture = '',
    ResumeTitle = '',
    Resume = null,
  } = {}) {
    this.Userid = Userid;
    this.Firstname = Firstname;
    this.Lastname = Lastname;
    this.ProfilePicture = ProfilePicture;
    this.ResumeTitle = ResumeTitle;
    this.Resume = Resume;
  }

  Userid: string

  Firstname: string;

  Lastname: string;

  ProfilePicture: string;

  ResumeTitle: string;

  Resume: any;
}
