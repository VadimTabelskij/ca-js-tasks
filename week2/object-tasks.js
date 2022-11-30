console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
    function byPrice(drink, drinkOther) {
        return drink.price - drinkOther.price;
    }

    function sortDrinkByPrice(drinks) {
        return drinks.sort(byPrice);
    }

    const drinks = [
        { name: "lemonade", price: 50 },
        { name: "lime", price: 5 },
        { name: "fanta", price: 40 },
        { name: "cola", price: 20 },
        { name: "pepsi", price: 30 },
    ];

    const sortedDrinks = sortDrinkByPrice(drinks);
    console.table(sortedDrinks)
}
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
    const generationObject = {
        m: {
            '-3': 'great grandfather',
            '-2': 'grandfather',
            '-1': 'father',
            0: 'me!',
            1: 'son',
            2: 'grandson',
            3: 'great grandson',
        },
        f: {
            '-3': 'great grandmother',
            '-2': 'grandmother',
            '-1': 'mother',
            0: 'me!',
            1: 'daughter',
            2: 'granddaughter',
            3: 'great granddaughter',
        }
    };

    function generation(gen, sex) {
        return generationObject[sex][gen];
    }

    console.table({
        "generation(-3, 'm')": generation(-3, 'm'),
        "generation(-2, 'm')": generation(-2, 'm'),
        "generation(-1, 'm')": generation(-1, 'm'),
        "generation(0, 'm')": generation(0, 'm'),
        "generation(1, 'm')": generation(1, 'm'),
        "generation(2, 'm')": generation(2, 'm'),
        "generation(3, 'm')": generation(3, 'm'),
        "generation(-3, 'f')": generation(-3, 'f'),
        "generation(-2, 'f')": generation(-2, 'f'),
        "generation(-1, 'f')": generation(-1, 'f'),
        "generation(0, 'f')": generation(0, 'f'),
        "generation(1, 'f')": generation(1, 'f'),
        "generation(2, 'f')": generation(2, 'f'),
        "generation(3, 'f')": generation(3, 'f'),
    });
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
        const valueArr = Object.values(obj);
        let sum = 0;
        for (let i = 0; i < valueArr.length; i += 1) sum += valueArr[i];
    
        return sum - limit;
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
        const valueArr = Object.values(inks);
        let min = valueArr[0];

        for (let i = 1; i < valueArr.length; i++) {
            if (valueArr[i] < min) {
                min = valueArr[i];
            }
        }
        return min;
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
        let sum = 0;
        for (const key in obj) {
            sum += obj[key];
        }
        if (sum > 0) return sum;
        return 'Lucky you!'
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