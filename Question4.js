let holdCabinet1=['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2=['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];
var totallen=holdCabinet1.length+holdCabinet2.length;

//a
console.log(holdCabinet1.concat(holdCabinet2));
console.log("");
//b
console.log(holdCabinet1.slice(0,2));
console.log(holdCabinet2.slice(2, 4));
var totallen2=holdCabinet1.length+holdCabinet2.length;
console.log("");

//c
holdCabinet1.reverse();
holdCabinet2.sort();
console.log(holdCabinet1);
console.log("");
console.log(holdCabinet2);
