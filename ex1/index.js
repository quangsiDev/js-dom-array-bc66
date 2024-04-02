var numArray = [];
function submit() {
  //   var numArray = []; tạo ở đây sẽ bị ghi đè giá trị
  // lấy giá trị user nhập
  var number = document.querySelector("#number").value * 1;
  numArray.push(number);
  console.log("😀 - numArray", numArray);
  document.querySelector("#result").innerText = numArray;
}
