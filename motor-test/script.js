const spaceHolder = document.querySelector('.space-holder');
const horizontal = document.querySelector('.horizontal');
spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;

function calcDynamicHeight(ref) {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const objectWidth = ref.scrollWidth;
    return objectWidth - vw + vh + 300; // Increase the padding to allow for further scrolling
}

window.addEventListener('scroll', () => {
    const sticky = document.querySelector('.sticky');
    const scrollPercentage = sticky.offsetTop / (spaceHolder.offsetHeight - window.innerHeight);
    const horizontalScroll = (horizontal.scrollWidth - window.innerWidth) * scrollPercentage;
    horizontal.style.transform = `translateX(-${horizontalScroll}px)`;
});

window.addEventListener('resize', () => {
    spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
});