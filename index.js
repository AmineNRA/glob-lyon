import express from 'express';
import * as dotenv from 'dotenv';
import session from 'express-session';
import router from './App/router.js';



dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(session({
    resave: true,
    secret: process.env.SECRET,
    saveUninitialized: true,
}));

app.set('view engine', 'ejs');
app.set('views', './App/views');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('./inte-public'));

app.use(router);


app.listen(port, () => {
    console.log(`Serveur sur http://localhost:${port}/`)
})