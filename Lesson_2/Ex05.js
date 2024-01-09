//Viết một hàm JavaScript để chuyển đổi một chuỗi thành dạng viết tắt.
let input = "Robin Singh";
const nameArray = input.split(" ");
const firstName = nameArray[0];
const lastName = nameArray[1];
const letterheadLastName = lastName.charAt();
const abbrev_name = firstName + " " + letterheadLastName + ".";
console.log(abbrev_name);