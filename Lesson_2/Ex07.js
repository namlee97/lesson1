//Viết một hàm JavaScript để chuyển một chuỗi về dạng tốt cho SEO.
let input = "Robin Singh from USA.";
const toLowerInput = input.toLowerCase();
console.log(toLowerInput);
//loại bỏ dấu "."
const toLowerCase01 = toLowerInput.replace(".", "");
console.log(toLowerCase01);
//thay thế " " bằng "-"
const string_slugify = toLowerCase01.replace(/\s+/g,"-");
console.log(string_slugify);