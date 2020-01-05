export class InvalidCredentialsError extends Error {
    constructor() {
        super("Incorrect username or password");
    }
}
