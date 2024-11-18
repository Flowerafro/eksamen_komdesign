/* pulsteller */

let counter = 60;
const maxCount = 240;

/* const intervalId = setInterval(() => {
    document.getElementById("counter").innerText = counter;
    console.log(counter);
    counter++;

    if (counter > maxCount) {
        clearInterval(intervalId);
    }
}, 1000); */

document.addEventListener('scroll', function () {
    document.querySelectorAll('.article').forEach((article) => {
        if (isInViewport(article)) {
            console.log(`Article ${article.id} is in viewport`);
            counter++;
        }
    })

})

/* Bytte bilder til første kartet */
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (

        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.top >= 0 && rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth))
    );
}

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


/* Bytte av bakgrunnsfarge på hovedtittel */
function isPartiallyInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < window.innerHeight && rect.bottom >= 0
    );
}

document.addEventListener('scroll', function () {
    const intro = document.getElementById("intro");
    const mainTitle = document.getElementById("main-title");
    const buffer = document.getElementById("buffer");

    if (isPartiallyInViewport(mainTitle)) {
        console.log(`Element mainTitle is partially in viewport`);
        intro.classList.add("red-background");
        mainTitle.classList.add("red-background");
        buffer.classList.add("red-background");
    } else {
        intro.classList.remove("red-background");
        mainTitle.classList.remove("red-background");
        buffer.classList.remove("red-background");
    }
});
/* const lastPulse = document.getElementById("lastpulse"); */