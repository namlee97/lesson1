//Viết một hàm JavaScript để kiểm tra xem một 'input' có phải là một chuỗi hay không.
let input = "fyggryfgry39455" ;
input = 123 ;
const typeOfData = typeof input ;
console.log(typeOfData);
let isResult = true ;
if (typeOfData == "string") {
    isResult = true
} else {
    isResult = false
};
console.log(isResult);