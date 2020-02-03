import { User } from '../../../model/User';
import { UserDto } from './UserDto';

// eslint-disable-next-line import/prefer-default-export
export class UserMapper {
  static Map(userDto: UserDto): User {
    return new User({
      Userid: userDto.userid,
      Firstname: userDto.firstname,
      Lastname: userDto.lastname,
      ProfilePicture: userDto.profilePicture,
      Resume: userDto.resume,
      ResumeTitle: userDto.resumeTitle,
    });
  }
}