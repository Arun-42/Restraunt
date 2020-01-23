let content = document.querySelector('#content');
let text = "You gotta contact if you gotta contact";
import {loadh1} from './first-load';
let contact = () => {
    while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
    loadh1();
    let h2 = document.createElement('h2');
    h2.innerText = text;
    h2.style.color = '#ffffff';
    h2.style.textAlign = 'center';
    content.appendChild(h2);
};

export{contact};