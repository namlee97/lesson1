//Viết một hàm JavaScript để chuyển đổi một chuỗi thành dạng Camel Case.
//Chưa tối ưu
let input = "JavaScriptExercises";
// Thay thế các ký tự không phải chữ và số bằng khoảng trắng " "
const input1 = input.replace(/[\W_]/g, " ");
console.log(input1);
// Chia chuỗi thành các mảng ngăn cách bơi " "
const input2 = input1.split(" ");
console.log(input2);

const arrayInput0 = input2[0].charAt(0).toLowerCase() + input2[0].substring(1).toLowerCase();
console.log(arrayInput0);
const arrayInput1 = input2[1].charAt(0).toUpperCase()  + input2[1].substring(1).toLowerCase();
console.log(arrayInput1);

const camelize = arrayInput0 + arrayInput1;
console.log(camelize);