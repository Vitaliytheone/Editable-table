export const data = () => {
    const arr = [];
    for (let idx = 0; idx < 1000; idx++) {
        arr.push({
            name: `Vitaliy${idx}`,
            surname: `Shevchenko${idx}`,
            address: `Saint Petersburg${idx}`,
            age: idx,
            mark: 10 + idx
        })
    }
    return arr;
}