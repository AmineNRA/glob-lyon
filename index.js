import express from 'express';
import * as dotenv from 'dotenv';
import session from 'express-session';
import router from "./App/router.js";
import Article from './App/models/article.js';
import Tag from './App/models/tag.js';
import Escapade from "./App/models/escapade.js";
import Comment from './App/models/comment.js';
import User from './App/models/user.js';
import sequelize from './App/database.js';
import * as url from 'url'


dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

// AdminJS.registerAdapter({ Resource, Database })

// const usersNavigation = {
//     name: 'Utilisateurs',
//     icon: 'User'
// }

// const admin = new AdminJS({
//     resources: [{
//         resource: User,
//         options: {
//             navigation: usersNavigation,
//             properties: {
//                 pseudo: {
//                     type: 'richtext',
//                     props: {
//                         rows: 20,
//                     }
//                 }
//             }
//         }
//     }]
// })
// const adminRouter = AdminJSExpress.buildRouter(admin)

// app.use(admin.options.rootPath, adminRouter)

app.use(session({
    resave: true,
    secret: process.env.SECRET,
    saveUninitialized: true,
}));

app.use((req, res, next) => {
    res.locals.isAuthenticated = req.session.user ? true : false;
    res.locals.user = req.session.user
    next()
})

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('./inte-public'));

app.use(router);


app.listen(port, () => {
    console.log(`Serveur sur http://localhost:${port}/`)
})