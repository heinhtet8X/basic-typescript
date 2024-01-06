type Users = [{
    readonly id: number,
    name: string,
    age: number,
}];

const users: Users = [{
    id: 1,
    name: 'Hein Htet Aung',
    age: 20,
}];

class User {
    
    users: any[] = [];

    create(items: Users): string[] {
        this.users.push(...items);

        return this.users;
    };
}

const user = new User();

let x = user.create(users);

console.log(x);


type A<B> = {
    value: B
}

type Allow<Type> = Type;

function allowMethod(user: Allow<string>) : Allow<boolean> {
    if (typeof user == 'string')
        return true
    return false;
}

