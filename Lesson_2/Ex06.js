//Viết một hàm JavaScript để ẩn địa chỉ email để ngăn truy cập trái phép.
let input = "robin_singh@example.com"
//lấy ký tự hiện trc @
const displayCharacter = input.slice(0,5);
console.log(displayCharacter);
//tìm vị trí kí tự @
const atIndex = input.indexOf("@");
console.log(atIndex);
//lấy ký tự cần ẩn 
const hideCharacter = input.substring(5,atIndex); // hoặc dùng slice đều được
console.log(hideCharacter);
//thay thế ký tự cần ẩn bằng "..."
const replaceHideCharacter = hideCharacter.replace(hideCharacter,"...");
console.log(replaceHideCharacter);
//Tạo email ẩn
const protect_email = displayCharacter + replaceHideCharacter + input.substring(atIndex);
console.log(protect_email);
