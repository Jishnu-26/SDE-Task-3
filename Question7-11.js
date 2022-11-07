
//7
let people = ["Greg", "Mary", "Devon", "James"];


for(let i of people){
    console.log(i);
}


people.shift();
console.log(people);


people.pop();
console.log(people);


people.unshift("Matt");
console.log(people);


people.push("Jishnu");
console.log(people);


for(let i in people){
    if(people[i]!="Mary"){
        console.log(people[i]);
    }
    else{
        console.log(people[i]);
        break;
    }
    
}


let copyPeople=people.slice(2);
console.log(copyPeople);

//8
console.log(people.indexOf("Mary"));

//9
console.log(people.indexOf("Foo"));

//10
people.splice(people.indexOf("Devon"), 0, "Elizabeth", "Artie");
console.log(people);

//11
let withBob=people;
withBob=withBob.concat(["Bob"]);
console.log(withBob);
