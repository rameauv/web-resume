export interface IJwtService {
    AsyncCheckToken(token: string): Promise<string>;
}
