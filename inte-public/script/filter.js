// On récupère la liste des i
const filter = document.querySelector('.filter');
const liFilter = filter.children

// On récupère tous les articles
const article = document.querySelectorAll('.article')

// On écoute le click pour chaque élément de la liste des filtres
Array.from(liFilter).forEach(filter => {
    filter.addEventListener('click', () => {
        let filterText = filter.textContent;

        // Pour chaque article, on vérifie si le texte du span correspond au texte du filtre
        Array.from(article).forEach(article => {
            let category = article.querySelector('span').textContent;

            // Affiche l'article si la catégorie correspond au filtre, sinon le masque
            article.style.display = category === filterText ? '' : 'none';
        });
    });
});


const filterColors = {
    'Restauration': '#4AB4AB',
    'Bars/Clubs': '#F3EBBF',
    'Hébergement': '#971C10',
    'Bien-être/Santé': '#C5584E',
    'Concerts': '#09BC8A',
    'Théâtre': '#CE6A85',
    'Marchés': '#F7DD72',
    'Ateliers': '#F3654C',
    'Festivals': '#11BEBC',
    'Expositions': '#C02345'
};

// On parcourt chaque élément de la liste des filtres
Array.from(liFilter).forEach(e => {
    e.addEventListener('mouseover', () => {
        let color = filterColors[e.textContent];
        if (color) {
            e.style.backgroundColor = color;
        }
    });

    // Réinitialiser la couleur lors du mouseout
    e.addEventListener('mouseout', () => {
        e.style.backgroundColor = "";
    });
});

const articleTag = document.querySelectorAll('span')
console.log(articleTag[0].textContent)

articleTag.forEach(e => {
    let color = filterColors[e.textContent];
    if (color) {
        e.style.backgroundColor = color;
    }
})

//tronquer le surplus pour du responsive

function truncateText() {
    const textContainers = document.querySelectorAll('.text');
    const maxHeight = 100;

    textContainers.forEach(textContainer => {
        textContainer.style.height = maxHeight + 'px';

        if (window.innerWidth < 1030) {
            if (textContainer.scrollWidth > maxHeight) {
                const text = textContainer.innerText;
                textContainer.innerText = text.slice(0, 100) + '...';
            }
        }
    })
}
window.addEventListener('resize', truncateText())