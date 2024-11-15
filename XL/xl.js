
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (

        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.top >= 0 && rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth))
    );
}

document.addEventListener('DOMContentLoaded', function () {
    if (isInViewport(document.getElementById("intro"))) {
        document.getElementById("background").style.backgroundImage = "IMG/tofte1.png";
    }
}, {
    passive: true
});


document.addEventListener('scroll', function () {

    if (isInViewport(document.getElementById("first"))) {
        document.getElementById("background").style.backgroundImage = "";
    }
    if (isInViewport(document.getElementById("second"))) {
        document.getElementById("background").style.backgroundImage = "";
    }
    if (isInViewport(document.getElementById("third"))) {
        document.getElementById("background").style.backgroundImage = "";
    }
    if (isInViewport(document.getElementById("fourth"))) {
        document.getElementById("background").style.backgroundImage = "";
    }
}, {
    passive: true
});


