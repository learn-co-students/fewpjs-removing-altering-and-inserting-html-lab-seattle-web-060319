
// let newHeader; 
// document.addEventListener('DOMContentLoaded', function() { 

    

// })

//     body.removeChild(body.querySelector('main#main'));
//     newHeader = document.createElement('h1#victory');
    
let main = document.querySelector('#main')
main.remove()
let newHeader = document.createElement('h1')
newHeader.id = 'victory'
document.body.appendChild(newHeader)
newHeader.innerHTML = "YOUR-NAME is the champion";

