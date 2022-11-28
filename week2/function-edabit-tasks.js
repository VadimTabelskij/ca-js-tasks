//1
console.group('https://edabit.com/challenge/ARr5tA458o2tC9FTN');
{
    function hello() {
        return "hello edabit.com";
    }

    const res1 = hello();
    console.log(res1);
}
console.groupEnd();

//2
console.group('https://edabit.com/challenge/NAQhEoxbofPidLxm9');
{
    function addition(num) {
        return 1 + num;
    }

    const res = addition(5);
    console.log(res);
}
console.groupEnd();


//3
console.group('https://edabit.com/challenge/NAQhEoxbofPidLxm9');
{
    function convert(minutes) {
        return minutes;
    }
    const minutes = 1 * 60;
    console.log(minutes);
}
console.groupEnd();

//4
console.group('https://edabit.com/challenge/3CaszbdZYGN4otQD8');
{
    function triArea(base, height) {
        return (base * height) / 2;
    }
    const res = triArea(7, 4)
    console.log(res);
}
console.groupEnd();

//5
console.group('https://edabit.com/challenge/bL7hSc6Zh4zZJzGmw');
{
    function calcAge(age, years) {
        return (age * years);
    }
    const ageYears = calcAge(28, 365)
    console.log(ageYears);
}
console.groupEnd();

//6
console.group('https://edabit.com/challenge/Q2j5FTFtsk7PdzrQk');
{
    function remainder(x, y) {
        return x % y;
    }
    const res = remainder(21, 55);
    console.log(res);
}
console.groupEnd();

//7
console.group('https://edabit.com/challenge/j7yQbF3J3rToHsDBP');
{
    function cubes(a) {
        return a ** 3;
    }

    const res = cubes(3);
    const res1 = cubes(5);
    const res2 = cubes(10);
    console.log(res, res1, res2);
}
console.groupEnd();

//8
console.group('https://edabit.com/challenge/wAdE9te55cowBLcPs');
{
    function circuitPower(voltage, current) {
        return voltage * current;
    }
    const res = circuitPower(10, 55);
    console.log(res);
}
console.groupEnd();

//9
console.group('https://edabit.com/challenge/6AnQqiEjkJdZrWhPS');
{
    function howManySeconds(hours) {
        return (hours * 60 * 60);
    }

    const res = howManySeconds(1);
    console.log(res);
}
console.groupEnd();

//10
console.group('https://edabit.com/challenge/XnJ24rWW7iJkNrtsh');
{
    function findPerimeter(length, width) {
        return (length + width) * 2;
    }
    const find = findPerimeter(20, 10);
    console.log(find);
}
console.groupEnd();

//11
console.group('https://edabit.com/challenge/Y46Xp2pcvTB77bmdD');
{
    function points(twoPointers, threePointers) {
        let twos = 2 * twoPointers;
        let threes = 3 * threePointers;
        return twos + threes;
    }
    const poin = points(7, 5)
    console.log(poin);
}
console.groupEnd();

//12
console.group('https://edabit.com/challenge/ghbHrRnRiDz9fvQNF');
{
    function profitableGamble(prob, prize, pay) {
        return prob * prize > pay
    }

    const res1 = profitableGamble(0.2, 50, 9);
    const res2 = profitableGamble(0.9, 1, 2);
    const res3 = profitableGamble(0.9, 3, 2);
    console.log(res1, res2, res3);
}
console.groupEnd();

//13
console.group('https://edabit.com/challenge/ks3vMrqdnW3CQ3F4i');
{
    function squared(b) {
        return b * b;
    }

    const res1 = squared(5);
    const res2 = squared(9);
    const res3 = squared(100);
    console.log(res1, res2, res3);
}
console.groupEnd();

//14
console.group('https://edabit.com/challenge/8Qg78sf5SNDEANKti');
{
    function animals(chickens, cows, pigs) {
        return (chickens * 2) + (cows * 4) + (pigs * 4);
    }

    const res1 = animals(2, 3, 5);
    const res2 = animals(1, 2, 3);
    const res3 = animals(5, 2, 8);
    console.log(res1, res2, res3);
}
console.groupEnd();

//15
console.group('https://edabit.com/challenge/4iCsexZgmDEMMxj46');
{
    function printArray(number) {
        let newArray = [];

        for (let i = 1; i <= number; i++) {
            newArray.push(i);
        }
        return newArray;
    }
    const res1 = printArray(1);
    const res2 = printArray(3);
    const res3 = printArray(6);
    console.log(res1, res2, res3);
}
console.groupEnd();


//16
console.group('https://edabit.com/challenge/JesaFi5ntBEbGT8bu');
{
    function convert(hours, minutes) {
        return 60 * minutes + 60 * 60 * hours
    }

    const res1 = convert(1, 3);
    const res2 = convert(2, 0);
    const res3 = convert(0, 0);
    console.log(res1, res2, res3);

}
console.groupEnd();

//17
console.group('https://edabit.com/challenge/GwvwXHWCThHZrR7xu');
{

    function footballPoints(wins, draws, losses) {
        return (wins * 3) + (draws * 1) + (losses * 0)
    }
    const res1 = footballPoints(3, 4, 2);
    const res2 = footballPoints(5, 0, 2);
    const res3 = footballPoints(0, 0, 1);
    console.log(res1, res2, res3);
}
console.groupEnd();

//18
console.group('https://edabit.com/challenge/9MjEpkL7yAjAqiH58')
{

    function lessThan100(a, b) {
        return 100 > (a + b)
    }

    const res1 = lessThan100(22, 15);
    const res2 = lessThan100(83, 34);
    const res3 = lessThan100(3, 77);
    console.log(res1, res2, res3);
}
console.groupEnd();

//19
console.group('https://edabit.com/challenge/CCGBig9eRPFzAHv46')
{
    function swap(a, b) {
        return [b, a];
    }

    const res1 = swap(100, 200);
    const res2 = swap(44, 33);
    const res3 = swap(21, 12);
    console.log(res1, res2, res3);
}
console.groupEnd();


//20

console.group('https://edabit.com/challenge/QSnaSH5S3oxZkwcNc')
{

    function isSameNum(num1, num2) {
        return num1 === num2;
    }

    const res1 = isSameNum(4, 8);
    const res2 = isSameNum(2, 2);
    const res3 = isSameNum(2, "2");
    console.log(res1, res2, res3);

}
console.groupEnd();

//21
console.group('https://edabit.com/challenge/nhXofMMyrowMyr9Nv')
{
    function nextEdge(side1, side2) {
        let res = (side1 + side2) - 1;
        return res
    }
    console.log(nextEdge(8, 10));
    console.log(nextEdge(5, 7));
    console.log(nextEdge(9, 2));
}

console.groupEnd();

//22
console.group('https://edabit.com/challenge/DcmB9Ycm58FdkPe7k')
{
    function futurePeople(population, n) {
        for (let i = 1; i <= 360; i++) {
            population = population + n;
        }
        return population;
    }
    console.log(futurePeople(256, 2));
    console.log(futurePeople(3248, 6));
    console.log(futurePeople(5240, 3));
}
console.groupEnd();

//23

console.group('https://edabit.com/challenge/sWAEoTbXA4bexBPb6')
{
    const arr = [1, 2, 3, 4, 5, 6];
    let [a, b] = arr;
    console.log(a);
    console.log(b);
}
console.groupEnd();


//24
console.group('https://edabit.com/challenge/fBJyQSe5Jmbm9hPAG')
{
    function sumPolygon(n) {
        let sum = ((n - 2) * 180);
        return sum
    }
    console.log(sumPolygon(3));
    console.log(sumPolygon(4));
    console.log(sumPolygon(6));
}
console.groupEnd();

//25
console.group('https://edabit.com/challenge/yHGowWucg3k2kJdZ4')
{
    function comp(str1, str2) {
        if (str1.length === str2.length) {
            return true;
        }
        return false;
    }

    console.log(comp("AB", "CD"));
    console.log(comp("ABC", "DE"));
    console.log(comp("hello", "edabit"));
}
console.groupEnd();