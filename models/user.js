export class User {
  constructor() {
    (this.id = null),
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

  static fromJson(id, json) {
    const user = Object.assign(new User(), json);
    user.id = id;
    return user;
  }
}
