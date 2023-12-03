"use strict";
function calcuValue(income, year = 2023) {
    if (year == 2023)
        return income + 100;
    return income + 10;
}
let x = calcuValue(1, 2022);
console.log(x);
//# sourceMappingURL=index.js.map