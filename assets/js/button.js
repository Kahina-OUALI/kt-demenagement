BtnTop = document.getElementById("ButtonTop");

window.onscroll = function() {

    scrollFunction();

}

function scrollFunction() {

    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

        BtnTop.style.display = "block";

    } else {

        BtnTop.style.display = "none";

    }

}

function btnTopFunction() {

    document.body.scrollTop = 0; // Pour le navigateur Safari 
    document.documentElement.scrollTop = 0; // Pour les navigateurs IE, Chrome, Opéra et Firefox

}