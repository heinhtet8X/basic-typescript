type Applyable = {
    apply: () => void,
    create: (num: number) => void
}

type Removeable = {
    remove: () => void
}

type Booking = Applyable & Removeable;

let start: Booking = {
    apply: () => { },
    create: (num) : string => {
        return  `${num.toString()} success.`;
    },
    remove: () => { },
}

let x = start.create(20);

console.log(x);
