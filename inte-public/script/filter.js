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
    'Bars/club': '#F3EBBF',
    'Hébergement': '#971C10',
    'Bien-être/Santé': '#C5584E',
    'Concerts': '#09BC8A',
    'Théatre': '#CE6A85',
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