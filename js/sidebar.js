/*
 *sidebar.js--JavaScript used on pages with long articles and a sidebar
 */

let canvasArray = document.getElementsByClassName('canvas');
let itemArray = document.getElementsByClassName('side-item');
let articleArray = document.getElementsByClassName('article');

//Convert angles to degrees
function d2a(n) {
    return n * Math.PI / 180;
}

//Update the sidebar
function pageView(canvas, item, article) {
    let navH = document.getElementById('nav-bar').offsetHeight;

    //Something about an article
    let elementH = article.clientHeight;
    let currentH = document.documentElement.scrollTop || document.body.scrollTop;
    let elementT = article.offsetTop;
    let clientH = document.documentElement.clientHeight;

    //Calculate the reading progress
    let scale = (currentH - elementT + navH + 20) / elementH;/*看顶部*/
    // let scale = (currentH + clientH - elementT) / elementH;/*看底部*/

    //Change the styles when you start reading a new article
    if (scale >= 0 && scale <= 1) {
        item.setAttribute('class', 'side-item side-item-active');
    } else {
        item.setAttribute('class', 'side-item');
    }

    //Clear the canvas
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //Foreground
    if (scale >= 0) {
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.arc(20, 20, 10, d2a(-90), d2a(scale * 360 - 90), false)
        ctx.strokeStyle = '#0d0aa3';
        ctx.stroke();
    }
}