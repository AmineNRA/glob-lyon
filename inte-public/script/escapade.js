const filterList = document.querySelectorAll('.dropdown-content')
const titleFilter = document.querySelectorAll('.dropdown')

const dureeRandonee = filterList[0].children
const difficulte = filterList[1].children
const distanceLyon = filterList[2].children

const articles = document.querySelectorAll('article')

const cross = Object.assign(document.createElement('i'), { className: 'fa-solid fa-circle-xmark fa-xl' })

let category = {
    duree: '',
    distance: '',
    difficulte: '',
}


function deleteAllCategory() {
    let arrayCategory = Object.values(category);
    if (category.distance != 0) {
        category.distance = parseInt(category.distance, 10)
        arrayCategory[1] = arrayCategory.toString()
    }
    for (const category of arrayCategory) {
        if (category.length > 0) {
            let ulFilter = document.querySelector('.filter');
            ulFilter.appendChild(cross)
        }
    }
}


// Si le nom d'un des catégories correspond à la valeur d'une clé de l'objet catégories alors on applique un background color, étant donné qu'il faut faire ça pour plusieurs élements, il faut créer une boucle

function backgroundColor(object) {
    let arrayCategory = Object.values(object);
    let arrayRandonee = Object.values(dureeRandonee)
    let arrayDifficulte = Object.values(difficulte)
    let arrayDistance = Object.values(distanceLyon)

    for (let i = 0; i < 3; i++) {
        if (arrayCategory[0] === arrayRandonee[i].textContent) {
            titleFilter[0].style.backgroundColor = '#F8BD7F'
            arrayRandonee[i].style.backgroundColor = '#F8BD7F';
            deleteAllCategory();

        }
        else if (arrayCategory[2] === arrayDifficulte[i].textContent) {
            titleFilter[1].style.backgroundColor = '#F8BD7F'
            arrayDifficulte[i].style.backgroundColor = '#F8BD7F';
            deleteAllCategory();
        }
        else if (arrayCategory[1] === parseInt(arrayDistance[i].querySelector("span").textContent, 10)) {
            titleFilter[2].style.backgroundColor = '#F8BD7F'
            arrayDistance[i].style.backgroundColor = '#F8BD7F';
            deleteAllCategory();
        }
        else {
            arrayRandonee[i].style.backgroundColor = '';
            arrayDistance[i].style.backgroundColor = '';
            arrayDifficulte[i].style.backgroundColor = '';
        }
    }
}



// Créer fonction pour éviter répétition
// Tout afficher au début de la fonction et ensuite cacher par rapport aux filtres

function articleFilter() {
    articles.forEach(article => {

        article.classList.remove('hidden')
        if (category.distance.length != 0) {
            let integer = parseInt(article.dataset.distance, 10)
            if (integer <= category.distance) {
                article.classList.remove('hidden');
            }
            else {
                article.classList.add("hidden");
            }
        }

        if (category.duree.length != 0 && !article.classList.contains("hidden")) {
            if (category.duree === article.dataset.duration) {
                article.classList.remove('hidden');
            }
            else {
                article.classList.add("hidden");
            }
        }


        if (category.difficulte.length != 0 && !article.classList.contains("hidden")) {
            if (category.difficulte === article.dataset.difficulty) {
                article.classList.remove('hidden');
            }
            else {
                article.classList.add("hidden");
            }
        }
    })
}


Array.from(dureeRandonee).forEach(filter => {
    filter.addEventListener('click', () => {
        let filterText = filter.textContent;
        category.duree = filterText;
        articleFilter()
        backgroundColor(category)
    })
});

Array.from(distanceLyon).forEach(filter => {
    filter.addEventListener('click', () => {
        let filterText = filter.querySelector('span').textContent;
        filterText = parseInt(filterText, 10)
        category.distance = filterText;
        articleFilter()
        backgroundColor(category)
    })
})

Array.from(difficulte).forEach(filter => {
    filter.addEventListener('click', () => {
        let filterText = filter.textContent;
        category.difficulte = filterText;
        articleFilter()
        backgroundColor(category)

    })
})

cross.addEventListener('click', () => {
    delete category.duree
    delete category.distance
    delete category.difficulte
    category = { duree: '', distance: '', difficulte: '' }
    cross.remove()
    titleFilter[0].style.backgroundColor = ''
    titleFilter[1].style.backgroundColor = ''
    titleFilter[2].style.backgroundColor = ''
    articleFilter()
    backgroundColor(category)
})


articles.forEach(article => {
    let colorFilter = article.querySelector('.article__img--filterThree')
    switch (article.dataset.difficulty) {
        case 'Facile':
            colorFilter.style.backgroundColor = 'yellow';
            break;
        case 'Moyen':
            colorFilter.style.backgroundColor = 'orange';
            break;
        case 'Difficile':
            colorFilter.style.backgroundColor = 'red';
            break;
    }
})

// let filtreDifficulty = {
//     "Facile": 'yellow',
//     "Moyen": 'orange',
//     "Difficile": 'red'
// }

// const levelDifficulty = document.querySelectorAll('.article__img--filterThree > span');
// console.log(levelDifficulty)

// debugger
// Array.from(levelDifficulty).forEach(e => {
//     let color = filtreDifficulty[e.textContent];
//     Array.from(articles).forEach(e => {
//         let category = e.querySelector('.article__img--filterThree')
//         category.style.backgroundColor = color
//     })
// })
// let date = new Date()


// function dateMin(date) {
//     const year = date.getFullYear();
//     const month = date.getMonth().toString().padStart(2, '0')
//     date.setDate(date.getDate() + 7)
//     const day = date.getDay()
//     const dayZero = day.toString().padStart(2, '0')
//     return `${year}-${month}-${dayZero}`;
// }

// function dateMax(date) {
//     const year = date.getFullYear();
//     const month = date.getMonth() + 3;
//     const monthZero = month.toString().padStart(2, '0')
//     const day = date.getDay();
//     const dayZero = day.toString().padStart(2, '0')
//     return `${year}-${monthZero}-${dayZero}`;
// }
// B
// const inputDate = document.getElementById('checkin')


// inputDate.setAttribute("min", dateMin(date))
// inputDate.setAttribute("max", dateMax(date))

// let days = 7
// let test = date.setDate(date.getDate() + 7)

// console.log(test)