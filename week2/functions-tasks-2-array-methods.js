// ----------------------Užduotys--------------------------
//Naudojant forEach, map, filter, reduce, pop, push ir kiti Array.prototype metodai
const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];

console.group('1. Padauginti masyvo narius iš 2 ir išsaugoti naujame masyve');
console.log('---');
{
  function mulArrBy2(arr) {
    return arr * 2;
  }

  const byToArr = numbers.map(mulArrBy2)

  console.log({
    numbers,
    result: byToArr
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('2. Pakelti masyvo narius kvadratu ir išsaugoti naujame masyve');
console.log('---');
{
  function powerArrBy2(arr) {
    return arr * arr;
  }

  const power = numbers.map(powerArrBy2);

  console.log({
    numbers,
    result: power
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('3. Padauginti masyvo narius iš jų index\'o (vietos masyve) ir išsaugoti naujame masyve');
console.log('---');
{
  function mulArrElementsByIndex(arr, index) {
    return arr * index;
  }

  const byIndex = numbers.map(mulArrElementsByIndex)

  console.log({
    numbers,
    result: byIndex
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('4. Atrinkti tiktai teigimų elementų masyvą');
console.log('---');
{
  function filterPositives(arr) {
    return arr > 0;
  }

  const plus = numbers.filter(filterPositives);

  console.log({
    numbers,
    result: plus
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('5. Atrinkti tiktai neigiamų elementų masyvą');
console.log('---');
{
  function filterNegatives(arr) {
    return arr < 0;
  }

  const minus = numbers.filter(filterNegatives);

  console.log({
    numbers,
    result: minus
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('6. Atrinkti tiktai lyginių skaičių masyvą');
console.log('---');
{
  function filterEquals(arr) {
    return arr % 2 === 0;
  }

  const filterPlus = numbers.filter(filterEquals);

  console.log({
    numbers,
    result: filterPlus
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('7. Atrinkti tiktai nelyginių skaičių masyvą');
console.log('---');
{
  function filterOdds(arr) {
    return arr % 2 === 1;
  }

  const filterNegative = numbers.filter(filterOdds);

  console.log({
    numbers,
    result: filterNegative
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group("8. Visas neigiamas vertes masyve padaryti teigiamomis ir išsaugoti į naują masyvą");
{
  //   let result = 0;
  //   if (arr > 0) {
  //     result = arr;
  //   } else {
  //     result = arr * -1;
  //   }
  //   return result
  // }

  function arrAbsoluteValues(arr) {
    return arr > 0 ? arr : arr * -1;
  }
}
const negativeToPlus = numbers.map(arrAbsoluteValues)

console.log('---');
console.log({
  numbers,
  result: negativeToPlus
});
console.log('---');

console.groupEnd();
console.log();

console.group('9. Pakelti visas masyvo reikšmes laipsniu \'index\' ir išsaugoti naujame masyve');
console.log('---');
{
  function powArrElementsByIndex(arr) {
    return arr.map(function (a, b) {
      return a **= b;
    });
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
    return arr % 1 === 0 && arr > 0;
  }

  const naturalNumber = numbers.filter(filterNaturals);

  console.log({
    numbers,
    result: naturalNumber
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('11. Suapvalinti visas masyvo reikšmes iki sveikų skaičių ir išsaugoti naujame masyve');
console.log('---');
{
  function absArrElements(arr) {
    return Math.round(arr);
  }

  const elementABS = numbers.map(absArrElements);

  console.log({
    numbers,
    result: elementABS
  });
}
console.log('---');
console.groupEnd()

console.group('12. Atrinkti kas antrą elementą');
console.log('---');
{
  function filterEverySecond(arr, arrNew) {
    return arr = arrNew % 2;
  }

  const second = numbers.filter(filterEverySecond);

  console.log({
    numbers,
    result: second
  });
}
console.log('---');
console.groupEnd();

console.group('13. Atrinkti kas penktą elementą');
console.log('---');
{
  function filterEveryFifth(arr) {
    let numberFifth = [];
    for (let i = 0; i < numbers.length; i += 5) {
      numberFifth.push(arr[i]);
    }
    return numberFifth;
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

  printArr(numbers)
}
console.log('---');
console.groupEnd();

console.group('15. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų sumą');
console.log('---');
{
  function sumArr(prievArr, arr) {
    return prievArr + arr;
  }

  const sumAllArr = numbers.reduce(sumArr, 0);

  console.log({
    numbers,
    result: sumAllArr
  });
}
console.log('---');
console.groupEnd()

console.group('16. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų vidurkį');
console.log('---');
{
  function avgArr(prievAvg, arr) {
    return prievAvg + arr;
  }

  const arrAvg = numbers.reduce(avgArr, 0) / numbers.length;

  console.log({
    numbers,
    result: arrAvg
  });
}
console.log('---');
console.groupEnd()

console.group('17. Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve.');
console.log('---');
{
  // function arrMax(prievMax, arr) {
  //   let result = 0;
  //   if (prievMax > arr) {
  //     result = prievMax;
  //   } else {
  //     result = arr;
  //   }
  //   return result
  // }

  function arrMax(prievMax, arr) {
    return prievMax > arr ? prievMax : arr
  }

  const maxArr = numbers.reduce(arrMax);

  console.log({
    numbers,
    result: maxArr
  });
}
console.log('---');
console.groupEnd()

console.group('18. Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve.');
console.log('---');
{
  // function arrMin(prievMin, arr) {
  //   let result = 0;
  //   if (prievMin < arr) {
  //     result = prievMin;
  //   } else {
  //     result = arr;
  //   }
  //   return result
  // }

  function arrMin(prievMin, arr) {
    return prievMin < arr ? prievMin : arr
  }

  const minArr = numbers.reduce(arrMin);

  console.log({
    numbers,
    result: minArr
  });
}
console.log('---');
console.groupEnd();