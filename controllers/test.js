// let arr = [1,2,2,3];
// const set = new Set(arr);
// console.log(set);

function greet(greets){
    console.log(`hii ${greets}, this is ${this.name}`);
}
let person ={
    name:"geethu"
}
console.log(greet.call(person,'vishnu'));