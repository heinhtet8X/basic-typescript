"use strict";
let start = {
    apply: () => { },
    create: (num) => {
        return `${num.toString()} kg`;
    },
    remove: () => { },
};
let x = start.create(20);
console.log(x);
//# sourceMappingURL=index.js.map