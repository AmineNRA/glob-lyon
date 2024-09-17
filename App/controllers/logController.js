export default {
    register: (req, res) => {
        res.render('register', { title: "Inscription", style: "login" })
    },
    registerAction: (req, res) => {
        console.log(req.session)
        res.redirect('/login')
    },
    login: (req, res) => {
        res.render('login', { title: 'Se connecter', style: "login" })
    }
}