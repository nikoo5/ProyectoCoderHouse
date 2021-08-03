export class User {
  constructor() {
    (this.email = null),
      (this.name = null),
      (this.lastName = null),
      (this.profileImage = null),
      (this.creationDate = null),
      (this.lastUpdate = null);
  }

  get displayName() {
    return this.name + " " + this.lastName;
  }

  static fromJson(json) {
    return Object.assign(new User(), json);
  }
}
