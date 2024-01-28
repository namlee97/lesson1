//Viết một hàm JavaScript để lặp lại một chuỗi cho đến một số lần cụ thể.
function repeatString (str, times){
    if (times === undefined || times <= 0 || typeof str !== "string"){
        return "Error in string or count.";
    };
    let result = str;
    for (let i = 1; i < times; i++ ){
        result += str;
    };
    return result;
};
console.log(repeatString('a', 6));
console.log(repeatString('a'));