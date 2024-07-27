console.log("important meathods:")

// to add element in the array at the last:

let arr= [1 ,2 ,3 ,4];
arr.push(34);
console.log(arr);

// to remove the last value :

arr.pop();
console.log("after pop : "  , arr)


// add element in the starting of the array:

arr.unshift(91);
console.log("after the unshift : " , arr);

// remove elment in the starting of the array :

arr.shift();
console.log("after the shift : " , arr);

// slice meathod for array :
// slice dont change the real arr and takes the start index and end index 

let SlicedArr = arr.slice(1,5);
console.log("sliced arr : " , SlicedArr);

// remove element from the kth postiton and how many you want to delete :
// splice changes the real arr and removes the elements from the array.
// splice : Input -> start , end index 

arr.splice(2,2);
console.log("after using splice : ",arr);

// Indexof  - find the index of the element in the array.
console.log("index of 5: " , arr.indexOf(1));
console.log("index of 30" , arr.indexOf(30));

// includes :
console.log("is element present : " , arr.includes(2));

// varName : camel casing , like first letter than large letter ;

// sorting in js arr
console.log("arr2 is created ");
let arr2 = [2 , 5 ,1 , 7 , 3];
arr2.sort();

console.log(arr2);

// Reverse :

arr2.reverse();

console.log(arr2);

// join in js: doesnt change the real arr same like the slice one

 let arrjoin = arr2.join(" - ");
 console.log(arrjoin);

 // concat : add two arrays: 

 let arr3= [1,2,3];
 let arr4 = [4,5,6];
 let newarr = arr3.concat(arr4);
 console.log(newarr);








