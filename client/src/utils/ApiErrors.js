export class InvalidToken extends Error {
    constructor(message) {
        super(message)
        this.name = 'MissingToken'
        this.message = message
      }
}