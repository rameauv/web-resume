export class JwtConfig {
    public secret: string;

    constructor(secret: string) {
        this.secret = secret;
    }
}
