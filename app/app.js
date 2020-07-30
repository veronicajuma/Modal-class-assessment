let modal__popup = document.getElementById("Lux__modal");
let section__main = document.getElementById("main");
let span = document.getElementsByClassName("closed")[0];
let btn__popup = document.getElementById("button__modal");
btn__popup.onclick = function(){
    modal__popup.style.display = "block";
}
section__main.style.backgroundColor = "blue";
section__main.style.padding = "0px";
section__main.style.display = "flex";
  span.onclick = function(){
      modal__popup.style.display = "none";
  }