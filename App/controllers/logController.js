import User from '../models/user.js';
import bcrypt from 'bcrypt';
import sharp from 'sharp';

const roundedCorners = Buffer.from(
    '<svg><rect x="0" y="0" width="100" height="100" rx="50" ry="50"/></svg>'
);

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
            res.render('error', { title: "Erreur", message: error.message })
        }
    },
    account: async (req, res) => {
        try {
            const foundUser = await User.findOne({
                where: {
                    pseudo: req.session.user.pseudo
                }
            })
            if (foundUser) {
                res.render('account', { title: "Compte", style: "account", foundUser })
            }
        }
        catch (error) {
            res.status(401).render('error', { title: "Erreur", message: "Vous devez être connecté pour accéder à cette page" })
        }
    },
    accountAction: async (req, res) => {
        try {
            const foundUser = await User.findOne({ where: { id: req.session.user.id } })
            if (req.body.pseudo && req.body.pseudo !== foundUser.pseudo) {
                foundUser.pseudo = req.body.pseudo;
                req.session.user.pseudo = req.body.pseudo
            }

            if (req.body.email && req.body.email !== foundUser.email) {
                foundUser.email = req.body.email;
            }

            if (req.body.password && req.body.password.trim() !== '') {
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(req.body.password, salt);
                foundUser.password = hashedPassword;
            }

            if (req.file) {
                foundUser.avatar = req.file.path;
                req.session.user.avatar = req.file.path
            }

            await foundUser.save();
            res.redirect('/account');

        }
        catch (error) {
            console.log(error)
            res.status(401).render('error', { title: 'Erreur', message: 'Test' })
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
                        res.render('error', { title: 'Erreur', message: 'Mauvais couple identifiant/mot de passe' })
                    }
                })
            }
            else {
                res.render('error', message.error)
            }
        }
        catch (error) {
            res.render('error', { title: "Erreur", message: error.message })
        }
    },
    logout: (req, res) => {
        req.session.destroy()
        res.redirect('/login')
    }
}