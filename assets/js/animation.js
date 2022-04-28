function revealAnimation() {

    var reveal = document.querySelectorAll(".revealAnimation");

    for (var i = 0; i < reveal.length; i++) {

        var windowHeight = window.innerHeight;
        var navTop = reveal[i].getBoundingClientRect().top;
        var navVisible = 150;

        if (navTop < windowHeight - navVisible) {
            reveal[i].classList.add("active");
        } else {
            reveal[i].classList.remove("active");
        }

    }

}

window.addEventListener("scroll", revealAnimation);