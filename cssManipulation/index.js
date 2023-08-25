let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
var box = document.getElementById("box");

b1.addEventListener("click", () => {
  box.style.backgroundColor = "black";
  box.style.color = "white";
});

b2.addEventListener("click", () => {
  box.style.backgroundColor = "blue";
});

b3.addEventListener("click", () => {
  box.style.backgroundColor = "red";
});

b4.addEventListener("click", () => {
  box.style.backgroundColor = "green";
//   document.body.style.backgroundColor = "black";
});

minus.addEventListener("click", () => {
  var computedStyle = window.getComputedStyle(box);
  var fontSize = computedStyle.getPropertyValue("font-size");

  var size = parseInt(fontSize) - 10;
  box.style.fontSize = size + "px";
  console.log(fontSize);
});

plus.addEventListener("click", () => {
  var computedStyle = window.getComputedStyle(box);
  var fontSize = computedStyle.getPropertyValue("font-size");

  var size = parseInt(fontSize) + 10;
  box.style.fontSize = size + "px";
  console.log(fontSize);
});
