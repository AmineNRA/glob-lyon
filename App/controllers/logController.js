import User from '../models/user.js';
import bcrypt from 'bcrypt';

export default {
    register: (req, res) => {

        res.render('register', { title: "Inscription", style: "register" })
    },
    registerAction: async (req, res) => {
        try {
            const user = await User.create({ pseudo: req.body.pseudo, email: req.body.email, password: req.body.password })
            res.redirect('/login')
        }
        catch (error) {
            console.log(error.message)
        }
    },
    login: (req, res) => {
        res.render('login', { title: 'Se connecter', style: "login" })
    },
    loginAction: async (req, res) => {
        try {
            const foundUser = await User.findOne({
                where: {
                    pseudo: req.body.pseudo,
                }
            })
            if (foundUser) {
                bcrypt.compare(req.body.password, foundUser.password, function (err, result) {
                    if (result) {
                        req.session.user = {
                            id: foundUser.id,
                            pseudo: foundUser.pseudo,
                            avatar: foundUser.avatar,
                        }
                        res.redirect('/')
                    }
                    else {
                        res.render('error', { message: 'Mauvais couple identifiant/mot de passe' })
                    }
                })
            }
            else {
                res.render('error', message.error)
            }
        }
        catch (error) {
            console.log(error.message)
        }
    },
    logout: (req, res) => {
        req.session.destroy()
        res.redirect('/login')
    }
}