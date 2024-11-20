/* Gjøre pulsmåler synlig når artikkel er i viewport */

document.addEventListener('scroll', function () {
    const articles = document.querySelectorAll(".article");
    const counterBox = document.querySelector(".counter-box");
    let isAnyArticleInViewport = false;

    articles.forEach(article => {
        const rect = article.getBoundingClientRect();
        const inViewport = rect.top < window.innerHeight && rect.bottom >= 0;

        if (inViewport) {
            isAnyArticleInViewport = true;
        }
    });

    if (isAnyArticleInViewport) {
        console.log(`At least one article is in viewport`);
        counterBox.style.display = "flex";
    } else {
        counterBox.style.display = "none";
    }
});
/* pulsteller som økes en gang i sekundet */

let counter = 60;
const maxCount = 240;
let intervalId;

function startCounter() {
    intervalId = setInterval(() => {
        counter++;
        document.getElementById("counter").innerText = counter;
        console.log(counter);

        if (counter >= maxCount) {
            clearInterval(intervalId);
        }
    }, 3000);
}

/* Start counter when scrolling to article-1 */
document.addEventListener('scroll', function () {
    const articles = document.querySelectorAll(".article");
    let isAnyArticleInViewport = false;

    articles.forEach(article => {
        const rect = article.getBoundingClientRect();
        const inViewport = rect.top < window.innerHeight && rect.bottom >= 0;

        if (inViewport) {
            isAnyArticleInViewport = true;
        }
    });
    if (isAnyArticleInViewport && !intervalId) {
        console.log(`At least one article is in viewport`);
        startCounter();
    }
});



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


/* Bytte av bakgrunnsfarge på slutten som skal symbolisere at smerten er på maks og døden inntreffer */

document.addEventListener('scroll', function () {
    const lastPulse = document.getElementById("last-pulse");
    const theend = document.getElementById("theend");
    const theendbuffer = document.getElementById("theend-buffer");
    const theendtitle = document.getElementById("theend-titlebox");

    if (isPartiallyInViewport(theendbuffer)) {
        console.log(`Element theend is partially in viewport`);
        lastPulse.classList.add("red-background");
        theend.classList.add("red-background");
        theendbuffer.classList.add("red-background");
        theendtitle.classList.add("red-background");
    } else {
        lastPulse.classList.remove("red-background");
        theend.classList.remove("red-background");
        theendbuffer.classList.remove("red-background");
        theendtitle.classList.remove("red-background");
    }
})