//Viết một hàm JavaScript để chuyển đổi một chuỗi Camel Case thành dạng viết thường, mỗi từ cách nhau bởi dấu cách.
let input = 'helloWorld';
let kyTuChenGiua = '$1_$2';
//Thêm ký tự chèn giữa giữa ký tự viết hoa và viết thường
const uncamelize = input.replace(/([a-z])([A-Z])/g, kyTuChenGiua);
console.log(uncamelize);
//chuyển hết thành chữ thường
const uncamelizeToLower = uncamelize.toLowerCase();
console.log(uncamelizeToLower);