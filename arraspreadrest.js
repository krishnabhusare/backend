

let arr=["apple","orange","","mango","","lemon"];
console.log(arr.map(val=>{
    if(val==""){
        val="empty string";
    }
    return val;
}))