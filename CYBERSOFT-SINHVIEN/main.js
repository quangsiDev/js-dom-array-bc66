/*
    tạo array điểm
    b1: lấy ds thẻ td
    b2: từ ds thẻ td, tạo array chứ điểm => duyệt ds
*/
var tdList = document.querySelectorAll(".td-scores");
// ds thẻ tr
var trList = document.querySelectorAll("#tblBody tr");
console.log("😀 - trList", trList);

var scoreArr = [];
for (var i = 0; i < tdList.length; i++) {
  var td = tdList[i];
  scoreArr.push(td.innerText * 1);
}

function findBestStudent() {
  // tìm điểm cao nhất
  var maxScore = Math.max(...scoreArr);
  //  tìm index của điểm lớn nhất trong scoreArr
  var index = scoreArr.indexOf(maxScore);
  console.log("😀 - index", index);
  var trMax = trList[index];
  var tdList = trMax.querySelectorAll("td");
  //   hiển thị kết quả
  var name = tdList[2].innerText;
  document.querySelector("#svGioiNhat").innerText = ` ${name} - ${maxScore}`;
}
findBestStudent();
