// Write your code here!
var main_element = document.querySelector('main');
main_element.parentNode.removeChild(main_element);

var newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
newHeader.innerHTML = "Soundarya is the champion";
document.body.appendChild(newHeader);

// var newHeader = document.getElementById("h1#victory");
// newHeader.innerHTML = "Soundarya is the champion";
