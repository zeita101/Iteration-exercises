//Exercise #1
//Using map, write a function that takes an array of numbers
//and makes them strings

// const intoStr = (arr) => {
//     let newArr = arr.map(i => {
//         i.toString();
//         console.log(typeof i);
//     })
//     return newArr;
// }

// intoStr([1, 2, 3, 4, 5])

let numbers = [1, 2, 3, 4, 5,];
function convertToStrings(arr) {
    let arrOfStrings = arr.map(String);
    retuen arrOfStrings;
}
console.log(convertToStrings(numbers));

//Exercise #2
//You must use forEach for this exercise
//Write a function that accepts an array and returns a new array
//with all the values in the array passed to the function doubled

function doubled (arr) {
    let newArr = [];
  
    arr.forEach(index => {
      let double = index * 2;
      newArr.push(double);
    })
    return newArr;
  }
  
  doubled([1,2,3,4])

//Exercise #3
//Write a function called firstAndLast which accepts
//an array of strings and returns a new array with
//only the first and last character of each string
//Example: ['winning', 'tomato'] => ['wg', 'to']
//hint: forEach show be used here

function firstAndLast(arr) {
    let newArr = [];
  
    arr.forEach(index => {
      let firstIndex = index.charAt(0);
      let lastIndex = index.charAt(index.length-1);
  
      newArr.push(`${firstIndex}${lastIndex}`)
    })
  
    return newArr;
  }
  
  firstAndLast(['Zipporah', 'Tinesha', 'Shafee'])

//Bonus:
//Write a for loop that outputs this:
// 1 1 1 2 2 2 3 3 3 4 4 4

let arr = [];

for (i = 1; i <= 4; i++) {

  arr.push(i + " " + i + " " + i);
}


console.log(arr.join(" "));
