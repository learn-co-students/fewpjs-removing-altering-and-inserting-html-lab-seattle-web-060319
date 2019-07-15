// Write your code here!
var main = document.querySelector("#main");
main.remove();
var newHeader = document.createElement("h1");
newHeader.id = "victory";
document.body.appendChild(newHeader);
newHeader.innerHTML = "Philip is the champion";