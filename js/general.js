/*
 *general.js--JavaScript used on all pages
 */

function setTopScroll() {
    var ts = document.getElementById('top-scroll').childNodes[1];
    ts.addEventListener('click', function () {
        scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });
}