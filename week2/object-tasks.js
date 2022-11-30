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
    function generation(x, y) {
        return generations[x + ''][y]
    }
    const generations = {
        '-3': {
            m: 'great grandfather',
            f: 'great grandmother',
        },
        '-2': {
            m: 'grandfather',
            f: 'grandmother',
        },
        '-1': {
            m: 'father',
            f: 'mother',
        },
        '0': {
            m: 'me!',
            f: 'me!',
        },
        '1': {
            m: 'son',
            f: 'daughter',
        },
        '2': {
            m: 'grandson',
            f: 'granddaughter',
        },
        '3': {
            m: 'great grandson',
            f: 'great granddaughter',
        }
    }
    console.log(generations);

}
console.groupEnd();

console.groupCollapsed('4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX');
{
    function maximumScore(tileHand) {
        let sum = 0;
        for (let i = 0; i < tileHand.length; i++) {
            sum += tileHand[i]["score"];
        }
        return sum;
    }
    
    const res1 = maximumScore([
        { tile: "N", score: 1 },
        { tile: "K", score: 5 },
        { tile: "Z", score: 10 },
        { tile: "X", score: 8 },
        { tile: "D", score: 2 },
        { tile: "A", score: 1 },
        { tile: "E", score: 1 }]
    );
    const res2 = maximumScore([
        { tile: "B", score: 2 },
        { tile: "V", score: 4 },
        { tile: "F", score: 4 },
        { tile: "U", score: 1 },
        { tile: "D", score: 2 },
        { tile: "O", score: 1 },
        { tile: "U", score: 1 }]
    );
    console.log(res1, res2);
}
console.groupEnd();

console.groupCollapsed('5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');
{
    function calculateDifference(obj, limit) {
        let sum = 0;
        for (let i in obj)
            sum += obj[i];
        return Math.abs(limit - sum);
    }

    const res2 = calculateDifference({ "baseball bat": 20 }, 5);
    const res1 = calculateDifference({ skate: 10, painting: 20 }, 19);
    const res3 = calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400);

    console.log(res1, res2, res3);
}
console.groupEnd();

console.groupCollapsed('6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{
    function toArray(obj) {
        return Object.entries(obj);
    }
    const res1 = toArray({ a: 1, b: 2 });
    const res2 = toArray({ shrimp: 15, tots: 12 });
    const res3 = toArray({});

    console.log(res1, res2, res3);
}
console.groupEnd();

console.groupCollapsed('7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip');
{
    function inkLevels(inks) {
        return Math.min(...Object.values(inks))
    }

    const res1 = inkLevels({
        "cyan": 23,
        "magenta": 12,
        "yellow": 10
    });
    const res2 = inkLevels({
        "cyan": 432,
        "magenta": 543,
        "yellow": 777
    });
    const res3 = inkLevels({
        "cyan": 700,
        "magenta": 700,
        "yellow": 0
    });

    console.log(res1, res2, res3);
}
console.groupEnd();

console.groupCollapsed('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{
    function calculateLosses(obj) {
        let arr = Object.values(obj);
        if (arr.length === 0) {
            return "Lucky you!"
        } else {
            return arr.reduce(function (a, b) {
                return a + b;
            }, 0)
        }
    }

    const res1 = calculateLosses({
        tv: 30,
        skate: 20,
        stereo: 50,
    });
    const res2 = calculateLosses({
        painting: 20000,
    });
    const res3 = calculateLosses({});

    console.log(res1, res2, res3);
}
console.groupEnd();