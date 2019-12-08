import { UserDto } from "./UserDto";

export class LoginDto {
    public success: boolean;
    public message: String;
    public token: String;
    public userDatas: UserDto;
}
