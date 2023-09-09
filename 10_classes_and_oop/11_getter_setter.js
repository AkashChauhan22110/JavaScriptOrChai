class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get email() {
    return `${this._email.toUpperCase()}`;
  }
  set email(value) {
    return (this._email = value);
  }
  get password() {
    return `${this._password}akash`;
  }
  set password(value) {
    return (this._password = value);
  }
}

const Hitesh = new User("akash11@gmail.com", "123");
console.log(Hitesh.email);
console.log(Hitesh.password);
//AKASH11@GMAIL.COM
//123akash
