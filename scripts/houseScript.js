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
        dropDown.style.transform = 'translateX(-75vw)';
        blurBack.style.display = 'none';
    }
});
function outDropMenuClick(event) {
    const isClickInsideDropMenu = dropDown.contains(event.target);
    const isClickInsideNavigation = navigation.contains(event.target);
    if (!isClickInsideDropMenu && !isClickInsideNavigation && dropButton.classList.contains('is-active')) {
        dropButton.classList.remove('is-active');
        dropDown.style.transform = 'translateX(-75vw)';
        blurBack.style.display = 'none';
    }
}
document.addEventListener('click', outDropMenuClick);