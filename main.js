// const n = prompt("n sonini kiriting: ");
// const k = prompt("k sonini kiriting");

// function calculateSum(n, k) {
//   let sum = 0;

//   for (let i = 1; i <= n; i++) {
//     let term = 1;

//     for (let j = 1; j <= k; j++) {
//       term *= i;
//     }

//     sum += term;
//   }

//   return sum;
// }

// alert(calculateSum(n, k));

// function bubbleSort(arr) {
//   let len = arr.length;
//   for (var i = 0; i < len; i++) {
//     for (var j = 0; j < len - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// let numbers = [5, 3, 8, 2, 1];
// console.log(bubbleSort(numbers));

// const a = [12, 2, 3, 35, 33, 33, 44, 44, 55, 37];
// const b = [23, 34, 56, 68, 33, 35, 44, 55, 13, 24];

// const addMassive = (a, b) => {
//   for (let i = 0; i < b.length; i++) {
//     if (!a.includes(b[i])) {
//       a.push(b[i]);
//     }
//   }
//   return a;
// };

// console.log(addMassive(a, b));

// function flatArray(arr) {
//   let flattened = [];

//   arr.forEach(function (item) {
//     if (Array.isArray(item)) {
//       flattened = flattened.concat(flatArray(item));
//     } else {
//       flattened.push(item);
//     }
//   });

//   return flattened;
// }

// let nestedArray = [[1, 2, 3], [4, [5, [234, 32423], 6]], 7, [8, [9, 10]]];
// console.log(flatArray(nestedArray));

// const a = [12, 2, 3, 35, 33, -10, 55, 33, 44, 44, 55, 37];
// let min;
// for (let i = 0; i < a.length; i++) {
//   min = a[i];
//   for (let j = 0; j < a.length; j++) {
//     if (min > a[j]) {
//       min = a[j];
//     }
//   }
// }
// console.log(min);

// function bubbleSort(arr) {
//   let len = arr.length;
//   for (var i = 0; i < len; i++) {
//     for (var j = 0; j < len - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// let numbers = [5, 3, 8, 2, 1];
// console.log(bubbleSort(numbers));

// function combineNumbers(string) {
//   let numbers = string.match(/\d+/g);
//   let combinedNumber = parseInt(numbers.join(""));
//   return combinedNumber;
// }

// let string = "slom 234 sd11111bfuh7873";
// let result = combineNumbers(string);
// console.log(result);

function satrniMassivgaAyir(satr) {
  var massiv = Array.from(satr);
  console.log(massiv);
}

var satr = prompt("Iltimos, bir satr kiriting: ");
satrniMassivgaAyir(satr);
