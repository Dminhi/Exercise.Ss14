// Bài tập cơ bản:
// 1. Viết một hàm JavaScript để tính tổng của hai số.

// 2. Viết một hàm JavaScript nhận vào một mảng số nguyên và trả về tổng của các số đó.

// 3. Viết một hàm JavaScript để kiểm tra xem một số có phải là số nguyên tố hay không.

//. 4. Viết một hàm JavaScript để đảo ngược một chuỗi.

// Bài tập nâng cao:
// 5. Viết một hàm JavaScript nhận vào một mảng các số và trả về một mảng mới chỉ chứa số chẵn.

// 6. Viết một hàm JavaScript nhận vào một chuỗi và trả về số lượng từ trong chuỗi.

// 7. Viết một hàm JavaScript nhận vào một mảng các chuỗi và trả về một mảng mới chỉ
// chứa các chuỗi đã được viết hoa.

// Viết một hàm JavaScript nhận vào một mảng số và trả về mảng mới
// chứa các số đã được sắp xếp theo thứ tự tăng dần.

// Viết một hàm JavaScript nhận vào một số nguyên dương và trả về mảng các số nguyên tố nhỏ hơn số đó.

// Bài 1

// const sum = (a, b) => {
//   return a + b;
// };
// Bài 2

// const array = [4, 7, 2, 7, 4, 5];
// const sumInteger = (array) => {
//   let total = 0;
//   for (i = 0; i < array.length; i++) {
//     total += array[i];
//   }
//   return total;
// };
// console.log(sumInteger(array));

// Bài 3
// let Prime = +prompt("Mời bạn nhập số");

// const isPrime = (Prime) => {
//   if (Prime <= 1) {
//     console.log(Prime + " Không là số nguyên tố");
//     return;
//   }

//   let check = true;
//   for (let i = 2; i <= Math.sqrt(Prime); i++) {
//     if (Prime % i === 0) {
//       check = false;
//       break;
//     }
//   }
//   if (check) {
//     console.log(Prime + " Là số nguyên tố");
//   } else {
//     console.log(Prime + "Không là số nguyên tố ");
//   }
// };
// isPrime(Prime);

// Bài 4:

// const string = "Minh";
// const reverse = (string) => {
//   let reverse = string.split("").reverse().join("");
//   return reverse;
// };
// console.log(reverse(string));

// Bài 5:

// let number = prompt("Mời bạn nhập số");
// let newNumber = number.split(",");
// const numberEven = (number) => {
//   let evenNumber = [];

//   for (i = 0; i < number.length; i++) {
//     if (number[i] % 2 === 0) {
//       evenNumber.push(parseInt(number[i]));
//     }
//   }
//   return evenNumber;
// };
// console.log(numberEven(number));

// Bài 6:

// let string = prompt("Nhập chuỗi");
// const stringLength = (string) => {
//   return string.length;
// };
// console.log(stringLength(string));

// Bài 7: // 7. Viết một hàm JavaScript nhận vào một mảng các chuỗi và trả về một mảng mới chỉ
// chứa các chuỗi đã được viết hoa.

// let string = [];
// let namefull = "a";
// do {
//   namefull = prompt();
//   if (namefull == "0") {
//     continue;
//   }

//   string.push(namefull);
// } while (namefull != "0");
// let newString = [];
// for (let i = 0; i < string.length; i++) {
//   newString.push(string[i].toUpperCase());
// }
// console.log(newString);

// let string = "NguyenDuyMinh";
// let newarray = string.split("");
// const tookUpperCase = (string) => {
//   let upperCase = [];
//   for (i = 0; i < newarray.length; i++) {
//     if (newarray[i] === newarray[i].toUpperCase()) {
//       upperCase.push(newarray[i]);
//     }
//   }
//   return upperCase;
// };

// console.log(tookUpperCase(string));

// const number = [5, 32, 7, 3, 6, 243, 44];
// const increasingNumber = (number) => {
//   let increasing = [];
//   for (i = 0; i < number.length; i++) {
//     if (number[i] > number[i+1]) {
//       increasing.push(number[i+1]);
//     }
//   }
//   return increasing;
// };

// console.log(increasingNumber(number));

// for (i = 0; i < number.length - 1; i++) {
//   for (j = i + 1; j < number.length; j++) {
//     let z = "";
//     if (number[i] > number[j]) {
//       z = number[i];
//       number[i] = number[j];
//       number[j] = z;
//     }
//   }
// }
// console.log(number.join(","));

// 8. Viết một hàm JavaScript nhận vào một số nguyên dương và trả về mảng các số nguyên tố nhỏ hơn số đó.

// let number = +prompt("Mời nhập số");
// const positiveInteger = (number) => {
//   if (number <= 1) {
//     return false;
//   }
//   for (let i = 2; i < Math.sqrt(number); i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

// const lessThanNumber = (number) => {
//   let lessNumber = [];
//   for (i = 2; i < number; i++) {
//     if (positiveInteger(i)) {
//       lessNumber.push(i);
//     }
//   }
//   return lessNumber;
// };
// const list = lessThanNumber(number);
// console.log(list.join(","));
