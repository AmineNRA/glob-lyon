const like = document.querySelector('#like')

like.addEventListener('click', e => {
    like.classList.toggle("fa-regular")
    like.classList.toggle("fa-solid")
})