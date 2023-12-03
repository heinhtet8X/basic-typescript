function calcuValue(income: number, year: number = 2023): number {
    if (year == 2023)
        return income + 100;
    return income + 10;
}

let x = calcuValue(1, 2022);

console.log(x);
