export default class InvalidTokenError extends Error {
  constructor(message) {
    super(message);
    this.name = 'MissingToken';
    this.message = message;
  }
}
