let div = document.createElement('div');
div.className = 'alert';
div.innerHTML = 'Hey this is an alert message for you.';
let insertionpoint = document.querySelector('h1');
insertionpoint.before(div);

let ulList = document.querySelector('ul');
ulList.insertAdjacentElement('beforebegin', div);
