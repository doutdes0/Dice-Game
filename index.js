var n = (Math.floor(Math.random() * 6)) + 1;
var m = (Math.floor(Math.random() * 6)) + 1;
var img1 = "images/dice" + n + ".png";
var img2 = "images/dice" + m + ".png";

document.querySelector(".img1").setAttribute("src", img1);
document.querySelector(".img2").setAttribute("src", img2);

if (n > m) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if (n < m) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
} else {
  document.querySelector("h1").innerHTML = "🚩 Draw! 🚩";
}
