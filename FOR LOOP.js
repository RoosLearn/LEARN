// for loop --- count 1 - 10

//for (let i=0; i<10; i++) {
    //console.log(i+1);
//}

// example 2

//var array = [1,3,5,7];
//for(let i=0; i<4; i++) {
    //console.log(array[i]);
//}

// for ---of loop
//var array = [1,3,5,7];
//for(const i of array) {
  //  console.log(i);
//}
// FOR---IN LOOP (for strings only)

var obj = {name:"panda", age : "three"}

for (const i in obj) {
    console.log(obj[i]);
}