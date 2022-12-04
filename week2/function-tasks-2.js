// ----------------------Užduotys--------------------------
//Naudojant for, while, if, else ir kitus programavimo konstruktus.
const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];

console.group('1. Padauginti masyvo narius iš 2 ir išsaugoti naujame masyve');
console.log('---');
{
  function mulArrBy2(arr) {
    const show = [];
    for (let i = 0; i < arr.length; i++) {
      show[i] = arr[i] * 2;
    }
    return show;
  }
  console.log({
    numbers,
    result: mulArrBy2(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('2. Pakelti masyvo narius kvadratu ir išsaugoti naujame masyve');
console.log('---');
{
  function powerArrBy2(arr) {
    const toArr = [];
    for (let i = 0; i < arr.length; i++) {
      toArr[i] = arr[i] ** arr[i];
    }
    return toArr;
  }
  console.log({
    numbers,
    result: powerArrBy2(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('3. Padauginti masyvo narius iš jų index\'o (vietos masyve) ir išsaugoti naujame masyve');
console.log('---');
{
  function mulArrElementsByIndex(arr) {
    const elementIndex = [];
    for (let i = 0; i < arr.length; i++) {
      elementIndex[i] = arr[i] * i;
    }
    return elementIndex;
  }
  console.log({
    numbers,
    result: mulArrElementsByIndex(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('4. Atrinkti tiktai teigimų elementų masyvą');
console.log('---');
{
  function filterPositives(arr) {
    const positives = [];
    for (let i = 0; i < arr.length; i++)
      if (arr[i] > 0) {
        positives[i] = arr[i];
      }
    return positives;
  }
  console.log({
    numbers,
    result: filterPositives(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('5. Atrinkti tiktai neigiamų elementų masyvą');
console.log('---');
{
  function filterNegatives(arr) {
    const negatives = [];
    for (let i = 0; i < arr.length; i++)
      if (arr[i] < 0) {
        negatives[i] = arr[i];
      }
    return negatives;
  }
  console.log({
    numbers,
    result: filterNegatives(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('6. Atrinkti tiktai lyginių skaičių masyvą');
console.log('---');
{
  function filterEquals(arr) {
    const equals = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        equals[i] = arr[i];
      }
    }
    return equals;
  }
  console.log({
    numbers,
    result: filterEquals(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('7. Atrinkti tiktai nelyginių skaičių masyvą');
console.log('---');
{
  function filterOdds(arr) {
    const odds = [];
    for (let i = 0; i < arr.length; i++)
      if (arr[i] % 2 === 1) {
        odds[i] = arr[i];
      }
    return odds;
  }
  console.log({
    numbers,
    result: filterOdds(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group("8. Visas neigiamas vertes masyve padaryti teigiamomis ir išsaugoti į naują masyvą");
{
  function arrAbsoluteValues(arr) {
    const absolute = [];
    for (let i = 0; i < arr.length; i++) {
      let newArr = arr[i];
      if (newArr < 0) newArr *= -1;
      absolute[i] = newArr *= -1;
    }
    return absolute;
  }

  console.log('---');
  console.log({
    numbers,
    result: arrAbsoluteValues(numbers)
  });
  console.log('---');
}
console.groupEnd();
console.log();

console.group('9. Pakelti visas masyvo reikšmes laipsniu \'index\' ir išsaugoti naujame masyve');
console.log('---');
{
  function powArrElementsByIndex(arr) {
    const powArr = [];
    for (let i = 0; i < arr.length; i++) {
      powArr[i] = arr[i] ** i;
    }
    return powArr;
  }
  console.log({
    numbers,
    result: powArrElementsByIndex(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('10. Atrinkti tik natūralių skaičių masyvą');
console.log('---');
{
  function filterNaturals(arr) {
    const filter = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 1 === 0) {
        filter[i] = arr[i];
      }
    }
    return filter;
  }

  console.log({
    numbers,
    result: filterNaturals(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('11. Suapvalinti visas masyvo reikšmes iki sveikų skaičių ir išsaugoti naujame masyve');
console.log('---');
{
  function absArrElements(arr) {
    const absArr = [];
    for (let i = 0; i < arr.length; i++) {
      absArr[i] = Math.round(arr[i]);
    }
    return absArr;
  }
  console.log({
    numbers,
    result: absArrElements(numbers)
  });
}
console.log('---');
console.groupEnd()

console.group('12. Atrinkti kas antrą elementą');
console.log('---');
{
  function filterEverySecond(arr) {
    const everySecond = [];
    for (let i = 0; i < arr.length; i += 2) {
      everySecond[i] = arr[i];
    }
    return everySecond;
  }
  console.log({
    numbers,
    result: filterEverySecond(numbers)
  });
}
console.log('---');
console.groupEnd();

console.group('13. Atrinkti kas penktą elementą');
console.log('---');
{
  function filterEveryFifth(arr) {
    const everyFifth = [];
    for (let i = 0; i < arr.length; i += 5) {
      everyFifth[i] = arr[i];
    }
    return everyFifth;
  }
  console.log({
    numbers,
    result: filterEveryFifth(numbers)
  });
}
console.log('---');
console.groupEnd();


console.group('14. Sukurti funkciją, kuri ima masyvą ir atspausdina kiekvieną jo reikšmę atskirai: [0] => 64. (nieko negrąžina)');
console.log('---');
{
  function printArr() {
    let i = 0;
    while (i <= numbers.length - 1) {
      console.log(`[${[i]}] => ${numbers[i]}`);
      i++;
    }
  }
  printArr(numbers);
}
console.log('---');
console.groupEnd();

console.group('15. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų sumą');
console.log('---');
{
  function sumArr(arr) {
    let arrSum = 0;
    for (let i = 0; i < arr.length; i++) {
      arrSum += arr[i];
    }
    return arrSum;
  }

  console.log({
    numbers,
    result: sumArr(numbers)
  });
}
console.log('---');
console.groupEnd()

console.group('16. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų vidurkį');
console.log('---');
{
  function avgArr(arr) {
    let avgReturn = 0;
    for (let i = 0; i < arr.length; i++) {
      avgReturn = arr[i];
    }
    return avgReturn / arr.length;
  }

  console.log({
    numbers,
    result: avgArr(numbers)
  });
}
console.log('---');
console.groupEnd()

console.group('17. Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve.');
console.log('---');
{
  function arrMax(arr) {
    let maximum = [0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > maximum) {
        maximum = arr[i];
      }
    }
    return maximum;
  }

  console.log({
    numbers,
    result: arrMax(numbers)
  });
}
console.log('---');
console.groupEnd()

console.group('18. Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve.');
console.log('---');
{
  function arrMin(arr) {
    let minimal = [0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < minimal) {
        minimal = arr[i];
      }
    }
    return minimal;
  }

  console.log({
    numbers,
    result: arrMin(numbers)
  });
}
console.log('---');
console.groupEnd();