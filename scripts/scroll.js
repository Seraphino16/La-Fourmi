// Fonction pour faire scroll

function scrollToRight() {
  document.getElementById("scrollH").scrollLeft += 1000;

  console.log("on va à doite");
}

function scrollToLeft() {
  document.getElementById("scrollH").scrollLeft -= 1000;
  console.log("on va à gauche");
}

function scrollToBottom() {
  document.getElementById("indexBody").scrollTop += 690;
  console.log("on va en bas");
}

const arrowDown = document.getElementById("arrow");

arrowDown.addEventListener("click", scrollToBottom);
