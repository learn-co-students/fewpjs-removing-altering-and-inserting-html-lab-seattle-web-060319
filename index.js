let oldMain = document.querySelector("main#main");
oldMain.remove();

let newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory')
newHeader.innerHTML = "Claire is the champion!";