console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
    function sortDrinkByPrice(drinks) {
        return drinks.sort((a, b) => a.price - b.price)
    }

    const lemonade = [({ name: "lemonade", price: 50 })];
    const lime = [({ name: "lime", price: 10 })];

    const res1 = sortDrinkByPrice(lemonade);
    const res2 = sortDrinkByPrice(lime);

    console.log(res1, res2);
}
console.log();

console.groupEnd();

console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{

    function addName(obj, name, value) {
        obj[name] = value
        return obj
    };

    const res1 = addName({}, "Brutus", 300)
    const res2 = addName({ piano: 500 }, "Brutus", 400)
    const res3 = addName({ piano: 500, stereo: 300 }, "Caligula", 440)

    console.log(res1, res2, res3);
}
console.groupEnd();

console.groupCollapsed('3 - https://edabit.com/challenge/48EJWLhF224na8po3');
{

}
console.groupEnd();

console.groupCollapsed('4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX');
{

}
console.groupEnd();

console.groupCollapsed('5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');
{

}
console.groupEnd();

console.groupCollapsed('6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{

}
console.groupEnd();

console.groupCollapsed('7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip');
{

}
console.groupEnd();

console.groupCollapsed('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{

}
console.groupEnd();