type User = {
    readonly id: number,
    name: string,
    work?: string,
    age: (date: string) => void
}

// const me: {
//     readonly id: number,
//     name: string,
//     work?: string,
//     age: (date: string) => void
// } = {
//     id: 1,
//     name: 'HHA',
//     work: 'DEV',
//     age: (date: string) => {
//         console.log(date);
//     }
// };

const user: User = {
    id: 1,
    name: 'HHA',
    work: 'DEV',
    age: (date: string) => {
        console.log(date);
    }
};
