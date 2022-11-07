let element1=['hydrogen', 'H', 1.008];
let element2=['helium', 'He', 4.003];
let element26=['iron', 'Fe', 55.85];


let table=new Array();
table.push(element1);
table.push(element2);
table.push(element26);
console.log(table);


console.log(table[1], table[1][1]);
// in table[1] logs whole element1 in table[1][1] it logs the first element in element1

console.log(`mass  element1: ${table[0][2]}\nname  element2: ${table[1][0]}\nsymbol  element26: ${table[2][1]}`);
