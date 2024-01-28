//Viết một hàm JavaScript để nối một chuỗi cho trước n lần (mặc định là 1).
function repeatString (str,n){
    result = str;
    for (i=1 ; i<n ; i++){
        result += str;
    };
    return result;
};
let strBefore = "ha";
let resultExpect = repeatString(strBefore,5);
console.log(resultExpect);
