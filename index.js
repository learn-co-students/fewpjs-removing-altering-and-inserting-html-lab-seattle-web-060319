var main = document.querySelector('main');
main.remove();

var newHeader = document.createElement('h1')
document.body.appendChild(newHeader)

newHeader.id = "victory";

newHeader.innerHTML = "<h1>Aliya is the champion!</h1>";
