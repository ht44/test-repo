
// replace .hide within the HTML
 document.getElementById("joke-part2").classList.add("hide");
 document.getElementById("button2").classList.add("hide");
 document.getElementById("joke-part3").classList.add("hide");

// When user clicks first button, show second part
document.getElementById("button1").addEventListener("click", function() {
  document.getElementById("joke-part2").classList.add("show");
  document.getElementById("button2").classList.add("show");
});

document.getElementById("button2").addEventListener("click", function() {
  document.getElementById("joke-part3").classList.add("show");
  document.getElementById("button3").classList.add("show");
});

document.getElementById("joke2-part2").classList.add("hide");
document.getElementById("button4").classList.add("hide");
document.getElementById("joke2-part3").classList.add("hide");

document.getElementById("button3").addEventListener("click", function () {
  document.getElementById("joke2-part1").classList.add("hide");
  document.getElementById("button3").classList.add("hide");
  document.getElementById("joke2-part2").classList.remove("hide");
  document.getElementById("button4").classList.remove("hide");
});

document.getElementById("button4").addEventListener("click", function() {
  document.getElementById("joke2-part2").classList.add("hide");
  document.getElementById("button4").classList.add("hide");
  document.getElementById("joke2-part3").classList.remove("hide");
});
