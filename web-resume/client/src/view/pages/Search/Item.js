// eslint-disable-next-line import/prefer-default-export
export class Item {
  constructor({
    Firstname = '',
    Lastname = '',
    ProfilePicture = '',
    Userid = '',
  } = {}) {
    this.Firstname = Firstname;
    this.Lastname = Lastname;
    this.ProfilePicture = ProfilePicture;
    this.Userid = Userid;
  }

  Firstname: string;

  Lastname: string;

  ProfilePicture: string;

  Userid: string;
}
