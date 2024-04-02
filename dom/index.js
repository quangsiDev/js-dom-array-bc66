// selector  ~ css

document.querySelector(".title").style.color = "red";

// lấy tất cả thẻ có class title

var listTile = document.querySelectorAll(".title");
console.log("😀 - listTile", listTile);

// gọi tới thẻ có index là 1

listTile[1].style.fontSize = "30px";

// cho tất cả thẻ có class title màu xanh

for (var i = 0; i < 3; i++) {
  listTile[i].style.color = "green";
}
