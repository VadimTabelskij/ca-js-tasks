// ------------------------------------ 1 Dalis ------------------------------------ 
// 1. Sukurti objektų(žmonių) masyvą su 8 elementais, kuriame būtų:
//   - name
//   - surname
//   - age
//   - height
//   - weight
//   - sex
// 2. Panaudojant array.forEach:
//   - Atspausdinti kiekvieną elementą
//   - Atspausdinti kiekvieno elemento pilną vardą
//   - Atspausdinti kiekvieno elemento kūno masės indeksą
// 3. Panaudojant array.filter atrinkti į naują masyvą ir po to atspausdinti žmones:
//   - kurių vardas ilgesnis nei 6 simboliai
//   - kurių svoris didesnis nei 80kg
//   - kurie aukštesni nei 185cm
// 4. Panaudojant array.map atrinkti į naują masyvą ir po to atspausdinti
//   - ūgius
//   - svorius
//   - ūgius, svorius ir amžius : [{height, weight, age}, ...]
//   - KMI indeksus
//   - KMI indeksus ir amžius
// 5. Panaudojant array.reduce suskaičiuoti ir po to atspausdinti
//   - svorių vidurkį
//   - ūgio vidurkį

const people = [
    {
        name: 'Jonas',
        surname: 'Jonaitis',
        age: 26,
        height: 1.76,
        weight: 92,
        sex: 'male',
    },
    {
        name: 'Severija',
        surname: 'Piktutytė',
        age: 36,
        height: 1.36,
        weight: 42,
        sex: 'female',
    },
    {
        name: 'Valdas',
        surname: 'Vilktorinas',
        age: 16,
        height: 1.66,
        weight: 56,
        sex: 'male',
    },
    {
        name: 'Virginijus',
        surname: 'Uostauskas',
        age: 32,
        height: 1.87,
        weight: 62,
        sex: 'male',
    },
    {
        name: 'Samanta',
        surname: 'Uostauskienė',
        age: 18,
        height: 1.56,
        weight: 72,
        sex: 'female',
    },
    {
        name: 'Janina',
        surname: 'Stalautinskienė',
        age: 72,
        height: 1.26,
        weight: 87,
        sex: 'female',
    },
    {
        name: "Serbentautas",
        surname: "Bordiūras",
        age: 12,
        height: 1.33,
        weight: 63,
        sex: "male",
    },
    {
        name: "Margis",
        surname: "Bradona",
        age: 56,
        height: 1.93,
        weight: 99,
        sex: "male",
    },
];

console.log("------------------------------------ 1 Dalis ------------------------------------")

console.groupCollapsed("1.Sukurti objektų(žmonių) masyvą su 8 elementais, kuriame būtų: <name> <surname> <age> <height> <weight> <sex>.");
{
    console.table(people);
}
console.groupEnd();

console.groupCollapsed("2. Panaudojant array.forEach:Atspausdinti",
    "\nkiekvieną elementą",
    "\nkiekvieno elemento pilną vardą",
    "\nkiekvieno elemento kūno masės indeksą (KMI)",);

{
    console.log("------------------2.1------------------------");

    people.forEach((person) => console.log(person));

    console.log("------------------2.2------------------------");

    people.forEach((person) => console.log(`${person.name} ${person.surname}`));

    console.log("------------------2.3------------------------");

    people.forEach((person) => console.log(`KMI: ${person.name} ${person.surname} - ${(
        person.weight / (person.height ** 2))
        .toFixed(2)}`));

}
console.groupEnd();

console.groupCollapsed("3. Panaudojant array.filter atrinkti į naują masyvą ir po to atspausdinti žmones:",
    "\nkurių vardas ilgesnis nei 6 simboliai",
    "\nkurių svoris didesnis nei 80kg",
    "\nkurie aukštesni nei 185cm");
{
    console.log("------------------3.1------------------------");

    const longName = people.filter(person => person.name.length > 6);
    console.table(longName);

    console.log("------------------3.2------------------------");

    const weightMore80 = people.filter(person => person.weight > 80);
    console.table(weightMore80);

    console.log("------------------3.3------------------------");

    const heightMore185 = people.filter(person => person.height > 1.85);
    console.table(heightMore185);

}
console.groupEnd();

console.groupCollapsed("4. Panaudojant array.map atrinkti į naują masyvą ir po to atspausdinti:",
    "\nūgius",
    "\nsvorius",
    "\nūgius, svorius ir amžius: [{height, weight, age}, ...]",
    "\nKMI indeksus",
    "\nKMI indeksus ir amžius");

const newArrayPeople = [...people];

console.log("------------------4.1------------------------");

console.log(newArrayPeople.map((person) => `Height: ${person.height}`));

console.log("------------------4.2------------------------");

console.log(newArrayPeople.map((person) => `Weight: ${person.weight}`));

console.log("------------------4.3------------------------");

console.log(newArrayPeople.map(({ height, weight, age }) => ({ height, weight, age })));

console.log("------------------4.4------------------------");

newArrayPeople.map((person) => console.log(`KMI: ${person.name} ${person.surname} - ${(
    person.weight / (person.height ** 2))
    .toFixed(2)}`));

console.log("------------------4.5------------------------");

newArrayPeople.map((person) => console.log(`KMI: ${person.name} ${person.surname} - ${(
    person.weight / (person.height ** 2))
    .toFixed(2)}`,
    `AGE: ${person.age}`));

console.groupEnd();

console.groupCollapsed("5. Panaudojant array.reduce suskaičiuoti ir po to atspausdinti: svorių vidurkį, ūgio vidurkį.");
{
    console.log("------------------5.1------------------------");

    const averageWeight = people
        .reduce((sum, { weight }) => sum + weight / people.length, 0)
        .toFixed(2);
    console.log(`The Average Weight:`, averageWeight, 'kg');

    console.log("------------------5.2------------------------");

    const averageHeight = people
        .reduce((sum, { height }) => sum + height / people.length, 0)
        .toFixed(2);
    console.log(`The Average Height:`, averageHeight, 'm');

}
console.groupEnd();


// ------------------------------------ 2 Dalis ------------------------------------ 
// 0. Pasinaudojant 1 dalies elementų masyvu, sukurti Person prototipų(Class) masyvą:
//     Person klasėje:    
//     - sukurti vidinį metodą: getBMI();     // suskaičiuoja kūno masės indeksą
//     - sukurti vidinį metodą: toString();   // atspausdina žmogų su esamom savybėm
// 1. Atrinkti moteris, kuriuos jaunesnės nei 20 metų ir svoris didesnis nei 70kg 
// 2. Atrinkti vyrus, kurie vyresni nei 25 metai ir KMI mažesnis nei 18,5
// 3. Atrinkti vaikus, su antsvoriu (KMI > 30)
// 4. Atrinkti pensininkus, su antsvoriu (KMI > 30)
// 5. Atrinkti visus, kieno KMI nepatenka į rėžius [18.5; 25]

class Person {
    name;
    surname;
    age;
    sex;
    height;
    weight;

    constructor({ name, surname, age, sex, height, weight }) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.sex = sex;
        this.height = height;
        this.weight = weight;
    }

    getKMI() {
        return (this.weight / this.height ** 2).toFixed(2);
    }

    toString() {
        return `FullName: ${this.name} ${this.surname}, age: ${this.age}, sex: ${this.sex}, height: ${this.height}, weight: ${this.weight}`;
    }
}

let human;

console.log("\n------------------------------------ 2 Dalis ------------------------------------")

console.groupCollapsed("0. Pasinaudojant 1 dalies elementų masyvu, sukurti Person prototipų(Class) masyvą:",
    "\nPerson klasėje:",
    "\nsukurti vidinį metodą: getKMI(); suskaičiuoja kūno masės indeksą",
    "\nsukurti vidinį metodą: toString() atspausdina žmogų su esamom savybėm");
{
    console.log("------------------0.1------------------------");
    human = people.map((person) => new Person(person));
    console.dir(Person);

    console.log("------------------0.2------------------------");
    human.forEach((person) => console.log(`KMI: ${person.name} ${person.surname} - ${person.getKMI()}`));

    console.log("------------------0.3------------------------");
    human.forEach((person) => console.log(person.toString()));
}
console.groupEnd();

console.groupCollapsed("1. Atrinkti moteris, kuriuos jaunesnės nei 20 metų ir svoris didesnis nei 70kg");
{
    const youngerFemaleWeighMore70 = human
        .filter(person =>
            person.sex === "female"
            && person.age < 20
            && person.weight > 70);

    console.table(youngerFemaleWeighMore70);
}
console.groupEnd();

console.groupCollapsed("2. Atrinkti vyrus, kurie vyresni nei 25 metai ir KMI mažesnis nei 18,5");
{
    const menOver25BmiLess18 = human
        .filter(person =>
            person.sex === "male"
            && person.getKMI() < 18, 5);

    console.table(menOver25BmiLess18);
}
console.groupEnd();

console.groupCollapsed("3. Atrinkti vaikus, su antsvoriu (KMI > 30)");
{
    const kidsOver60Kg = human
        .filter((person) =>
            person.age <= 17
            && person.getKMI() > 30);

    console.table(kidsOver60Kg);
}
console.groupEnd();

console.groupCollapsed("4. Atrinkti pensininkus, su antsvoriu (KMI > 30)");
{
    const pensioners = human
        .filter((person) =>
            person.age >= 65
            && person.getKMI() > 30);
    console.table(pensioners);
}
console.groupEnd();

console.groupCollapsed("5. Atrinkti visus, kieno KMI nepatenka į rėžius [18.5; 25]");
{
    const allKmiMiddle = human.filter((person) => person.getKMI() < 18.5 || person.getKMI() > 25);
    console.table(allKmiMiddle);
}
console.groupEnd();

// ------------------------------------ 3 Dalis -------------------------------------
// Peržiūrėti video:
// https://www.youtube.com/watch?v=JaMCxVWtW58

// Geras Žaidimas pasitreniravimui:
//   https://www.typing.com/student/game/tommyq
// Rekomenduoju pasikartoti greitasias komandas