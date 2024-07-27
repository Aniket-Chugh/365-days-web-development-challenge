// question 1;


// question : 
// 1. add a new string in the 1st index , like after apple ..
// 2. remove the 3rd element from the array.
// 3. do by recursion.
//4. join the elements then with commas 


function advancedManipulation(words){
   let firstElement = words.shift();
   words.unshift("new");
words.unshift(firstElement);
// remove the 3rd elmenent , we will use the slice in js
      words.splice(2,1);


      // join ->

      let joinarr = words.join(",")
      return joinarr;

}


let words = ["apple" , "banana" , "cherry" , "date"];
let result = advancedManipulation(words);
console.log(result);
