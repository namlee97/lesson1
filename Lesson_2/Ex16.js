//Viết một hàm JavaScript để cắt chuỗi nếu nó dài hơn một số ký tự cụ thể. Chuỗi đã cắt sẽ kết thúc bằng chuỗi "..." (mặc định) hoặc chuỗi được chỉ định.
//Chưa hiểu cách tính length của kết quả trong vd
let input = 'We are doing JS string exercises.';
const strLenght = input.length;
console.log(strLenght);
const maxLenght = 19
let strEnd = "...";
const lengthStrEnd = strEnd.length;
if (strLenght <= maxLenght){
    let myString = input; 
    console.log(myString);
} else {
    myString = input.slice(0,maxLenght-lengthStrEnd) + strEnd;
    console.log(myString);
}