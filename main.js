!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);let o=document.querySelector("#content");function r(){let e=document.createElement("h1");e.innerText="Some Restraunt",e.style.cssText="text-align:center;\n    color:#ffffff;",document.body.style.backgroundColor="#525252",o.appendChild(e)}function a(){let e=document.createElement("img");e.setAttribute("src","images.jpeg"),e.setAttribute("alt","Restraunt"),e.style.cssText="display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width:50%;",o.appendChild(e)}function i(){for(;o.firstChild;)o.removeChild(o.firstChild);r(),a(),function(){let e=document.createElement("p"),t=document.createElement("p");e.innerText="You may have heard that 90% of restaurants fail in their first year. If you’ve already been in the industry for a while, you probably know that this figure is flat-out false. Economists from the University of California, Berkeley dug into the numbers and found the actual statistic is closer to 17%. That said, no one wants to be in that 17%. Especially when the median cost to open a restaurant is over $370,000.",t.innerText="You may have the perfect menu, ideal location, and a great team, but what are you doing to market your business? No restaurant can survive without consistent demand. Text message marketing allows restaurants, coffee shops, or other businesses in the food service industry to bring in new customers and keep them coming back.",o.appendChild(e),o.appendChild(t);let n=document.getElementsByTagName("p");for(let e=0;e<n.length;e++)n[e].style.cssText="color:#d1d1d1;\n    text-align: center;\n    width:60%;\n    margin-left: auto;\n    margin-right: auto;"}()}function l(){window.innerWidth<1e3?(Array.from(document.getElementsByTagName("img")).forEach(e=>{e.style.width="90%"}),Array.from(document.getElementsByTagName("p")).forEach(e=>{e.style.width="90%"}),document.querySelectorAll(".menuButtons").forEach(e=>e.style.width="26%"),document.querySelectorAll(".menuButtons").forEach(e=>e.style.padding="20px")):(Array.from(document.getElementsByTagName("img")).forEach(e=>{e.style.width="50%"}),Array.from(document.getElementsByTagName("p")).forEach(e=>{e.style.width="60%"}),document.querySelectorAll(".menuButtons").forEach(e=>e.style.width="60px"),document.querySelectorAll(".menuButtons").forEach(e=>e.style.padding="10px"))}let c=document.querySelector("#content"),u=document.querySelector("#content");function d(e){switch(document.getElementById("menuTab").addEventListener("click",d),document.getElementById("contactTab").addEventListener("click",d),document.getElementById("homeTab").addEventListener("click",d),e.target.id){case"homeTab":i(),l();break;case"menuTab":(()=>{for(;c.firstChild;)c.removeChild(c.firstChild);r(),a();let e=document.createElement("h2");e.innerText="Yup",e.style.color="#ffffff",e.style.textAlign="center",c.appendChild(e)})(),l();break;case"contactTab":l(),(()=>{for(;u.firstChild;)u.removeChild(u.firstChild);r();let e=document.createElement("h2");e.innerText="You gotta contact if you gotta contact",e.style.color="#ffffff",e.style.textAlign="center",u.appendChild(e)})()}}i(),document.getElementById("menuTab").addEventListener("click",d),document.getElementById("contactTab").addEventListener("click",d),window.onload=window.onresize=l,func}]);