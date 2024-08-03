//destructuring- when we need to acces value inside object or arr we dont need evry 
 // to use obj.val   we can direct  add value by using declaring them.

const obj1={
    "key1":1,
    key2:2,
    key3:1000
}
const {key1,key3}={...obj1};
console.log(key1,key3);  //  1  1000

const arr=["val1","val2"];
const [v1,v2]=arr;
console.log(v1); //val1
console.log(v2);  //val2


const obj2={keys1:1,keys2:23,keys3:299};
let {keys1,keys3}=obj2;
keys1=25;
keys3=1000;
console.log(obj2.keys1,obj2.keys3);  //1  299

