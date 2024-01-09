//Viết một hàm JavaScript để viết hoa ký tự đầu tiên của mỗi từ trong một chuỗi.
let input = 'js string exercises';
//tách chuỗi
const arrayInput = input.split(" ");
//viết hoa phần tử 0
const firstCharacter0 = arrayInput[0].slice(0,1);
const array0 = firstCharacter0.toUpperCase() + arrayInput[0].substring(1);
//viết hoa phần tử 1
const firstCharacter1 = arrayInput[1].slice(0,1);
const array1 = firstCharacter1.toUpperCase() + arrayInput[1].substring(1);
//viết hoa phần tử 2
const firstCharacter2 = arrayInput[2].slice(0,1);
const array2 = firstCharacter2.toUpperCase() + arrayInput[2].substring(1);

const capitalize_Words = array0 + " " + array1 + " " + array2
console.log(capitalize_Words);