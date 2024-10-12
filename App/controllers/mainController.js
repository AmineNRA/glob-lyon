import Article from '../models/article.js';
import Tag from '../models/tag.js';
import Escapade from "../models/escapade.js";
import Comment from '../models/comment.js';
import User from '../models/user.js';
import { Op } from "sequelize";
import DOMPurify from 'dompurify';



export default {
    home: async (req, res) => {
        res.render('home', { title: "Page d'acceuil", style: "home", script: "home" })
    },
    activity: async (req, res) => {
        const articles = await Article.findAll({
            where: {
                tag_id: {
                    [Op.or]: [1, 2, 3, 4, 5, 6]
                }
            },
            include: [
                {
                    model: Tag,
                    attributes: ['label']
                }
            ]
        });
        res.render('activity', { title: "Activité", style: "activity", script: "filter", articles })
    },
    article: async (req, res) => {
        let article = await Article.findOne({
            where: {
                id: req.params.id,
            },
            include: [
                {
                    model: User,
                    attributes: ['pseudo']
                }
            ]
        });
        let comments = await Comment.findAll({
            where: {
                article_id: req.params.id
            },
            include: [
                {
                    model: User,
                    attributes: ['pseudo', 'avatar']
                }
            ]
        });
        res.render('article', { title: article.title, style: "article", article, comments })
    },
    articleAction: async (req, res) => {
        try {
            if (!req.session.user) {
                return res.status(401).send('Vous devez être connecté pour poster un commentaire')
            }
            const comment = await Comment.create({ content: req.body.comment, article_id: req.params.id, user_id: req.session.user.id })
            res.redirect(`/article/${req.params.id}`)
        }
        catch (error) {
            console.error(error);
            res.status(500).send('Erreur lors de la création du commentaire')
        }

    },
    actu: (req, res) => {
        res.render('actu', { title: "Actualité", style: "actu" })
    },
    adress: async (req, res) => {
        const articles = await Article.findAll({
            where: {
                tag_id: {
                    [Op.or]: [7, 8, 9, 10]
                }
            },
            include: [
                {
                    model: Tag,
                    attributes: ['label']
                }
            ]
        });
        res.render('adress', { title: "Les bonnes adresse", style: "activity", script: 'filter', articles })
    },
    contact: (req, res) => {
        res.render('contact', { title: "Page de contact", style: "contact" })
    },
    escapade: async (req, res) => {
        const escapades = await Escapade.findAll({});
        console.log(escapades[0].id)
        res.render('escapade', { title: "Escapade", style: "escapade", script: "escapade", escapades })
    },
    escapade_inside: async (req, res) => {
        let escapade = await Escapade.findOne({
            where: {
                id: req.params.id,
            },
            include: [
                {
                    model: User,
                    attributes: ['pseudo']
                }
            ]
        });
        let comments = await Comment.findAll({
            where: {
                escapade_id: req.params.id
            },
            include: [
                {
                    model: User,
                    attributes: ['pseudo', 'avatar']
                }
            ]
        });
        res.render('escapade_inside', { title: escapade.title, style: 'article', escapade, comments })
    },
    escapade_insideAction: async (req, res) => {
        try {
            if (!req.session.user) {
                return res.status(401).send('Vous devez être connecté pour poster un commentaire')
            }
            const addComment = await Comment.create({ content: req.body.comment, escapade_id: req.params.id, user_id: req.session.user.id })
            res.redirect(`/escapade/${req.params.id}`)
        }
        catch (error) {
            console.error(error);
            res.status(500).send('Erreur lors de la création du commentaire')
        }

    },
    legal: (req, res) => {
        res.render('legal', { title: "Page mentions légales", style: "contact" })
    },
    propos: (req, res) => {
        res.render('propos', { title: "A propos", style: "propos" })
    }
}