//Viết một hàm JavaScript để viết hoa ký tự đầu tiên trong một chuỗi.
let input = 'js string exercises';
//lấy chữ cái đầu tiên
const firstCharacter = input.slice(0,1);
//Viet hoa ky tu dau
const toUpperFirstCharacter = firstCharacter.toUpperCase();
console.log(toUpperFirstCharacter);
//Lay cac ky tu con lai
const extantCharacter = input.substring(1);
console.log(extantCharacter);

const capitalize = toUpperFirstCharacter + extantCharacter;
console.log(capitalize);