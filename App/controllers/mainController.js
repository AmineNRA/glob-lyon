export default {
    home: (req, res) => {
        res.render('home', { title: "Page d'acceuil", style: "home", script: "home" })
    },
    activity: (req, res) => {
        res.render('activity', { title: "Activité", style: "activity", script: "filter" })
    },
    actu: (req, res) => {
        res.render('actu', { title: "Actualité", style: "actu" })
    },
    adress: (req, res) => {
        res.render('adress', { title: "Les bonnes adresse", style: "activity", script: 'filter' })
    },
    contact: (req, res) => {
        res.render('contact', { title: "Page de contact", style: "contact" })
    },
    escapade: (req, res) => {
        res.render('escapade', { title: "Escapade", style: "escapade", script: "escapade" })
    },
    legal: (req, res) => {
        res.render('legal', { title: "Page mentions légales", style: "contact" })
    },
    propos: (req, res) => {
        res.render('propos', { title: "A propos", style: "propos" })
    }
}