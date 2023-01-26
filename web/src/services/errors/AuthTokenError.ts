export class AuthTokenError extends Error {
  constructor() {
    super("Token invalid")
    this.name = "AuthTokenError"
  }
}