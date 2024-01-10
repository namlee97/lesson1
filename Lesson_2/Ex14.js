//Viết một hàm JavaScript để chèn một chuỗi vào một chuỗi khác ở một vị trí cụ thể (mặc định là vị trí đầu tiên).
let input = 'We are doing some exercises.';
//Vị trí muốn chèn chuỗi khác
let position = 18;
let stringToInsert = "JavaScript ";
let result = input.slice(0,position) + stringToInsert + input.substring(position);
console.log(result);