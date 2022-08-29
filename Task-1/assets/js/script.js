    /*Name:- Kaushal S. Pohekar
    Task-1 Oasis Infobyte
    Landing Page For Raut Farms's
    ::Index Page
*/


const header = document.querySelector('.navbar');
window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}