//Viết một hàm JavaScript nhận một chuỗi chứa cả ký tự thường và ký tự in hoa làm tham số. Hàm này chuyển đổi ký tự in hoa thành ký tự thường và ngược lại.
function convertString (str) {
    let result = "";
    for (let i = 0 ; i < str.length ; i++) {
        let characterBefore = str[i];
        if (characterBefore === characterBefore.toUpperCase()){
            result += characterBefore.toLowerCase();
        } else {result += characterBefore.toUpperCase()};
    };
    return result;
};
let strBefore = "aBcdF";
let resultCovert = convertString(strBefore);
console.log(resultCovert);