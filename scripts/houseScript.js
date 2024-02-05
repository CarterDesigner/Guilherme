const dropButton = document.querySelector('.hamburger');
const dropDown = document.querySelector('.drop-down');
const blurBack = document.querySelector('.background-blur');
const navigation = document.querySelector('.navigation');
dropButton.addEventListener('click', () => {
    dropButton.classList.toggle('is-active');
    if (dropButton.classList.contains('is-active')) {
        dropDown.style.transform = 'translateX(0)';
        blurBack.style.display = 'block';
    } else {
        dropDown.style.transform = 'translateX(-100vw)';
        blurBack.style.display = 'none';
    }
});
function outDropMenuClick(event) {
    const isClickInsideDropMenu = dropDown.contains(event.target);
    const isClickInsideNavigation = navigation.contains(event.target);
    if (!isClickInsideDropMenu && !isClickInsideNavigation && dropButton.classList.contains('is-active')) {
        dropButton.classList.remove('is-active');
        dropDown.style.transform = 'translateX(-100vw)';
        blurBack.style.display = 'none';
    }
}
document.addEventListener('click', outDropMenuClick);

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;
let hasPlayedAutomatically = false;

const targetSpan = document.querySelector(".cta-1 .cta1-container .cta-text .number-line span");

// Function to check if the element is 80vh from the top
function isElement80vhFromTop(element) {
    const elementTop = element.getBoundingClientRect().top;
    return elementTop <= window.innerHeight * 0.8;
}

function startAnimation() {
    let iteration = 0;
    clearInterval(interval);

    interval = setInterval(() => {
        targetSpan.innerText = targetSpan.innerText
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return targetSpan.dataset.value[index];
                }
                return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

        if (iteration >= targetSpan.dataset.value.length) {
            clearInterval(interval);
        }
        iteration += 1 / 4;
    }, 40);
}

// Check for the element position on scroll
window.addEventListener('scroll', () => {
    if (!hasPlayedAutomatically && isElement80vhFromTop(targetSpan)) {
        // Start the animation automatically once
        startAnimation();
        hasPlayedAutomatically = true;
    }
});

// Start the animation on mouseover
targetSpan.onmouseover = () => {
    startAnimation();
};
