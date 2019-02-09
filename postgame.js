import {MDCRipple} from '@material/ripple';

const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCRipple(el);
});

// window.onload = alert(localStorage.getItem("storageName"));

window.onload = function() {
  let winState = localStorage.getItem("storageName");

  if(winState == "blue"){
    document.body.style.backgroundColor = "blue";
    document.getElementById("buttonText").innerHTML = "Blue Wins!<br><br>Click here to go back to the main screen.";
  } else if (winState == "red"){
    document.body.style.backgroundColor = "red";
    document.getElementById("buttonText").innerHTML = "Red Wins!<br><br>Click here to go back to the main screen.";
  }
}
const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));