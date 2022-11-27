console.groupCollapsed('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
  function returnFirst(array) {
    return array[0];
  }
  const numbers = [1, 2, 3];
  const res1 = returnFirst(numbers);
  const resz1 = returnFirst(['vienas', 'du', 'tris']);
  console.log({ res1, reszz1: resz1 });
}
console.groupEnd();

console.groupCollapsed('2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.');
{
  function deleteFirstArrayElenent(array) {
    const firstElement = array[0];
    delete array[0];
    for (let i = 1; i < array.length; i++) {
      array[i - 1] = array[i];
    }
    array.length = array.length - 1;
    return firstElement;
  }

  const res2 = [1, 2, 3, 4, 5];
  console.log('numbers before removal', res2);
  const firstElement = deleteFirstArrayElenent(res2);
  console.log('numbers after removal', res2);
  console.log('removed element', firstElement);
}
console.groupEnd();

console.groupCollapsed('3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  function returnArrayLastElement(array) {
    return array[array.length - 1]
  }
  const res3 = returnArrayLastElement([1, 2, 3, 4])
  const resz3 = returnArrayLastElement([1, 2, 3, 4, 5, 6, 7, 8])
  console.log([res3, resz3]);
}
console.groupEnd();

console.groupCollapsed('4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.');
{
  function deleteElement(array) {
    let lastElemetDel = array[array.length - 1];
    array.length = array.length - 1;
    return lastElemetDel;
  }
  const res4 = deleteElement([1, 2, 3]);
  const resz4 = deleteElement(['vienas', 'du', 'trys']);
  console.log({ res4: res4, resz4: resz4 });
}
console.groupEnd();

console.groupCollapsed('5. Parašykite funkciją, kuri grąžina elementų kiekį masyve');
{
  function returnAll(array) {
    return array.length
  }
  const res5 = [1, 2, 3, 4, 5,];
  const returnAllElements = returnAll(res5);
  console.log('returnAll', returnAllElements);
}
console.groupEnd();

console.groupCollapsed('6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  function returnArrayLast(array) {
    return array.length - 1
  }
  const res6 = returnArrayLast([1, 2, 3, 4])
  const resz6 = returnArrayLast([1, 2, 3, 4, 5, 6, 7, 8])
  console.log('returnArrayLast', [res6, resz6]);
}
console.groupEnd();

console.groupCollapsed('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
  function ColumnAllNumbers(array) {
    for (let i = 0; i <= array.length - 1; i++) { console.log(i); }
  }
  ColumnAllNumbers([0, 1, 2, 3, 4]);
  console.log();
}

console.groupEnd();

console.groupCollapsed('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
  function AllElements() {
    const res8 = ['vienas', 2, 'trys', 4]
    for (let i = 0; i < res8.length; i++) {
      console.log(res8[i])
    }
  }
  AllElements();
}
console.groupEnd();

console.groupCollapsed('9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  function allIndexElementsLine(array) {
    let i = 0;
    while (i <= array.length - 1) {
      console.log(`[${[i]}] => ${array[i]}`);
      i++;
    }
  }
  const res9 = [1, 2, 3, 4, 5];
  console.log('[0] =>', '[1] =>', '[2] =>');
  allIndexElementsLine(res9);
}
console.groupEnd();

console.groupCollapsed('10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  function reverseDown(array) {
    let i = array.length - 1;
    while (i >= 0) {
      { console.log(array[i]); };
      i--;
    }
  }
  const res10 = [0, 1, 2, 3, 4, 5];
  console.log('reverseDown');
  reverseDown(res10);

}
console.groupEnd();

console.groupCollapsed('11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  function printIndex(arr) {
    let resultRow = '';
    for (let i = 0; i < arr.length; i++) {
      const isLastNot = i < arr.length - 1;
      resultRow += arr[i]
      if (isLastNot) {
        resultRow += ', ';
      }
    }
    console.log(resultRow);
  }
  const res11 = [0, 1, 2, 3]
  const resz11 = ['trys', 'du', 'vienas'];
  printIndex(res11);
  printIndex(resz11);
}
console.groupEnd();

console.groupCollapsed('12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48');
{
  function printIndex(arr) {
    let resultLineElement = '';
    for (let i = 0; i < arr.length; i++) {
      const numbers = i < arr.length - 1;
      resultLineElement += arr[i]
      if (numbers) {
        resultLineElement += ', ';
      }
    }
    console.log(resultLineElement);
  }
  const res12 = [-111, 2, -9, 48]
  printIndex(res12);
}
console.groupEnd();

console.groupCollapsed('13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17 [1]=>8 [2]=>88 ..
{
  function printIndex(array) {
    let resultLineElementScore = '';
    for (let i = 0; i < array.length; i++) {
      const numbers = i < array.length - 1;
      resultLineElementScore += `[${[i]}]=>${array[i]}`;
      if (numbers) {
        resultLineElementScore += ' ';
      }
    }
    console.log(resultLineElementScore);
  }
  const res13 = [17, 8, 88, 1448]
  printIndex(res13);
}
console.groupEnd();