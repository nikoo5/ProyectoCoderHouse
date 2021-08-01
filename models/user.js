export class User {
  constructor() {
    (this.uid = null),
      (this.name = null),
      (this.lastName = null),
      (this.profileImage = null);
  }

  get displayName() {
    return this.name + " " + this.lastName;
  }
}
