const readLink = document.querySelectorAll(".link")

const linkRight = [readLink[0], readLink[2]]
const linkLeft = [readLink[1], readLink[3]]

linkRight.forEach(e => {
    e.addEventListener('mouseover', () => {
        e.children[0].classList.add("animation__arrow--right")

    })
    e.addEventListener('mouseout', () => {
        e.children[0].classList.remove("animation__arrow--right")
    })
});


linkLeft.forEach(e => {
    e.addEventListener('mouseover', () => {
        e.children[0].classList.add("animation__arrow--left")

    })
    e.addEventListener('mouseout', () => {
        e.children[0].classList.remove("animation__arrow--left")
    })
});


//caroussel

const buttons = document.querySelectorAll(".caroussel__btn")
const slides = document.querySelectorAll(".slide")


buttons.forEach((button) => {
    button.addEventListener('click', (e) => {

        const calcNextSlide = e.target.id === 'next' ? 1 : -1;

        const slideActive = document.querySelector('.active');

        let newIndex = [...slides].indexOf(slideActive) + calcNextSlide

        if (newIndex < 0) {
            newIndex = [...slides].length - 1
        }
        if (newIndex >= [...slides].length) {
            newIndex = 0
        }

        slides[newIndex].classList.add('active')
        slideActive.classList.remove('active')
    })
})