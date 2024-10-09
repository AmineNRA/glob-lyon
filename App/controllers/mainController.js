import Article from '../models/article.js';
import Tag from '../models/tag.js';
import Escapade from "../models/escapade.js";
import { Op } from "sequelize";



export default {
    home: (req, res) => {
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
        });
        await res.render('article', { title: article.title, style: "article", article })
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
        });
        res.render('escapade_inside', { title: escapade.title, style: 'article', escapade })
    },
    legal: (req, res) => {
        res.render('legal', { title: "Page mentions légales", style: "contact" })
    },
    propos: (req, res) => {
        res.render('propos', { title: "A propos", style: "propos" })
    }
}