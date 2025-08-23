(function(){
var numberOfHorrorButtons = document.querySelectorAll(".horroricon").length;
for (var i = 0; i < numberOfHorrorButtons; i++) {
  document.querySelectorAll(".horroricon")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.className.charAt(0);
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});
function makeSound(key) {
  switch (key) {
    case "q":
  var sound1 = new Audio("sounds/" + document.querySelectorAll(".horroricon")[0].innerHTML + ".mp3");
      sound1.play();
      break;
    case "w":
  var sound2 = new Audio("sounds/" + document.querySelectorAll(".horroricon")[1].innerHTML + ".mp3");
      sound2.play();
      break;
    case "e":
  var sound3 = new Audio("sounds/" + document.querySelectorAll(".horroricon")[2].innerHTML + ".mp3");
      sound3.play();
      break;
    case "r":
  var sound4 = new Audio("sounds/" + document.querySelectorAll(".horroricon")[3].innerHTML + ".mp3");
      sound4.play();
      break;
    case "t":
  var sound5 = new Audio("sounds/" + document.querySelectorAll(".horroricon")[4].innerHTML + ".mp3");
      sound5.play();
      break;
    case "z":
  var sound6 = new Audio("sounds/" + document.querySelectorAll(".horroricon")[5].innerHTML + ".mp3");
      sound6.play();
      break;
    case "u":
  var sound7 = new Audio("sounds/" + document.querySelectorAll(".horroricon")[6].innerHTML + ".mp3");
      sound7.play();
      break;
    case "i":
  var sound8 = new Audio("sounds/" + document.querySelectorAll(".horroricon")[7].innerHTML + ".mp3");
      sound8.play();
      break;
    case "o":
  var sound9 = new Audio("sounds/" + document.querySelectorAll(".horroricon")[8].innerHTML + ".mp3");
      sound9.play();
      break;
    case "p":
  var sound10 = new Audio("sounds/" + document.querySelectorAll(".horroricon")[9].innerHTML + ".mp3");
      sound10.play();
      break;
    case "a":
  var sound11 = new Audio("sounds/" + document.querySelectorAll(".horroricon")[10].innerHTML + ".mp3");
      sound11.play();
      break;
    case "s":
  var sound12 = new Audio("sounds/" + document.querySelectorAll(".horroricon")[11].innerHTML + ".mp3");
      sound12.play();
      break;
    case "d":
  var sound13 = new Audio("sounds/" + document.querySelectorAll(".horroricon")[12].innerHTML + ".mp3");
      sound13.play();
      break;
    case "f":
  var sound14 = new Audio("sounds/" + document.querySelectorAll(".horroricon")[13].innerHTML + ".mp3");
      sound14.play();
      break;
    case "g":
  var sound15 = new Audio("sounds/" + document.querySelectorAll(".horroricon")[14].innerHTML + ".mp3");
      sound15.play();
      break;
    case "h":
  var sound16 = new Audio("sounds/" + document.querySelectorAll(".horroricon")[15].innerHTML + ".mp3");
      sound16.play();
      break;
    case "j":
  var sound17 = new Audio("sounds/" + document.querySelectorAll(".horroricon")[16].innerHTML + ".mp3");
      sound17.play();
      break;
    case "k":
  var sound18 = new Audio("sounds/" + document.querySelectorAll(".horroricon")[17].innerHTML + ".mp3");
      sound18.play();
      break;
    case "l":
  var sound19 = new Audio("sounds/" + document.querySelectorAll(".horroricon")[18].innerHTML + ".mp3");
      sound19.play();
      break;
    case "é":
  var sound20 = new Audio("sounds/" + document.querySelectorAll(".horroricon")[19].innerHTML + ".mp3");
      sound20.play();
      break;
    default:
      break;
  }
}
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}
})();
