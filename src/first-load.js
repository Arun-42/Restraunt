let content = document.querySelector('#content');
let t1 = "You may have heard that 90% of restaurants fail in their first year. If you’ve already been in the industry for a while, you probably know that this figure is flat-out false. Economists from the University of California, Berkeley dug into the numbers and found the actual statistic is closer to 17%. That said, no one wants to be in that 17%. Especially when the median cost to open a restaurant is over $370,000.";
let t2 = "You may have the perfect menu, ideal location, and a great team, but what are you doing to market your business? No restaurant can survive without consistent demand. Text message marketing allows restaurants, coffee shops, or other businesses in the food service industry to bring in new customers and keep them coming back.";
function loadh1(){
    let h1 = document.createElement('h1');
    h1.innerText = "Some Restraunt";
    h1.style.cssText =`text-align:center;
    color:#ffffff;`;
    document.body.style.backgroundColor = "#525252";
    content.appendChild(h1);
}
function loadimg(){
    let img = document.createElement('img');
    img.setAttribute("src","images.jpeg");
    img.setAttribute("alt","Restraunt");
    img.style.cssText = `display: block;
    margin-left: auto;
    margin-right: auto;
    width:50%;`;
    content.appendChild(img);
}
function loadp(){
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    p1.innerText = t1;
    p2.innerText = t2;
    content.appendChild(p1);
    content.appendChild(p2);
    let ps = document.getElementsByTagName("p");
    for(let i=0; i< ps.length; i++){
        ps[i].style.cssText = `color:#d1d1d1;
    text-align: center;
    width:60%;
    margin-left: auto;
    margin-right: auto;`;
    };
};

function home(){
    while (content.firstChild) {
    content.removeChild(content.firstChild);
  };
    loadh1();
    loadimg();
    loadp();
}

export{home, loadh1,loadimg};