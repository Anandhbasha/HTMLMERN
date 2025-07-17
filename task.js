// // 1.Palindrome Checker*

// let str = "madam";
// let isPalindrome = true;

// for (let i = 0; i < str.length / 2; i++) {
//   if (str[i] !== str[str.length - 1 - i]) {
//     isPalindrome = false;
//     break;
//   }
// }
// console.log(isPalindrome ? "Palindrome" : "Not Palindrome");




// // 2.Number Diamond Pattern (N = 5)*

// let New = 5;
// for (let i = 1; i <= New; i++) {
//   let line = " ".repeat(New - i);
//   for (let j = 1; j <= i; j++) line += j;
//   for (let j = i - 1; j >= 1; j--) line += j;
//   console.log(line);
// }




// // 3.Character Frequency Count (no Map or Object)*
// let str1 = "aAbcaAB";
// let checked = "";

// for (let i = 0; i < str1.length; i++) {
//   let count = 0;
//   let ch = str1[i];

//   let alreadyChecked = false;
//   for (let c = 0; c < checked.length; c++) {
//     if (checked[c] === ch) {
//       alreadyChecked = true;
//       break;
//     }
//   }

//   if (!alreadyChecked) {
//     for (let j = 0; j < str1.length; j++) {
//       if (str[j] === ch) count++;
//     }
//     console.log(ch + " → " + count + " time(s)");
//     checked += ch;
//   }
// }




// // 4. Find Duplicate Characters (no Set or Map)
// let string = "aAbcABCabc";
// let printed = "";

// for (let i = 0; i < string.length; i++) {
//   let count = 0;
//   let ch = string[i];

//   let alreadyPrinted = false;
//   for (let c = 0; c < printed.length; c++) {
//     if (printed[c] === ch) {
//       alreadyPrinted = true;
//       break;
//     }
//   }

//   if (!alreadyPrinted) {
//     for (let j = 0; j < string.length; j++) {
//       if (str[j] === ch) count++;
//     }
//     if (count > 1) console.log(ch);
//     printed += ch;
//   }
// }



// //5. Print Number in Words*


// let num = 123;
// let words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
// let numStr = num.toString();

// let result = "";
// for (let i = 0; i < numStr.length; i++) {
//   result += words[parseInt(numStr[i])] + " ";
// }
// console.log(result.trim());



// // 6. Hollow Square Pattern (N = 5)


// let Num1 = 5;
// for (let i = 0; i <Num1; i++) {
//   let line = "";
//   for (let j = 0; j < Num1; j++) {
//     if (i === 0 || i === Num1 - 1 || j === 0 || j === Num1 - 1) line += "*";
//     else line += " ";
//   }
//   console.log(line);
// }


// // 7.Rotated Number Pattern*


// let Num = 5;
// for (let i = 0; i < Num; i++) {
//   let line = "";
//   for (let j = 0; j < Num; j++) {
//     line += ((i + j) % Num + 1);
//   }
//   console.log(line);
// }


// // 8. Rotate Array Left by K Positions


// let arr = [1, 2, 3, 4, 5];
// let K = 2;
// let rotated = [];

// for (let i = K; i < arr.length; i++) {
//   rotated.push(arr[i]);
// }
// for (let i = 0; i < K; i++) {
//   rotated.push(arr[i]);
// }
// console.log(rotated);


// // 9. Find Second Largest Element 


// leray= [5, 7, 2, 9, 6];
// let max = leray[0];
// for (let i = 1; i < leray.length; i++) {
// //   if (leray[i] > max) max = leray[i];
// }

// let second = Number.MIN_SAFE_INTEGER;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > second && arr[i] < max) second = arr[i];
// }
// console.log("Second Largest:", second);


// // 10. Count Frequency of Each Element in Array

// let arr4 = [1, 2, 2, 3, 1];
// let checked1 = [];

// for (let i = 0; i < arr4.length; i++) {
//   let val = arr4[i];
//   let found = false;

//   for (let c = 0; c < checked1.length; c++) {
//     if (checked1[c] === val) {
//       found = true;
//       break;
//     }
//   }

//   if (!found) {
//     let count = 0;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] === val) count++;
//     }
//     console.log(val + " → " + count + " time(s)");
//     checked.push(val);
//   }
// }



// // 11. Shift All Zeros to End


// let arr2 = [1, 0, 2, 0, 3];
// let result2 = [];

// let zeroCount = 0;
// for (let i = 0; i < arr2length; i++) {
//   if (arr2[i] !== 0) result2.push(arr2[i]);
//   else zeroCount++;
// }
// for (let i = 0; i < zeroCount; i++) {
//   result2.push(0);
// }
// console.log(result2);



// //  12. Add Digits of Each Number in Array

// let arr1 = [10, 23, 45, 99, 100];
// let result1 = [];

// for (let i = 0; i < arr1.length; i++) {
//   let num = arr1[i];
//   let sum = 0;
//   for (; num > 0; num = Math.floor(num / 10)) {
//     sum += num % 10;
//   }
//   result1.push(sum);
// }
// console.log(result1);

