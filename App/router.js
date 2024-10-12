import express from 'express';
import mainController from "./controllers/mainController.js";
import logController from './controllers/logController.js';

const router = express.Router();

router.get('/', mainController.home);

router.get('/activite', mainController.activity);
router.get('/article/:id', mainController.article);
router.post('/article/:id', mainController.articleAction);

router.get('/actualite', mainController.actu);
router.get('/adresse', mainController.adress);
router.get('/contact', mainController.contact);

router.get('/escapade', mainController.escapade);
router.get('/escapade/:id', mainController.escapade_inside);
router.post('/escapade/:id', mainController.escapade_insideAction)

router.get('/legale', mainController.legal);
router.get('/a-propos', mainController.propos)

router.get('/inscription', logController.register)
router.post('/inscription', logController.registerAction)

router.get('/login', logController.login)
router.post('/login', logController.loginAction);

router.get('/logout', logController.logout);

export default router