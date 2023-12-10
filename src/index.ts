type User = {
    name: string,
    age: number
}

function getUserName(user: User) {
    return user.name;
}

const x = getUserName({ name: 'Hein', age : 20 });
console.log(x);
