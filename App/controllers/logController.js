import User from '../models/user.js';

export default {
    register: (req, res) => {

        res.render('register', { title: "Inscription", style: "login" })
    },
    registerAction: async (req, res) => {
        try {
            const user = await User.create({ email: req.body.email, password: req.body.password })
            res.redirect('/login')
        }
        catch (error) {
            console.log(error.message)
        }
    },
    login: (req, res) => {
        res.render('login', { title: 'Se connecter', style: "login" })
    }
}