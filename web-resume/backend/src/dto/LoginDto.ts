import { UserDto } from "./UserDto";

export class LoginDto {
    public success: boolean;
    public message: string;
    public token: string;
    public userDatas: UserDto;
}
