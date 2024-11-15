
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (

        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.top >= 0 && rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth))
    );
}

/* document.addEventListener('DOMContentLoaded', function () {
    if (isInViewport(document.getElementById("intro"))) {
        document.getElementById("parallax-1-bg").style.backgroundImage = "IMG/tofte1.png";
    }
}, {
    passive: true
});
 */

document.addEventListener('scroll', function () {
    const elements = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth"];
    const images = ["IMG/tofte2.png", "IMG/tofte3.png", "IMG/tofte4.png", "IMG/tofte5.png", "IMG/tofte6.png", "IMG/tofte7.png", "IMG/tofte8.png", "IMG/tofte9.png"];

    elements.forEach((id, index) => {
        const element = document.getElementById(id);
        if (element && isInViewport(element)) {
            console.log(`Element ${id} is in viewport`);
            document.getElementById("parallax-1-bg").style.backgroundImage = `url(${images[index]})`;
        }
    });
}, {
    passive: true
});


