let numbers = [46, 1, 4, 78, 9, 5, 1, 4, 5, 5];
// indeksai:    0  1  2   3  4  5  6  7  8  9
let nouns = ['apple', 'sister', 'hammer', 'sun', 'table', 'sky', 'lake' , 'picture' , 'wall' ];
// indeksai:    0       1         2        3       4        5       6        7           8
let helpers = ['in', 'with', 'on', 'my', 'is', 'a', 'the', ' '];
// indeksai:    0       1     2      3     4    5     6     7  

// Užduotis: Sudarykite šiuos sakinius ir išsaugokite kitamuosiuose:
//    sentence1, sentence2, ... , sentenceN;  N - natūralieji skaičiai.
// 1. my sister is in the lake
let sentence1 = helpers[3] + helpers[7] + nouns[1] + helpers[7] + helpers[4] + helpers[7] + helpers[0] + helpers[7] + helpers[6] + helpers[7] + nouns[6];
//                'my'         ' '        'sister'      ' '          'is'          ' '         'in'          ' '         'the'         ' '       'lake'                                                                               
console.log(sentence1);
// 2. hammer is on the table
// 3. sun is in the sky
// 4. apple is with my sister
// 5. Papildyti masyvą žodžiais, ir sukurti dar 3 +-logiškus sakinius.
let sentence2 = nouns[2] + helpers[7] + helpers[4] + helpers[7] + helpers[2] + helpers[7] + helpers[6] + helpers[7] + nouns[4];
//              'hammer'     ' '          'is'          ' '         'on'          ' '         'the'         ' '        'table'
console.log(sentence2);
let sentence3 = nouns[3] + helpers[7] + helpers[4] + helpers[7] + helpers[0] + helpers[7] + helpers[6] + helpers[7] + nouns[5];
//               'sun'         ' '          'is'          ' '        'in'          ' '         'the'         ' '       'sky'
console.log(sentence3);
let sentence4 = nouns[0] + helpers[7] + helpers[4] + helpers[7] + helpers[1] + helpers[7] + helpers[3] + helpers[7] + nouns[1];
//              'apple'        ' '          'is'          ' '       'with'         ' '         'my'        ' '        'sister'
console.log(sentence4);
//5 apple is on the table
let sentence5 = nouns[0] + helpers[7] + helpers[4] + helpers[7] + helpers[2] + helpers[7] + helpers[6] + helpers[7] + nouns[4];
//              'apple'     ' '          'is'          ' '         'on'          ' '         'the'         ' '        'table'
console.log(sentence5);
//6 hammer is in the lake
let sentence6 = nouns[2] + helpers[7] + helpers[4] + helpers[7] + helpers[0] + helpers[7] + helpers[6] + helpers[7] + nouns[6];
//              'hammer'     ' '          'is'          ' '         'in'          ' '         'the'         ' '       'lake'
console.log(sentence6);
//7 my sister is on the sky
let sentence7 = helpers[3] + helpers[7] + nouns[1] + helpers[7] + helpers[4] + helpers[7] + helpers[2] + helpers[7] + helpers[6] + helpers[7] + nouns[5];
//                'my'          ' '       'sister'      ' '         'is'          ' '         'on'          ' '          'the'       ' '         'sky'
console.log(sentence7);
let sentence8 = nouns[7] + helpers[7] + helpers[4] + helpers[7] + helpers[2] + helpers[7] + helpers[6] + helpers[7] +  nouns[8];
//             'picture'      ' '         'is'        ' '           'on'          ' '         'the'          ' '        'wall'
console.log(sentence8);