// array : lưu danh sách ( ds món ăn, ds tên, ds điểm )
// CRUD ~ Create Read Updatae Delete

//  array ~  [ item1 , item2, item3 ]
var menu = [];
console.log("😀 - menu", menu);

// thêm phần tử vào array
menu.push("Cơm");
menu.push("Bún");
console.log("😀 - menu", menu);
// số lượng phần tử của array

var length = menu.length;
console.log("😀 - length", length);

// vị trí, index ~ luôn bắt đầu từ 0

// phần tử, [] , index , giá trị

// truy xuất tới 1 phần tử
// console.log(menu[1]);
// update phần tử tại index=1
menu[1] = "Bún boà";

console.log("😀 - menu", menu);

// xoá 1 phần tử ra khỏi array
// splice ( cut ) / slice ( copy )
// splice ( vị trí, số lượng)
// xoá món cơm ra khỏi menu
menu.splice(0, 1); // xoá 1 phần tử tại index=0
console.log("😀 - menu", menu);

var numbers = [1, 3, 5, 7, 9];
// duyệt mảng numbers

// vị trí cuối cùng = length-1

for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// method array

// mutable and immutable array methods in javascript medium

var colors = ["red", "yellow", "blue", "green"];
// xoá màu blue => tìm vị trí của blue
var blueIndex = colors.indexOf("blue");
console.log("😀 - blueIndex", blueIndex);

colors.splice(blueIndex, 1);
console.log("😀 - colors", colors);

// duyệt mảng bằng forEach

for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
// so sánh map với forEach
// callback
colors.forEach(function (item) {
  console.log("😀 - item", item);
});

console.log("😀 - colors", colors);
var newColors = colors.map(function (item) {
  console.log("😀 - item", item);
  return "alice " + item;
});
console.log("😀 - newColors", newColors);
// colors.forEach(calback);

function introduce(callback) {
  callback("Alice");
}

function sayName(username) {
  console.log("my name: ", username);
}
introduce(sayName);
// bài toán sắp xếp

var numberArr = [5, 9, 30, 15];

var newArray = numberArr.sort(function (a, b) {
  return a - b;
});
console.log("😀 - newArray", newArray);
