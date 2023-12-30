const arrowDiv = document.querySelectorAll('.arrow');
const radius = 10;
function moveDiv() {
    arrowDiv.forEach((arrow) => {
        const angle = Math.random() * 2 * Math.PI;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        arrow.style.transform = `translate(${x}px, ${y}px)`;
    });
}
moveDiv();
setInterval(moveDiv, 700);

window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;
    const scrollDirection = scrollValue > lastScrollPosition ? 'down' : 'up';
    lastScrollPosition = scrollValue;

    heroTitles.forEach((title) => {
        let translateY;

        if (scrollDirection === 'down') {
            translateY = Math.max(-40, -scrollValue * 0.1);
        } else {
            translateY = Math.min(40, -scrollValue * 0.1);
        }

        title.style.transform = `translateY(${translateY}px)`;
    });

    debounce(() => {
        heroTitles.forEach((title) => {
            title.style.transition = 'transform 0.3s ease'; // Add a smooth transition
            title.style.transform = 'translateY(0)';
        });

        // Reset transition property after the transition is complete
        setTimeout(() => {
            heroTitles.forEach((title) => {
                title.style.transition = 'none';
            });
        }, 300); // Adjust the time based on your transition duration
    }, 200); // Adjust the debounce delay based on your preference
});


const menuOption1 = document.querySelector('.option1');
const menuOption2 = document.querySelector('.option2');
const menuOption3 = document.querySelector('.option3');
const menuOption4 = document.querySelector('.option4');
const selectedVideoContainer = document.querySelector('.selected-video');
const emptyLogo = document.querySelector('.empty-logo');
menuOption1.addEventListener('click', () => {
    selectedVideoContainer.style.backgroundColor = 'red';
});
menuOption2.addEventListener('click', () => {
    selectedVideoContainer.style.backgroundColor = 'blue';
})
menuOption3.addEventListener('click', () => {
    selectedVideoContainer.style.backgroundColor = 'green';
})
menuOption4.addEventListener('click', () => {
    selectedVideoContainer.style.backgroundColor = 'orange';
})

function handleDocumentClick(event) {
    const isClickInsideVideoContainer = selectedVideoContainer.contains(event.target);
    const isClickedInsideMenuOption1 = menuOption1.contains(event.target);
    const isClickedInsideMenuOption2 = menuOption2.contains(event.target);
    const isClickedInsideMenuOption3 = menuOption3.contains(event.target);
    const isClickedInsideMenuOption4 = menuOption4.contains(event.target);
    if (!isClickInsideVideoContainer && !isClickedInsideMenuOption1 && !isClickedInsideMenuOption2 && !isClickedInsideMenuOption3 && !isClickedInsideMenuOption4) {
        selectedVideoContainer.style.backgroundColor = 'black';
        menuOptions.forEach((option) => {
            option.style.opacity = '.5';
            emptyLogo.style.display = 'flex';
        });
    }
};
document.addEventListener('click', handleDocumentClick);

const menuOptions = document.querySelectorAll('.menu-option');
menuOption1.addEventListener('click', () => {
    menuOption1.style.opacity = '1';
    menuOption2.style.opacity = '.5';
    menuOption3.style.opacity = '.5';
    menuOption4.style.opacity = '.5';
    emptyLogo.style.display = 'none';
});
menuOption2.addEventListener('click', () => {
    menuOption2.style.opacity = '1';
    menuOption1.style.opacity = '.5';
    menuOption3.style.opacity = '.5';
    menuOption4.style.opacity = '.5';
    emptyLogo.style.display = 'none';

});
menuOption3.addEventListener('click', () => {
    menuOption3.style.opacity = '1';
    menuOption2.style.opacity = '.5';
    menuOption1.style.opacity = '.5';
    menuOption4.style.opacity = '.5';
    emptyLogo.style.display = 'none';

});
menuOption4.addEventListener('click', () => {
    menuOption4.style.opacity = '1';
    menuOption2.style.opacity = '.5';
    menuOption3.style.opacity = '.5';
    menuOption1.style.opacity = '.5';
    emptyLogo.style.display = 'none';

});

if (window.innerWidth >= 1000) {
    document.addEventListener("DOMContentLoaded", function () {
        const menuOptions = document.querySelectorAll('.rotate-menu .menu-option');

        menuOptions.forEach((option, index) => {
            option.addEventListener('click', () => {
                const newIndex = (index + 3) % 4; // Move anti-clockwise

                menuOptions.forEach((menuOption, i) => {
                    const translateValue = getTranslateValue(newIndex, i);
                    menuOption.style.transform = `translate(${translateValue.x}%, ${translateValue.y}%)`;
                });
            });
        });

        function getTranslateValue(newIndex, currentIndex) {
            const diff = (newIndex - currentIndex + 4) % 4;
            switch (diff) {
                case 1:
                    return { x: 0, y: -150 };
                case 2:
                    return { x: 145, y: 0 };
                case 3:
                    return { x: 0, y: 145 };
                case 0:
                    return { x: -145, y: 0 };
                default:
                    return { x: 0, y: 0 };
            }
        }
    });
}

const aboutCards = document.querySelectorAll('.card');
const aboutCard1 = document.querySelector('.card1');
const aboutCard2 = document.querySelector('.card2');
const aboutCard3 = document.querySelector('.card3');
const dot1 = document.querySelector('.dot1');
const dot2 = document.querySelector('.dot2');
const dot3 = document.querySelector('.dot3');
aboutCard1.addEventListener('click', () => {
    aboutCards.forEach((card) => {
        card.classList.remove('card-active');
        card.classList.remove('card-no-active-RIGHT');
        card.classList.remove('card-no-active-LEFT');
    })
    aboutCard1.classList.add('card-active');
    aboutCard2.classList.add('card-no-active-RIGHT');
    aboutCard3.classList.add('card-no-active-RIGHT');
    dot1.style.opacity = '1';
    dot2.style.opacity = '.6';
    dot3.style.opacity = '.6';
});
aboutCard2.addEventListener('click', () => {
    aboutCards.forEach((card) => {
        card.classList.remove('card-active');
        card.classList.remove('card-no-active-RIGHT');
        card.classList.remove('card-no-active-LEFT');
    })
    aboutCard1.classList.add('card-no-active-LEFT');
    aboutCard2.classList.add('card-active');
    aboutCard3.classList.add('card-no-active-RIGHT');
    dot1.style.opacity = '.6';
    dot2.style.opacity = '1';
    dot3.style.opacity = '.6';
});
aboutCard3.addEventListener('click', () => {
    aboutCards.forEach((card) => {
        card.classList.remove('card-active');
        card.classList.remove('card-no-active-RIGHT');
        card.classList.remove('card-no-active-LEFT');
    })
    aboutCard1.classList.add('card-no-active-LEFT');
    aboutCard2.classList.add('card-no-active-LEFT');
    aboutCard3.classList.add('card-active');
    dot1.style.opacity = '.6';
    dot2.style.opacity = '.6';
    dot3.style.opacity = '1';
});

const serviceItemText = document.querySelectorAll('.item-text');
const serviceItemText1 = document.querySelector('.text1');
const serviceItemText2 = document.querySelector('.text2');
const serviceItemText3 = document.querySelector('.text3');
const itemDisplay = document.querySelectorAll('.item');
const itemDisplay1 = document.querySelector('.item-1');
const itemDisplay2 = document.querySelector('.item-2');
const itemDisplay3 = document.querySelector('.item-3');
serviceItemText1.addEventListener('click', () => {
    serviceItemText.forEach((text) => {
        text.classList.remove('item-displayed');
    });
    serviceItemText1.classList.add('item-displayed');
    itemDisplay.forEach((item) => {
        item.style.opacity = '0';
        setTimeout(() => {
            item.style.display = 'none';
        }, 200);
    });
    setTimeout(() => {
        itemDisplay1.style.display = 'flex';
        itemDisplay1.style.opacity = '1';
    }, 200);
});
serviceItemText2.addEventListener('click', () => {
    serviceItemText.forEach((text) => {
        text.classList.remove('item-displayed');
    });
    serviceItemText2.classList.add('item-displayed');
    itemDisplay.forEach((item) => {
        item.style.opacity = '0';
        setTimeout(() => {
            item.style.display = 'none';
        }, 200);
    });
    setTimeout(() => {
        itemDisplay2.style.display = 'flex';
        itemDisplay2.style.opacity = '1';
    }, 200);
});
serviceItemText3.addEventListener('click', () => {
    serviceItemText.forEach((text) => {
        text.classList.remove('item-displayed');
    });
    serviceItemText3.classList.add('item-displayed');
    itemDisplay.forEach((item) => {
        item.style.opacity = '0';
        setTimeout(() => {
            item.style.display = 'none';
        }, 200);
    });
    setTimeout(() => {
        itemDisplay3.style.display = 'flex';
        itemDisplay3.style.opacity = '1';
    }, 200);
});

const questionsContainer = document.querySelector('.questions-container');
const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');
const question1 = document.querySelector('.q1');
const question2 = document.querySelector('.q2');
const question3 = document.querySelector('.q3');
const answer1 = document.querySelector('.a1');
const answer2 = document.querySelector('.a2');
const answer3 = document.querySelector('.a3');
const questionTitleText = document.querySelector('.question-title-text');
question1.addEventListener('click', () => {
    Array.from(answers).forEach((answer) => {
        answer.style.display = 'none';
    });
    Array.from(questionTitleText).forEach((text) => {
        text.style.setProperty('color', 'white');
    });
    answer1.style.display = 'flex';
    questionTitleText[0].style.setProperty('color', '#f48c06');
});
question2.addEventListener('click', () => {
    Array.from(answers).forEach((answer) => {
        answer.style.display = 'none';
    });
    Array.from(questionTitleText).forEach((text) => {
        text.style.setProperty('color', 'white');
    });
    answer2.style.display = 'flex';
    questionTitleText[1].style.setProperty('color', '#f48c06');
});
question3.addEventListener('click', () => {
    Array.from(answers).forEach((answer) => {
        answer.style.display = 'none';
    });
    Array.from(questionTitleText).forEach((text) => {
        text.style.setProperty('color', 'white');
    });
    answer3.style.display = 'flex';
    questionTitleText[2].style.setProperty('color', '#f48c06');
});
function handleDocumentClick2(event) {
    const isClickInsideQuestionsContainer = questionsContainer.contains(event.target);

    if (!isClickInsideQuestionsContainer) {
        answers.forEach((answer) => {
            answer.style.display = 'none';
        });
    };
};
document.addEventListener('click', handleDocumentClick2);

const contactButton = document.querySelector('.click-button');
const contactForm = document.querySelector('.contact-form');
contactButton.addEventListener('click', () => {
    contactForm.style.display = 'flex';
    setTimeout(() => {
        window.scrollBy(0, 300);
    }, 50);
});