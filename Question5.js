console.log(str.split());
console.log(str.split('e'));
console.log(str.split(' '));
console.log(str.split('  '));


let arr = ['B', 'n', 'n', 5];
console.log(arr.join());
console.log(arr.join('a'));
console.log(arr.join('  '));
console.log(arr.join(' '));


let str1 = 'water,space suits,food,plasma sword,batteries';
let str2=str1.split(',').sort().join(',')
console.log(str2);
