//

import {home} from './first-load';
import {menu} from './menu.js';
import {contact} from './contact.js';

home();

document.getElementById("menuTab").addEventListener("click", swapTab);
document.getElementById("contactTab").addEventListener("click", swapTab);

function swapTab(e){
    document.getElementById("menuTab").addEventListener("click", swapTab);
    document.getElementById("contactTab").addEventListener("click", swapTab);
    document.getElementById("homeTab").addEventListener("click", swapTab);
    switch(e.target.id){
        case("homeTab"): home(); break;
        case("menuTab"): menu(); break;
        case("contactTab"): contact();
    }
}