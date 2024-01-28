//Viết một hàm JavaScript để định dạng một số thành một chuỗi dễ đọc bởi con người với hậu tố đúng, ví dụ: 1st, 2nd, 3rd, v.v.
function formatNumberWithSuffix (number){
    let result = number.toString();
    //Chia lay du => lay so cuoi cung
    let lastLigit = number % 10;
    if (lastLigit === 1){
        result += "st";
    } else if (lastLigit === 2){
        result += "nd";
    } else if (lastLigit === 3){
        result += "rd"
    } else {
        result += "th"
    };
    return result;
};
console.log(formatNumberWithSuffix(1));
console.log(formatNumberWithSuffix(103));
console.log(formatNumberWithSuffix(402));
console.log(formatNumberWithSuffix(10));