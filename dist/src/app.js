"use strict";
const users = [{
        id: 1,
        name: 'Hein Htet Aung',
        age: 20,
    }];
class User {
    constructor() {
        this.users = [];
    }
    create(items) {
        this.users.push(...items);
        return this.users;
    }
    ;
}
const user = new User();
let x = user.create(users);
console.log(x);
//# sourceMappingURL=app.js.map