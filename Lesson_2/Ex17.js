//Viết một hàm JavaScript để chia một chuỗi thành các phần nhỏ có độ dài cụ thể
function splitString (str,n){
    if (typeof str !== "string" || typeof n !== "number" || n <= 0){
        return "Dau ra khong hop le";
    };
    let result = [];
    for (let i = 0; i < str.length ; i += n) {
        result.push(str.slice(i,i+n));
    };
    return result;
};

console.log(splitString('w3resource',2));
console.log(splitString('w3resource',1));
console.log(splitString('w3resource',3));
console.log(splitString('w3resource',0));