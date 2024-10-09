import Article from "./App/models/article.js";
import Caroussel from "./app/models/caroussel.js";
import Comment from "./app/models/comment.js";
import Escapade from "./App/models/escapade.js";
import Message from "./app/models/message.js";
import Tag from "./App/models/tag.js";
import User from "./App/models/user.js";
import sequelize from "./App/database.js";


try {
    await sequelize.sync({ force: true });

    await User.create({ pseudo: 'Edief', email: 'amine.noura@ymail.com', password: 'admin', firstname: "Amine", lastname: null, role: "admin" })

    await Tag.create({ id: 1, label: "Expositions" });
    await Tag.create({ id: 2, label: "Concerts" });
    await Tag.create({ id: 3, label: "Théâtre" });
    await Tag.create({ id: 4, label: "Festivals" });
    await Tag.create({ id: 5, label: "Marchés" });
    await Tag.create({ id: 6, label: "Ateliers" });
    await Tag.create({ id: 7, label: "Restauration" });
    await Tag.create({ id: 8, label: "Bars/Clubs" });
    await Tag.create({ id: 9, label: "Hébergement" });
    await Tag.create({ id: 10, label: "Bien-être/Santé" });



    await Article.create({
        title: "Plongée au cœur du Japon : l'exposition immersive à la Sucrière de Lyon", description: "Du 12 avril au 3 novembre 2024, la Sucrière à Lyon se transforme en un espace dédié à la culture japonaise avec l'exposition Passion Japon. Cette immersion artistique et culturelle est une invitation à découvrir les multiples facettes de l'archipel nippon, à travers un parcours où se mêlent traditions millénaires et modernité éclatante.", image: "/img/articles/article1.webp", image_inside: "/img/articles/articles_inside/article_inside1.webp", content:
            `<h3>Un voyage au cœur des traditions japonaises<h3>
        <p>L’exposition débute par une plongée dans les traditions du Japon ancien. Les visiteurs sont invités à traverser des décors authentiques représentant des jardins zen paisibles, des maisons traditionnelles ou encore des ruelles bordées d’échoppes typiques (yatai). Ces scènes, soigneusement reconstituées, offrent un aperçu des modes de vie ancestraux toujours présents dans le quotidien japonais contemporain.</p>
        <p>Les visiteurs peuvent admirer des objets issus de l'artisanat traditionnel, comme des kimonos, des éventails ou encore des armures de samouraïs. L'exposition propose également des présentations sur des pratiques culturelles comme la cérémonie du thé, l'art de l'origami et les arts martiaux. Chaque étape de ce parcours dévoile des aspects subtils et fascinants de la culture japonaise, dans lesquels le passé et le présent se rencontrent.</p>
        <h3>La culture pop japonaise en vedette</h3>
        <p>Passion Japon ne se limite pas aux traditions et offre également une large place à la culture pop, un domaine dans lequel le Japon a su conquérir le monde. Les mangas, animés et jeux vidéo, tous devenus des phénomènes planétaires, sont au centre d'une section de l’exposition. Les visiteurs pourront explorer cet univers à travers des œuvres iconiques comme La Grande Vague de Kanagawa ainsi que des animations interactives dédiées à des franchises populaires telles que Dragon Ball, célébrant ainsi les créateurs qui ont marqué des générations entières.</p>
        <p>Un hommage particulier est rendu à Akira Toriyama, avec un espace commémoratif qui lui est dédié, regroupant des dessins et figurines de l'univers Dragon Ball, offrant un véritable sanctuaire aux fans d'animés.</p>
        <h3>Une expérience pour toute la famille</h3>
        <p>Cette exposition immersive est conçue pour tous les âges, rendant l'expérience aussi captivante pour les adultes que pour les enfants. Les plus jeunes pourront s'amuser à travers des jeux interactifs et des livrets d'activités spécialement pensés pour éveiller leur curiosité autour des héros de mangas et des légendes japonaises. Les familles peuvent ainsi partager un moment ludique tout en s’imprégnant de la richesse culturelle du Japon.</p>
        <h3>Une escapade culturelle incontournable à Lyon</h3>
        <p>Ouvert du mardi au dimanche, Passion Japon offre une véritable évasion vers le pays du Soleil Levant, en plein cœur de Lyon. Avec ses décors immersifs, ses objets rares et ses thématiques variées, cette exposition saura séduire autant les passionnés de la culture japonaise que ceux qui la découvriront pour la première fois. L'occasion parfaite de s'immerger dans l'une des cultures les plus fascinantes au monde, sans quitter la France. Les billets sont disponibles en ligne, avec des tarifs réduits certains jours pour permettre au plus grand nombre de profiter de cette expérience unique. Ne manquez pas cette occasion de voyager à travers le temps et l'espace au Japon, à quelques pas seulement du centre de Lyon.</p>`, address: "La Sucrière, Lyon (49-50 Quai Rambaud, 69002)",
        price: "18,90 € plein tarif, 12,90 € pour les jeunes, gratuit pour les moins de 6 ans.",
        date: "du 12 avril au 3 novembre 2024",
        schedule: "Du mardi au dimanche, de 10h à 18h",
        view: 0,
        like: 0,
        tag_id: 1,
        user_id: 1,
    });
    await Article.create({
        title: "Les Voix des Fleuves : Une Traversée Artistique au Cœur de la Biennale de Lyon 2024",
        description: "La 17e Biennale d'art contemporain de Lyon, 'Les Voix des Fleuves - Crossing the Water', explore les échanges humains et environnementaux à travers des œuvres immersives, présentées du 21 septembre 2024 au 5 janvier 2025 dans des lieux emblématiques de Lyon.",
        image: "/img/articles/article2.webp",
        image_inside: "/img/articles/articles_inside/article_inside2.webp",
        content: `<h3>La 17e Biennale d’art contemporain de Lyon, intitulée "Les voix des fleuves – Crossing the Water", se tiendra du 21 septembre 2024 au 5 janvier 2025.</h3> <p>Cette édition explore la relation entre les êtres humains et leur environnement, en s'inspirant des fleuves comme symboles d'échanges, de rencontres et de découvertes.</p>
        <p>
            Les œuvres exposées, créées par des artistes internationaux, reflètent l'idée de la connexion entre les individus à travers des récits portés par l'eau, qu'il s'agisse d'histoires de commerce, de conquêtes ou de collaborations. Cette réflexion prend vie dans des lieux symboliques de Lyon et de Villeurbanne, tels que les Grandes Locos, ancien site industriel chargé d'histoire ouvrière, et la Cité Internationale de la Gastronomie. Ces espaces incarnent l'hospitalité, l'accueil et les échanges culturels, des thèmes centraux de la Biennale.
            Parmi les 36 artistes participants, certains s'inspirent directement des particularités physiques et historiques des lieux pour créer des œuvres qui résonnent avec l’histoire locale, les défis environnementaux, ou encore les révoltes sociales. La commissaire Alexia Fabre souligne que l’altérité, bien qu’elle puisse représenter un risque, est essentielle pour la découverte et la créativité.
        </p>
        <p>
            Les visiteurs pourront découvrir des installations immersives, notamment aux Musée d'art contemporain, Institut d'art contemporain de Villeurbanne, et dans d'autres sites emblématiques, offrant une véritable expérience collective et engageante.
            En somme, cette Biennale interroge les liens entre l'humain et son environnement à travers l'eau, tout en célébrant la diversité et l'invention sociale dans un cadre artistique contemporain unique.
        </p>`,
        address:
            "Musée d'art contemporain de Lyon ",
        date: "Du 21 septembre 2024 au 5 janvier 2025",
        schedule: "Varient en fonction des lieux, mais en général de 11h à 18h.",
        price: "Plein tarif : 16 € Tarif réduit : 9 € (étudiants, demandeurs d'emploi, moins de 26 ans Gratuit pour les moins de 15 ans.",
        view: 0,
        like: 0,
        tag_id: 1,
        user_id: 1
    })
    await Article.create({
        title: "Épidémies : Comprendre et Soigner le Vivant au Musée des Confluences",
        description: "L'exposition 'Épidémies – Prendre soin du vivant' au Musée des Confluences, explore l’histoire des épidémies et l'impact des crises sanitaires sur le vivant, du 15 octobre 2024 au 25 août 2025.",
        image: "/img/articles/article3.webp",
        image_inside: "/img/articles/articles_inside/article_inside3.webp",
        content: `<p>Le musée des Confluences de Lyon accueille une exposition fascinante intitulée "Épidémies - Prendre soin du Vivant". Cette exposition, qui explore les relations complexes entre l’homme, les écosystèmes et les épidémies, invite les visiteurs à réfléchir sur les enjeux contemporains de la santé publique et de l’environnement.</p>
            <h3>Une Plongée au Cœur des Épidémies</h3>
            <p>L’exposition se penche sur l’histoire des épidémies qui ont marqué l’humanité, de la peste noire à la pandémie de COVID-19. À travers une approche multidisciplinaire, elle met en lumière les facteurs biologiques, sociologiques et environnementaux qui influencent la propagation des maladies. Les visiteurs peuvent découvrir des objets historiques, des témoignages de scientifiques, ainsi que des installations artistiques qui illustrent la lutte de l’homme contre les épidémies.</p>
            <h3>Prendre Soin du Vivant</h3>
           <p>Le fil rouge de cette exposition est la notion de "prendre soin du vivant". Elle questionne notre rapport à la nature et aux autres espèces. Comment nos actions impactent-elles l’équilibre des écosystèmes ? Quelles responsabilités avons-nous envers notre environnement ? À travers des dispositifs interactifs et des conférences, l’exposition incite à adopter une approche proactive pour préserver la santé des individus et des écosystèmes.</p>
            <h3>Des Activités et Conférences</h3>
            <p>En parallèle de l’exposition, le musée propose une série d’ateliers et de conférences animés par des experts en santé publique, en biologie et en écologie. Ces événements sont une occasion unique d’approfondir les thèmes abordés et de participer à des discussions sur les défis que pose la santé dans un monde interconnecté.</p>`,
        address: "Musée des Confluences, Lyon",
        date: "Du 5 octobre 2023 au 5 mai 2024",
        schedule: "Lundi, mardi, jeudi et vendredi : 11h - 19h Samedi et dimanche : 10h - 19h Fermé le 1er janvier, 1er mai et 25 décembre",
        price: "Adultes : 9 € Réduits (étudiants, demandeurs d’emploi) : 7 € Gratuit pour les moins de 18 ans et les enseignants",
        view: 0,
        like: 0,
        tag_id: 1,
        user_id: 1
    });
    await Article.create({
        title: "Concert de Hatik et High-lo : Une Soirée Électrisante au Transbordeur",
        description: "Venez vivre une soirée inoubliable au Transbordeur le 8 novembre 2024 avec Hatik et High-lo, deux étoiles montantes du rap français. Plongez dans des performances électrisantes et des mélodies envoûtantes dans une ambiance chaleureuse !",
        image: "/img/articles/article4.webp",
        image_inside: "/img/articles/articles_inside/article_inside4.webp",
        content: `<p>Le Transbordeur se prépare à accueillir deux artistes montants de la scène rap française : Hatik et High-lo, le 8 novembre 2024. Ce concert promet d’être un événement mémorable, alliant énergie, émotions et des performances captivantes.</p>
        <h3>Hatik : Une Étoile Montante</h3>
        <p>Hatik, connu pour ses textes introspectifs et sa voix unique, a su conquérir le cœur du public avec son album "Vague à l'âme". Ses morceaux, mêlant rap et mélodies, abordent des thèmes variés allant de l'amour à la lutte personnelle. Avec des succès comme "Angela", il a su s’imposer comme l'une des figures emblématiques du nouveau rap français.</p>
        <h3>High-lo : Un Univers Singulier</h3>
        <p>High-lo, de son côté, se distingue par son style innovant et ses paroles percutantes. Avec une esthétique musicale qui mélange rap, trap et sonorités électroniques, il a su créer un univers qui lui est propre. Son dernier projet a reçu un accueil chaleureux, et sa présence sur scène est déjà très attendue par ses fans.</p>
        <h3>Une Soirée Inoubliable</h3>
        <p>Le concert au Transbordeur sera l’occasion pour les fans de vivre une expérience immersive, avec des performances live qui sauront faire vibrer la salle. Les deux artistes, chacun avec leur style unique, offriront une soirée riche en émotions et en musique.</p>`,
        date: "8 novembre 2024",
        schedule: "Ouverture des portes à 19h30, début du concert à 20h30",
        address: "Le Transbordeur, Lyon",
        price: "Préventes : 25 € Sur place : 30 €",
        view: 0,
        like: 0,
        tag_id: 2,
        user_id: 1
    });
    Article.create({
        title: "Concert de Hollywood Undead : Une Nuit de Rock Énergique au Transbordeur",
        description: "Assistez à une soirée explosive avec Hollywood Undead au Transbordeur le 12 novembre 2024, un mélange unique de rock et de rap qui enflammera la scène. Plongez dans une ambiance énergique et des performances inoubliables !",
        image: "/img/articles/article5.webp",
        image_inside: "/img/articles/articles_inside/article_inside5.webp",
        content: `<p>Préparez-vous pour une soirée explosive au Transbordeur le 12 novembre 2024 avec Hollywood Undead, le groupe emblématique de rock alternatif et rap metal. Ne manquez pas cette occasion de vivre une performance intense et mémorable !</p>
        <h3>Hollywood Undead : Un Univers Unique</h3>
        <p>Hollywood Undead est connu pour sa fusion unique de rock, rap et éléments électroniques. Depuis leurs débuts, le groupe a su captiver le public avec des titres percutants et des performances scéniques énergiques. Des chansons comme "Undead" et "Day of the Dead" ont fait leur renommée, et leur dernier album continue d’affirmer leur place sur la scène musicale internationale.</p>
        <h3>Une Performance Inoubliable</h3>
        <p>Le concert au Transbordeur promet d’être une expérience live inégalée, avec des riffs puissants et des paroles qui résonnent. Les fans pourront s’attendre à un spectacle haut en couleur, mêlant émotions et énergie brute, idéal pour chanter et danser jusqu’au bout de la nuit.</p>`,
        date: "12 novembre 2024",
        schedule: " Ouverture des portes à 19h30, début du concert à 20h30",
        address: "Le Transbordeur, Lyon",
        price: "Préventes : 30 € Sur place : 35 € ",
        view: 0,
        like: 0,
        tag_id: 2,
        user_id: 1
    });
    Article.create({
        title: "Concert d'Emma Peters : Une Soirée Émotionnelle à La Rayonne",
        description: "Venez découvrir Emma Peters à La Rayonne le 21 novembre 2024 pour une soirée émotive mêlant pop et chanson française. Ne manquez pas cette occasion de plonger dans son univers musical captivant !",
        image: "/img/articles/article6.webp",
        image_inside: "/img/articles/articles_inside/article_inside6.webp",
        content: `<p>Ne manquez pas Emma Peters en concert à La Rayonne le 21 novembre 2024. La chanteuse française promet une performance intime et captivante, mêlant pop et chanson française pour une soirée pleine d’émotions.</p>
        <h3>Emma Peters : Une Voix Émotive</h3>
        <p>Emma Peters s’est rapidement imposée comme une voix incontournable de la scène musicale française. Avec ses mélodies accrocheuses et ses paroles sincères, elle aborde des thèmes universels tels que l’amour et les relations. Ses titres comme "C’est pas un drame" et "L’amour ne suffit pas" ont su toucher un large public, faisant d'elle une artiste à découvrir absolument.</p>
        <h3>Une Performance à Ne Pas Manquer</h3>
        <p>Son concert à La Rayonne sera l'occasion de vivre des moments authentiques, avec des chansons qui résonnent profondément. Préparez-vous à une soirée où chaque note et chaque mot vous transporteront dans son univers.</p>`,
        date: "21 novembre 2024",
        schedule: "Ouverture des portes à 19h30, début du concert à 20h30",
        address: "La Rayonne, Lyon",
        price: "Préventes : 25 € Sur place : 30 €",
        view: 0,
        like: 0,
        tag_id: 2,
        user_id: 1

    });
    Article.create({
        title: "Les femmes ont toujours raison, les hommes n'ont jamais tort : Une Comédie Épicée au Rideau Rouge",
        description: "Assistez à la comédie Les femmes ont toujours raison, les hommes n'ont jamais tort au Rideau Rouge le 7 décembre 2024 pour une soirée pleine de rires et de réflexions sur les relations humaines. Une expérience à ne pas manquer !",
        image: "/img/articles/article7.webp",
        image_inside: "/img/articles/articles_inside/article_inside7.webp",
        content: `<p>Ne manquez pas la pièce de théâtre Les femmes ont toujours raison, les hommes n'ont jamais tort écrite par Philippe Lellouche et Géraldine Nakache, qui se jouera au Rideau Rouge le 7 décembre 2024. Cette comédie promet de faire rire et réfléchir sur les relations entre les sexes avec humour et pertinence.</p>
        <h3>Une Comédie Acclamée</h3>
        <p>Cette pièce met en scène des situations cocasses et des dialogues piquants, explorant les malentendus et les confrontations entre hommes et femmes. Avec une approche ludique, Les femmes ont toujours raison, les hommes n'ont jamais tort aborde des thèmes universels tels que la communication, l’amour et les querelles de couple, offrant un miroir amusant sur la vie moderne.</p>
        <h3>Une Soirée Inoubliable</h3>
        <p>Le Rideau Rouge sera le cadre idéal pour cette représentation, où rires et réflexions s’entremêleront. Que vous veniez en couple ou entre amis, cette pièce saura divertir tout en suscitant des débats animés.</p>`,
        address: "Le Rideau Rouge, Lyon",
        date: "7 décembre 2024",
        schedule: "20h30",
        price: "Préventes : 18 € Sur place : 22 €",
        view: 0,
        like: 0,
        tag_id: 3,
        user_id: 1
    });
    Article.create({
        title: "Pièce de Théâtre Desperate Housemen : Une Comédie Drôle au Théâtre à l'Ouest",
        description: "Assistez à la comédie Desperate Housemen de Jean-Marie Chevret au Théâtre à l'Ouest le 21 janvier 2025 pour une soirée pleine de rires et de réflexions sur les relations modernes. Une expérience à ne pas manquer !",

        image: "/img/articles/article8.webp",
        image_inside: "/img/articles/articles_inside/article_inside8.webp",

        content: `<p>Ne manquez pas la pièce de théâtre Desperate Housemen, écrite par Jean-Marie Chevret, qui se jouera au Théâtre à l'Ouest le 21 janvier 2025. Cette comédie promet de faire rire aux éclats en offrant une vision décalée des relations de couple et des tracas quotidiens.</p>
        <h3>Une Comédie Pleine de Quiproquos</h3>
        <p>Desperate Housemen met en scène un groupe d'hommes confrontés aux défis de la vie moderne. Entre quiproquos, malentendus et situations cocasses, cette pièce aborde avec humour les thèmes de l'amitié, de la parentalité et des relations amoureuses. Les personnages hauts en couleur vous emmèneront dans un tourbillon d'émotions et de rires.</p>
        <h3>Une Soirée Inoubliable</h3>
        <p>Le Théâtre à l'Ouest sera le cadre idéal pour cette représentation, où la bonne humeur et le rire seront au rendez-vous. Que vous veniez entre amis ou en famille, cette pièce saura divertir et offrir une belle soirée.</p>`,
        address: "Théâtre à l'Ouest, Lyon",
        date: "Du 28/09/2024 au 21/01/2025",
        schedule: "20h30",
        price: "Préventes : 22 € Sur place : 27 €",
        view: 0,
        like: 0,
        tag_id: 3,
        user_id: 1
    });
    Article.create({
        title: "Festival Les Guitares : Joe Bel & Family Tree au Polaris",
        description: "Venez profiter du festival Les Guitares au Polaris le 29 novembre 2024, avec Joe Bel et Family Tree pour une soirée de musique live envoûtante et énergique. Une expérience à ne pas manquer !",

        image: "/img/articles/article9.webp",
        image_inside: "/img/articles/articles_inside/article_inside9.webp",

        content: `<p>Ne manquez pas le festival Les Guitares au Polaris le 29 novembre 2024, mettant en vedette la talentueuse Joe Bel et le groupe Family Tree. Cette soirée promet une expérience musicale unique alliant talents émergents et performances captivantes.</p>
        <h3>Joe Bel : Une Voix Envoûtante</h3>
        <p>Joe Bel, artiste singulière de la scène musicale française, saura vous séduire avec sa voix douce et ses mélodies touchantes. Elle mélange habilement pop, folk et influences acoustiques, créant une atmosphère intime et émotive qui transporte son public.</p>
        <h3>Family Tree : Une Énergie Communautaire</h3>
        <p>Le groupe Family Tree, quant à lui, apportera une touche dynamique à la soirée avec ses rythmes entraînants et ses harmonies vocales. Leur musique, riche en émotions, est un véritable hommage à la convivialité et à l'esprit de famille, promettant une ambiance chaleureuse.</p>
        <h3>Une Soirée Musicale Inoubliable</h3>
        <p>Le Polaris à Corbas sera le cadre idéal pour ce festival, où la passion pour la musique et le partage seront au cœur de l'événement. Que vous soyez fan de Joe Bel, de Family Tree ou simplement amateur de belles mélodies, cette soirée sera une célébration de la musique live.</p>`,
        address: "Polaris, Corbas",
        date: "29 novembre 2024",
        schedule: "Ouverture des portes à 19h00, début des concerts à 20h00",
        price: "Préventes : 25 € Sur place : 30 €",
        view: 0,
        like: 0,
        tag_id: 4,
        user_id: 1
    })
    Article.create({
        title: "Paganfest : Alestorm, Ensiferum, Tyr, Heidevolk & Elvenking au Transbordeur",
        description: "Venez assister au Paganfest au Transbordeur le 29 janvier 2024, avec Alestorm, Ensiferum, Tyr, Heidevolk et Elvenking pour une soirée de métal folk épique et envoûtante. Une expérience à ne pas manquer !",

        image: "/img/articles/article10.webp",
        image_inside: "/img/articles/articles_inside/article_inside10.webp",

        content: `<p>Ne manquez pas le Paganfest au Transbordeur le 29 janvier 2024, avec un line-up exceptionnel comprenant Alestorm, Ensiferum, Tyr, Heidevolk et Elvenking. Cette soirée promet d'être un véritable festival de métal folk, alliant riffs puissants et mélodies épiques.</p>
        <h3>Alestorm : Les Pirates du Métal</h3>
        <p>Alestorm, le groupe emblématique du métal pirate, vous fera vivre une expérience musicale inoubliable avec ses hymnes festifs et entraînants. Préparez-vous à chanter et à danser sur des morceaux tels que "Drink" et "Keelhauled".</p>
        <h3>Ensiferum : Épopée Viking</h3>
        <p>Les Finlandais d'Ensiferum apporteront leur mélange unique de métal mélodique et de folk viking. Avec des titres épiques et des performances énergiques, ils sauront captiver le public et créer une atmosphère inoubliable.</p>
        <h3>Tyr, Heidevolk & Elvenking : Des Ambiances Épiques</h3>
        <p>Les groupes Tyr, Heidevolk et Elvenking compléteront ce festival avec leurs sonorités distinctes et leurs thèmes inspirés de la mythologie et des légendes. Chacun d'eux apportera sa touche unique, rendant cette soirée encore plus mémorable.</p>
        <h3>Une Soirée Métal Inoubliable</h3>
        <p>Le Transbordeur sera le lieu idéal pour cette célébration du métal folk, où les fans pourront se rassembler et partager leur passion pour la musique. Que vous soyez un fervent admirateur de ces groupes ou que vous souhaitiez découvrir de nouveaux sons, cette soirée sera un véritable festin pour les amateurs de métal.</p>`,
        address: "Transbordeur, Lyon",
        date: "29 janvier 2024",
        schedule: "Ouverture des portes à 18h00, début des concerts à 19h00",
        price: "Préventes : 30 € Sur place : 35 €",
        view: 0,
        like: 0,
        tag_id: 4,
        user_id: 1
    })
    Article.create({
        title: 'Festival Les Nuits de Fourvières 2025 : Une Célébration Culturelle Éclectique',
        description: 'Assistez aux Nuits de Fourvières du 1er juin au 31 juillet 2025 pour une série de spectacles inoubliables dans le cadre enchanteur du Théâtre antique de Fourvières. Une célébration culturelle à ne pas manquer !',

        image: '/img/articles/article11.webp',
        image_inside: '/img/articles/articles_inside/article_inside11.webp',

        content: `<p>Ne manquez pas la prochaine édition des Nuits de Fourvières, qui se déroulera du 1er juin au 31 juillet 2025. Ce festival emblématique de Lyon promet une programmation riche et variée, alliant concerts, spectacles de danse, théâtre et projections de films dans le cadre magnifique du Théâtre antique de Fourvières.</p>
        <h3>Un Éventail de Talents</h3>
        <p>Les Nuits de Fourvières accueillent des artistes de renommée nationale et internationale, offrant un éventail de genres allant de la musique classique au rock, en passant par le hip-hop et le jazz. Chaque année, le festival attire des milliers de spectateurs, venus profiter de la magie des performances sous les étoiles.</p>
        <h3>Une Ambiance Unique</h3>
        <p>Avec son ambiance conviviale et festive, le festival est un rendez-vous incontournable pour les amateurs de culture et de spectacles vivants. Les Nuits de Fourvières se déroulent dans un cadre historique, ajoutant une dimension supplémentaire à chaque performance.</p>
        <p>Les préventes commenceront à partir de mars 2025, alors assurez-vous de rester informé pour ne pas manquer vos artistes préférés !</p>`,
        address: "Théâtre antique de Fourvières, Lyon",
        date: "1er juin au 31 juillet 2025",
        price: "Les prix varient selon les spectacles, généralement entre 20 € et 60 €. Des réductions peuvent être disponibles pour les jeunes, les étudiants et les groupes.",
        view: 0,
        like: 0,
        tag_id: 4,
        user_id: 1
    })
    Article.create({
        title: "Marché de la Croix-Rousse",
        description: "Le marché de la Croix-Rousse, ouvert tous les jours, propose des fruits et légumes frais, des produits bio et des spécialités artisanales dans une ambiance conviviale.",

        image: "/img/articles/article12.webp",
        image_inside: "/img/articles/articles_inside/article_inside12.webp",

        content: `<p>Découvrez le marché de la Croix-Rousse, un lieu emblématique qui se tient tous les jours. Réputé pour ses étals colorés de fruits et légumes frais, il attire les amateurs de produits bio et locaux. En plus des fruits et légumes, vous trouverez également des fromages, de la charcuterie et du pain artisanal, le tout dans une ambiance conviviale.</p>`,
        address: "Place de la Croix-Rousse",
        date: "Tous les jours",
        schedule: "De 7h à 13h",
        price: " Accès gratuit, prix des produits variables",
        view: 0,
        like: 0,
        tag_id: 5,
        user_id: 1
    })
    Article.create({
        title: "Marché Saint-Antoine : Les Saveurs du Rhône",
        description: "Situé le long des quais du Rhône, le marché Saint-Antoine offre des produits de la mer, des spécialités lyonnaises et des produits frais, idéal pour les gourmets.",

        image: "/img/articles/article12.webp",
        image_inside: "/img/articles/articles_inside/article_inside12.webp",

        content: "<p>Le marché Saint-Antoine, situé le long des quais du Rhône, est un incontournable pour les amateurs de gastronomie. Ouvert le mardi, jeudi et samedi, il est réputé pour ses produits de la mer, ses spécialités lyonnaises et ses produits frais. C'est l'endroit idéal pour déguster des plats locaux ou pour acheter des ingrédients pour vos recettes.</p>",
        address: "Quai Saint-Antoine",
        date: " Mardi, jeudi et samedi",
        schedule: "De 7h à 13h",
        price: "Accès gratuit, prix des produits variables",
        view: 0,
        like: 0,
        tag_id: 5,
        user_id: 1
    });
    Article.create({
        title: "Marché de Gerland : Un Marché Convivial",
        description: "Le marché de Gerland, qui a lieu tous les dimanches, est un lieu convivial où l'on trouve fruits, légumes et produits locaux, parfait pour les amateurs de produits frais.",

        image: "/img/articles/article13.webp",
        image_inside: "/img/articles/articles_inside/article_inside13.webp",

        content: "<p>Le marché de Gerland se tient tous les dimanches matin et offre une ambiance conviviale. Ce marché propose une large sélection de fruits, légumes, viandes, produits laitiers et épices. C'est l'occasion parfaite pour rencontrer des producteurs locaux et découvrir les saveurs de la région.</p>",
        address: "Place des Docteurs Charles et Jean Borde",
        date: "Dimanche",
        schedule: " De 7h à 13h",
        price: "Accès gratuit, prix des produits variables",
        view: 0,
        like: 0,
        tag_id: 5,
        user_id: 1
    })
    Article.create({
        title: "Marché de Monplaisir : Artisanat et Fraîcheur",
        description: "Le marché de Monplaisir, chaque vendredi, offre une atmosphère chaleureuse avec des étals de produits frais et locaux, idéal pour rencontrer les producteurs.",

        image: "/img/articles/article14.webp",
        image_inside: "/img/articles/articles_inside/article_inside14.webp",

        content: "<p>Le marché de Monplaisir est un rendez-vous hebdomadaire qui a lieu chaque vendredi. Avec ses étals de produits frais et locaux, ce marché offre une atmosphère chaleureuse. C'est l'endroit idéal pour discuter avec les producteurs et en apprendre davantage sur leurs savoir-faire.</p>",
        address: "Avenue des Frères Lumière",
        date: "Vendredi",
        schedule: "De 7h à 13h",
        price: "Accès gratuit, prix des produits variables",
        view: 0,
        like: 0,
        tag_id: 5,
        user_id: 1
    })
    Article.create({
        title: "Marché de Villeurbanne : Une Diversité de Produits",
        description: "Le marché de Villeurbanne, ouvert tous les mercredis et dimanches, propose une diversité de produits frais et artisanaux, dans une ambiance populaire et animée.",

        image: "/img/articles/article15.webp",
        image_inside: "/img/articles/articles_inside/article_inside15.webp",

        content: "<p>Le marché de Villeurbanne se tient tous les mercredis et dimanches, offrant un large choix de produits frais, artisanaux et locaux. Ce marché populaire est un lieu de rencontre pour les habitants, qui viennent y faire leurs courses tout en profitant d'une ambiance conviviale.</p>",
        address: "Place de la République, Villeurbanne",
        date: " Mercredi et dimanche",
        schedule: " De 7h à 13h",
        price: " Accès gratuit, prix des produits variables",
        view: 0,
        like: 0,
        tag_id: 5,
        user_id: 1
    })
    Article.create({
        title: "Marché de la Part-Dieu : Un Marché Urbain",
        description: "Le marché couvert de la Part-Dieu, ouvert les mardis, jeudis et samedis, offre une variété de produits frais dans un cadre urbain dynamique.",

        image: "/img/articles/article16.webp",
        image_inside: "/img/articles/articles_inside/article_inside16.webp",

        content: "<p>Le marché de la Part-Dieu est un marché couvert qui se tient tous les mardis, jeudis et samedis. Il propose une variété de produits frais allant des fruits et légumes aux viandes, poissons et produits laitiers. Ce marché est idéal pour ceux qui recherchent des produits de qualité dans un cadre urbain.</p>",
        address: "Hall du marché de la Part-Dieu",
        date: "Mardi, jeudi et samedi",
        schedule: "De 7h à 13h",
        price: "Accès gratuit, prix des produits variables",
        view: 0,
        like: 0,
        tag_id: 5,
        user_id: 1
    });
    Article.create({
        title: "Atelier de Céramique à Lyon 4ème",
        description: "Participez à un atelier de céramique à Lyon 4ème pour apprendre à façonner des pièces uniques tout en vous amusant, quel que soit votre niveau !",

        image: "/img/articles/article17.webp",
        image_inside: "/img/articles/articles_inside/article_inside17.webp",

        content: "<p>Découvrez l'art de la céramique lors d'un atelier convivial à Lyon 4ème. Que vous soyez débutant ou déjà expérimenté, cet atelier vous permettra de libérer votre créativité en apprenant à travailler l'argile. Sous l'œil bienveillant d'un professionnel, vous aurez l'opportunité de créer vos propres pièces en modelant, tournant et émaillant l'argile. C'est une expérience idéale pour se détendre, développer de nouvelles compétences et repartir avec vos créations !</p>",
        address: "26 Rue Jacquard, 69004 Lyon",
        date: "Ateliers proposés le week-end et en soirée",
        schedule: "Environ 2 à 3 heures par session",
        price: "60 € par personne",
        view: 0,
        like: 0,
        tag_id: 6,
        user_id: 1
    });
    Article.create({
        title: "Atelier de Parfum à Lyon",
        description: "Plongez dans l'univers olfactif lors d'un atelier de parfum à Lyon, où vous apprendrez à créer votre propre fragrance unique, guidé par des experts.",

        image: "/img/articles/article18.webp",
        image_inside: "/img/articles/articles_inside/article_inside18.webp",

        content: "<p>Participez à un atelier de parfum à Lyon et découvrez les secrets de la création de fragrances. Cet atelier interactif vous permettra d'explorer les différentes notes olfactives et de composer votre propre parfum personnalisé. Guidé par un expert, vous apprendrez à mélanger les essences et à comprendre les bases de la parfumerie. C'est une expérience sensorielle enrichissante, idéale pour les passionnés ou ceux en quête d'une activité originale à partager.</p>",
        address: "69001 Lyon (adresse exacte à confirmer lors de la réservation)",
        date: "Ateliers disponibles les week-ends et en semaine",
        schedule: "Environ 2 heures",
        price: "70 € par personne",
        view: 0,
        like: 0,
        tag_id: 6,
        user_id: 1
    });
    Article.create({
        title: "Les Trois Dômes",
        description: "Perché au sommet de l’hôtel Sofitel, Les Trois Dômes offre une cuisine gastronomique française raffinée avec une vue imprenable sur Lyon.",
        image: "/img/articles/article20.webp",
        image_inside: "/img/articles/articles_inside/article_inside20.webp",
        content: "<p>Situé au dernier étage du Sofitel Lyon Bellecour, Les Trois Dômes est un restaurant gastronomique réputé pour ses plats délicats et raffinés, accompagnés d'une vue panoramique exceptionnelle sur la ville. Le chef Christian Lherm met en avant des produits de saison dans une cuisine française inventive, sublimée par un cadre chic et élégant. Une adresse idéale pour un dîner d'exception ou un moment romantique, où la vue est tout aussi époustouflante que les mets.</p>",
        address: "20 Quai Gailleton, 69002 Lyon",
        price: "Menus à partir de 80 €",
        schedule: "Ouvert du mardi au samedi, de 12h à 13h30 et de 19h30 à 21h30",
        view: 0,
        like: 0,
        tag_id: 7,
        user_id: 1
    });
    Article.create({
        title: "Bistrot Têtedoie",
        description: "Le Bistrot Têtedoie propose une cuisine de bistrot revisitée par le chef étoilé Christian Têtedoie, avec une vue imprenable sur Lyon.",
        image: "/img/articles/article21.webp",
        image_inside: "/img/articles/articles_inside/article_inside21.webp",
        content: "<p>Niché sur les hauteurs de Fourvière, le Bistrot Têtedoie est un address incontournable pour savourer une cuisine de bistrot revisitée par le chef étoilé Christian Têtedoie. Proposant des plats gourmands et accessibles, le bistrot offre également une vue splendide sur la ville de Lyon, créant une expérience unique. Idéal pour un déjeuner ou un dîner convivial dans un cadre élégant mais décontracté.</p>",
        address: "4 Rue Professeur Pierre Marion, 69005 Lyon",
        price: "Menus à partir de 35 €",
        schedule: "Ouvert tous les jours, de 12h à 14h et de 19h à 22h",
        view: 0,
        like: 0,
        tag_id: 7,
        user_id: 1
    });
    Article.create({
        title: "Culina Hortus",
        description: "Culina Hortus est un restaurant 100 % végétarien, où la haute gastronomie se marie avec des produits locaux et de saison.",
        image: "/img/articles/article22.webp",
        image_inside: "/img/articles/articles_inside/article_inside22.webp",

        content: "<p>Culina Hortus, niché en plein cœur du 1er arrondissement, est une référence en matière de gastronomie végétarienne à Lyon. Élaborant des plats aussi esthétiques que savoureux, ce restaurant prouve que la cuisine végétarienne peut être sophistiquée et inventive. En privilégiant les produits de saison et locaux, le chef propose une expérience culinaire exceptionnelle qui séduira aussi bien les végétariens que les amateurs de grande cuisine.</p>",
        address: "38 Rue de l'Arbre Sec, 69001 Lyon",
        price: " Menus à partir de 45 €",
        schedule: " Ouvert du mardi au samedi, de 12h à 14h et de 19h à 22h",
        view: 0,
        like: 0,
        tag_id: 7,
        user_id: 1
    });
    Article.create({
        title: "La Mère Brazier",
        description: "La Mère Brazier, institution lyonnaise depuis 1921, allie tradition et innovation dans une cuisine gastronomique française reconnue et étoilée.",
        image: "/img/articles/article23.webp",
        image_inside: "/img/articles/articles_inside/article_inside23.webp",
        content: "<p>Véritable institution de la gastronomie lyonnaise, La Mère Brazier a été fondée en 1921 et continue de porter haut les valeurs de la cuisine française. Étoilé au Michelin, ce restaurant légendaire est dirigé par le chef Mathieu Viannay, qui allie tradition et modernité dans ses créations culinaires. Des plats emblématiques comme la poularde demi-deuil ou la tarte aux pralines sont revisités avec finesse, dans un cadre élégant et historique.</p>",
        address: "12 Rue Royale, 69001 Lyon",
        schedule: "Ouvert du mardi au vendredi, de 12h à 13h30 et de 19h30 à 21h30",
        price: " Menus à partir de 75 €",
        view: 0,
        like: 0,
        tag_id: 7,
        user_id: 1
    });
    Article.create({
        title: "Lyon's GastroPub",
        description: "Lyon's GastroPub mêle esprit de pub et gastronomie, proposant une cuisine bistronomique dans une ambiance chaleureuse et conviviale.",

        image: "/img/articles/article24.webp",
        image_inside: "/img/articles/articles_inside/article_inside24.webp",

        content: "<p>Le Lyon's GastroPub se distingue par son concept original : fusionner l’ambiance détendue d’un pub avec une cuisine bistronomique créative. Situé au cœur du 5ème arrondissement, ce restaurant propose des plats élaborés à partir de produits frais et de saison, avec une carte qui évolue au fil des mois. C'est l'endroit idéal pour se détendre entre amis autour d’un bon repas et de bières artisanales soigneusement sélectionnées.</p>",
        address: "7 Quai des Célestins, 69005 Lyon",
        price: "Plats à partir de 25 €",
        schedule: "Ouvert du mardi au dimanche, de 12h à 14h30 et de 19h à 23h",
        view: 0,
        like: 0,
        tag_id: 7,
        user_id: 1
    });
    Article.create({
        title: "Café Hôtel Dieu",
        description: "Le Café Hôtel Dieu, situé au sein du Grand Hôtel-Dieu, propose une cuisine moderne et de qualité dans un cadre historique emblématique de Lyon.",
        image: "/img/articles/article25.webp",
        image_inside: "/img/articles/articles_inside/article_inside25.webp",
        content: "<p>Au cœur de l’iconique Grand Hôtel-Dieu, le Café Hôtel Dieu propose une cuisine française moderne et raffinée. Ce restaurant offre un cadre unique, mêlant histoire et modernité, idéal pour un déjeuner d’affaires ou un dîner en famille. La carte, élaborée à partir de produits frais et de saison, met à l’honneur des plats simples mais élégants, sublimés par la touche créative du chef.</p>",
        address: "1 Place de l’Hôpital, 69002 Lyon",
        price: "Menus à partir de 30 €",
        schedule: "Ouvert tous les jours, de 12h à 14h30 et de 19h à 22h30",
        view: 0,
        like: 0,
        tag_id: 7,
        user_id: 1
    });
    Article.create({
        title: "Er Baretto",
        description: "Er Baretto est un petit restaurant italien authentique, proposant des spécialités de pâtes et des plats traditionnels de l'Italie dans un cadre intimiste.",
        image: "/img/articles/article26.webp",
        image_inside: "/img/articles/articles_inside/article_inside26.webp",
        content: "<p>Er Baretto, situé dans le quartier du Vieux Lyon, est un charmant restaurant italien où les pâtes fraîches sont à l’honneur. Avec son ambiance chaleureuse et intimiste, ce restaurant propose des plats typiques et généreux, élaborés à partir de produits italiens de qualité. Idéal pour un dîner romantique ou entre amis, Er Baretto est un petit coin d’Italie en plein cœur de Lyon, à ne pas manquer pour les amateurs de cuisine italienne.</p>",
        address: "43 Rue Franklin, 69002 Lyon",
        price: "Plats à partir de 20 €",
        schedule: "Ouvert du mardi au samedi, de 12h à 14h et de 19h à 22h30",
        view: 0,
        like: 0,
        tag_id: 7,
        user_id: 1
    });
    Article.create({
        title: "Le Fantôme de l’Opéra",
        description: "Le Fantôme de l’Opéra est un bar caché au charme mystérieux, proposant des cocktails créatifs dans une ambiance feutrée et élégante.",
        image: "/img/articles/article27.webp",
        image_inside: "/img/articles/articles_inside/article_inside27.webp",
        content: "<p>Niché dans le quartier des Terreaux, Le Fantôme de l’Opéra est un bar à cocktails à l’atmosphère intrigante et sophistiquée. Inspiré par l'univers du théâtre et de l'opéra, ce speakeasy propose des cocktails créatifs, réalisés à partir d'ingrédients de qualité et souvent accompagnés d'une touche théâtrale. Ce lieu intimiste et hors du temps est idéal pour une soirée entre amis ou un rendez-vous romantique, dans un cadre élégant où règne un véritable mystère.</p>",
        address: "19 Rue Royale, 69001 Lyon",
        price: "Cocktails à partir de 12 €",
        schedule: "Ouvert du mercredi au dimanche, de 18h à 1h",
        view: 0,
        like: 0,
        tag_id: 8,
        user_id: 1
    });
    Article.create({
        title: "L’Officine",
        description: "L'Officine, situé au cœur du Grand Hôtel-Dieu, est un bar élégant qui propose des cocktails sophistiqués dans un cadre historique exceptionnel.",
        image: "/img/articles/article28.webp",
        image_inside: "/img/articles/articles_inside/article_inside28.webp",
        content: "Installé au sein du majestueux Grand Hôtel-Dieu, L'Officine est un bar à cocktails d'exception qui allie l'histoire des lieux à une carte de boissons des plus contemporaines. Connu pour ses créations audacieuses et raffinées, ce bar est le parfait mélange entre élégance, modernité et patrimoine lyonnais. Avec son ambiance feutrée et son décor soigné, L'Officine est l'endroit idéal pour siroter des cocktails ou profiter d'un verre de vin dans un cadre prestigieux.",
        address: "4 Place de l’Hôpital, 69002 Lyon",
        price: "Cocktails à partir de 14 €",
        schedule: "Ouvert tous les jours, de 17h à 1h",
        view: 0,
        like: 0,
        tag_id: 8,
        user_id: 1
    });
    Article.create({
        title: "Le Grisbi",
        description: "Le Grisbi est un bar à cocktails inspiré des films de gangsters des années 50, offrant des créations uniques dans une ambiance rétro et chic.",
        image: "/img/articles/article29.webp",
        image_inside: "/img/articles/articles_inside/article_inside29.webp",
        content: "<p>Situé dans le 6ème arrondissement de Lyon, Le Grisbi plonge ses clients dans une ambiance rétro, rappelant les films de gangsters des années 50. Ce bar à cocktails propose une large sélection de créations maison, élaborées avec soin par des mixologues passionnés. Le cadre, inspiré des films noirs, donne au lieu un charme singulier et intemporel, parfait pour une soirée entre amis ou un afterwork décontracté.</p>",
        address: "8 Rue du Commandant Fuzier, 69006 Lyon",
        price: "Cocktails à partir de 10 €",
        schedule: "Ouvert du mardi au samedi, de 18h à 2h",
        view: 0,
        like: 0,
        tag_id: 8,
        user_id: 1
    }),
        Article.create({
            title: "Le Dôme",
            description: "Le Dôme est un bar raffiné niché au sein de l’Intercontinental Lyon - Hôtel-Dieu, célèbre pour son cadre majestueux sous une coupole de verre et ses cocktails d’exception.",
            image: "/img/articles/article30.webp",
            image_inside: "/img/articles/articles_inside/article_inside30.webp",

            content: "<p>Au cœur de l’Intercontinental Lyon - Hôtel-Dieu se trouve Le Dôme, un bar à l'architecture impressionnante sous une coupole de verre de 32 mètres de haut. Ce lieu élégant et majestueux propose une carte de cocktails raffinés et de grands crus, servis dans un cadre à couper le souffle. Que ce soit pour un apéritif, un digestif ou un moment de détente l’après-midi, Le Dôme est l’un des bars les plus spectaculaires de Lyon, alliant histoire et modernité.</p>",
            address: "20 Quai Jules Courmont, 69002 Lyon",
            price: "Cocktails à partir de 18 €",
            schedule: "Ouvert tous les jours, de 11h à minuit",
            view: 0,
            like: 0,
            tag_id: 8,
            user_id: 1
        }),
        Article.create({
            title: "L’Orangerie",
            description: "L’Orangerie, situé dans le quartier de Confluence, est un bar à cocktails proposant des créations raffinées dans une ambiance végétale et lumineuse.",

            image: "/img/articles/article31.webp",
            image_inside: "/img/articles/articles_inside/article_inside31.webp",
            content: "<p>L’Orangerie, véritable havre de paix dans le quartier moderne de Confluence, propose des cocktails créatifs dans un cadre lumineux et verdoyant. Avec ses grandes verrières et son décor végétal, ce bar offre une atmosphère détendue et élégante, parfaite pour déguster des boissons raffinées après une journée de travail ou pour se retrouver entre amis. L’Orangerie allie innovation et tradition, avec des cocktails classiques revisités par des mixologues talentueux.</p>",
            address: "112 Cours Charlemagne, 69002 Lyon",
            price: "Cocktails à partir de 12 €",
            schedule: "Ouvert du lundi au samedi, de 17h à 1h",
            view: 0,
            like: 0,
            tag_id: 8,
            user_id: 1
        }),
        Article.create({
            title: "Le Sucre",
            description: "Le Sucre est un club emblématique installé sur un rooftop, proposant une programmation éclectique de musique électronique et des soirées avec vue sur Lyon.",
            image: "/img/articles/article32.webp",
            image_inside: "/img/articles/articles_inside/article_inside32.webp",
            content: "<p>Situé au sommet de La Sucrière, dans le quartier de la Confluence, Le Sucre est l’un des clubs les plus iconiques de Lyon. Avec son rooftop offrant une vue imprenable sur la ville, il est devenu un lieu incontournable pour les amateurs de musique électronique. Le Sucre propose une programmation variée, allant de la house à la techno en passant par des événements artistiques et culturels. Avec une ambiance à la fois branchée et conviviale, c'est l’endroit idéal pour danser toute la nuit sous les étoiles.</p>",
            address: "50 Quai Rambaud, 69002 Lyon",
            price: "Entrée à partir de 15 €",
            schedule: "Ouvert le week-end, de 23h à 5h",
            view: 0,
            like: 0,
            tag_id: 8,
            user_id: 1
        }),
        Article.create({
            title: "Le Petit Salon",
            description: "Le Petit Salon est un club lyonnais branché, réputé pour sa programmation pointue en matière de musiques électroniques et son ambiance underground.",
            image: "/img/articles/article33.webp",
            image_inside: "/img/articles/articles_inside/article_inside33.webp",
            content: "<p>Le Petit Salon, situé dans le 7ème arrondissement de Lyon, s’impose comme une référence en matière de musique électronique. Ce club underground accueille des artistes de renom ainsi que des talents émergents de la scène électro. Avec ses deux salles et ses systèmes sonores puissants, Le Petit Salon est le lieu de prédilection des noctambules lyonnais qui recherchent des soirées de qualité dans une ambiance intimiste et énergique.</p>",
            address: "3 Rue de Cronstadt, 69007 Lyon",
            price: "Entrée à partir de 10 €",
            schedule: "Ouvert du jeudi au samedi, de 23h à 6h",
            view: 0,
            like: 0,
            tag_id: 8,
            user_id: 1
        }),
        Article.create({
            title: "Le Sonic",
            description: "Le Sonic, club iconique de Lyon, est un bateau qui accueille des concerts et des soirées électro dans un cadre intimiste sur la Saône.",
            image: "/img/articles/article34.webp",
            image_inside: "/img/articles/articles_inside/article_inside34.webp",
            content: "<p>Amarré sur les quais de la Saône, Le Sonic est un club original et atypique installé sur une péniche. Connu pour sa programmation éclectique, allant des concerts indie-rock aux soirées électroniques, Le Sonic est l'un des lieux alternatifs les plus prisés des noctambules lyonnais. Avec son ambiance intimiste et son cadre unique, ce club propose une expérience différente, où les amateurs de musique live et d’électro peuvent se retrouver pour des soirées conviviales et alternatives.</p>",
            address: "4 Quai des Étroits, 69005 Lyon",
            price: "Entrée à partir de 8 €",
            schedule: "Ouvert du mercredi au samedi, de 21h à 5h",
            view: 0,
            like: 0,
            tag_id: 8,
            user_id: 1
        }),
        Article.create({
            title: "Hôtel de Verdun 1882, Repaire de Globe-Chineurs",
            description: "L’Hôtel de Verdun 1882 est un établissement unique et chaleureux, mêlant décoration vintage et ambiance conviviale, idéal pour les voyageurs à la recherche de charme et d’authenticité.",
            image: "/img/articles/article35.webp",
            image_inside: "/img/articles/articles_inside/article_inside35.webp",
            content: "<p>Situé au cœur de Lyon, l’Hôtel de Verdun 1882 est bien plus qu’un simple lieu d’hébergement : c'est un véritable repaire pour les voyageurs en quête d'originalité et d'authenticité. La décoration chinée avec soin et l’atmosphère vintage de cet hôtel en font une adresse incontournable pour les amateurs de charme et de singularité. Avec ses chambres à l’ambiance cosy et son accueil chaleureux, l’Hôtel de Verdun 1882 offre une expérience unique aux visiteurs souhaitant découvrir Lyon dans une atmosphère conviviale et détendue.</p>",
            address: "82 Rue de la Charité, 69002 Lyon",
            price: "À partir de 120 € par nuit",
            schedule: "Réception ouverte 24h/24",
            view: 0,
            like: 0,
            tag_id: 9,
            user_id: 1
        }),
        Article.create({
            title: "Intercontinental Lyon – Hôtel-Dieu",
            description: "L'Intercontinental Lyon est un hôtel de luxe au sein de l’emblématique Grand Hôtel-Dieu, offrant une expérience raffinée dans un cadre historique et majestueux.",
            image: "/img/articles/article36.webp",
            image_inside: "/img/articles/articles_inside/article_inside36.webp",
            content: "<p>Installé dans l’un des plus beaux monuments historiques de Lyon, l’Intercontinental Lyon - Hôtel-Dieu est un hôtel 5 étoiles alliant élégance contemporaine et patrimoine. Son architecture spectaculaire, avec sa coupole emblématique et ses vastes espaces, en fait un lieu d’exception. L’établissement propose des chambres luxueuses avec vue sur le Rhône ou les jardins intérieurs, ainsi qu’un bar somptueux sous une coupole magistrale. Idéal pour un séjour d’exception ou un moment de détente dans un cadre prestigieux.</p>",
            address: "20 Quai Jules Courmont, 69002 Lyon",
            price: "À partir de 350 € par nuit",
            schedule: "Réception ouverte 24h/24",
            view: 0,
            like: 0,
            tag_id: 9,
            user_id: 1,
        }),
        Article.create({
            title: "The Ruck Hotel",
            description: "The Ruck est un hôtel moderne et sportif, parfait pour les amateurs de rugby et les voyageurs à la recherche d’un séjour dynamique près du Stade de Gerland.",
            image: "/img/articles/article37.webp",
            image_inside: "/img/articles/articles_inside/article_inside37.webp",
            content: "<p>Situé à proximité du Stade de Gerland, The Ruck est un hôtel moderne qui célèbre l’esprit du rugby et offre une ambiance dynamique et sportive. Parfait pour les passionnés de sport ou les voyageurs souhaitant séjourner dans un cadre décontracté, l’hôtel propose des chambres confortables et bien équipées. Son restaurant-bar est également un lieu convivial où se retrouver avant ou après un match. Un établissement idéal pour un séjour à la fois sportif et confortable à Lyon.</p>",
            address: "345 Avenue Jean Jaurès, 69007 Lyon",
            price: "À partir de 100 € par nuit",
            schedule: "Réception ouverte 24h/24",
            view: 0,
            like: 0,
            tag_id: 9,
            user_id: 1
        }),
        Article.create({
            title: "Moxy Lyon",
            description: "Moxy Lyon est un hôtel moderne et branché, idéal pour les voyageurs jeunes et dynamiques qui recherchent un cadre à la fois design et convivial.",
            image: "/img/articles/article38.webp",
            image_inside: "/img/articles/articles_inside/article_inside38.webp",
            content: "<p>L’hôtel Moxy Lyon, situé dans le quartier de la Confluence, est un établissement jeune et branché, qui attire une clientèle à la recherche de design et d’ambiance décontractée. Avec ses chambres modernes et épurées, son lobby animé, et son bar convivial où les clients peuvent se retrouver, le Moxy Lyon offre une expérience unique. Parfait pour les voyageurs d’affaires ou les jeunes explorateurs, cet hôtel allie fonctionnalité et convivialité dans un cadre stylé.</p>",
            address: "81 Quai Perrache, 69002 Lyon",
            price: " À partir de 130 € par nuit",
            schedule: "Réception ouverte 24h/24",
            view: 0,
            like: 0,
            tag_id: 9,
            user_id: 1
        }),
        Article.create({
            title: "Pilo Lyon",
            description: "Pilo Lyon est une auberge hybride mêlant chambres privées et dortoirs partagés dans un cadre moderne et design, située dans le quartier animé de la Croix-Rousse.",
            image: "/img/articles/article39.webp",
            image_inside: "/img/articles/articles_inside/article_inside39.webp",
            content: "<p>Pilo Lyon, niché dans le quartier animé de la Croix-Rousse, est un concept d’hébergement hybride qui combine l’esprit des auberges de jeunesse avec le confort moderne. Offrant des chambres privées et des dortoirs design, Pilo est l’endroit idéal pour les voyageurs solo, les groupes d’amis ou les familles en quête d’un hébergement convivial et abordable. Avec ses espaces communs chaleureux et son rooftop avec vue sur la ville, Pilo invite à la détente et aux rencontres dans un cadre trendy et accessible.</p>",
            address: "10 Montée des Carmélites, 69001 Lyon",
            price: "À partir de 50 € par nuit en dortoir, 120 € en chambre privée",
            schedule: "Réception ouverte 24h/24",
            view: 0,
            like: 0,
            tag_id: 9,
            user_id: 1
        }),
        Article.create({
            title: "Villa Maïa",
            description: "Villa Maïa est un hôtel 5 étoiles niché sur la colline de Fourvière, offrant luxe et tranquillité avec des vues panoramiques sur Lyon.",
            image: "/img/articles/article40.webp",
            image_inside: "/img/articles/articles_inside/article_inside40.webp",
            content: "<p>Perchée sur la colline de Fourvière, Villa Maïa est un hôtel 5 étoiles qui combine luxe, sérénité et vues imprenables sur Lyon. Cet établissement raffiné propose des chambres élégantes et des suites spacieuses, toutes décorées avec goût et dotées de grandes baies vitrées. Avec son spa luxueux et sa piscine intérieure à débordement, Villa Maïa est un véritable havre de paix pour ceux qui cherchent à se détendre dans un cadre exceptionnel. Son emplacement privilégié permet aussi de découvrir facilement les trésors de Lyon.</p>",
            address: "8 Rue Pierre Marion, 69005 Lyon",
            price: "À partir de 400 € par nuit",
            schedule: "Réception ouverte 24h/24",
            view: 0,
            like: 0,
            tag_id: 9,
            user_id: 1
        }),
        Article.create({
            title: "Les Cent Ciels",
            description: "Les Cent Ciels est un hammam et spa luxueux inspiré des traditions orientales, offrant un espace de détente et de bien-être dans un cadre somptueux.",
            image: "/img/articles/article41.webp",
            image_inside: "/img/articles/articles_inside/article_inside41.webp",
            content: "<p>Situé dans le 9e arrondissement de Lyon, Les Cent Ciels est un havre de paix qui transporte ses visiteurs dans un univers de bien-être inspiré des hammams orientaux. Avec ses vastes bains de vapeur, son décor raffiné aux touches d'Orient, et ses soins traditionnels, ce spa offre une expérience unique et dépaysante. Que ce soit pour profiter d’un massage relaxant, d’un gommage ou d’un moment dans les bains chauds, Les Cent Ciels promet une parenthèse enchantée au cœur de la ville.</p>",
            address: "7 Rue des Aqueducs, 69009 Lyon",
            price: "Entrée à partir de 45 €, soins à partir de 30 €",
            schedule: "Ouvert tous les jours de 10h à 22h",
            view: 0,
            like: 0,
            tag_id: 10,
            user_id: 1
        }),
        Article.create({
            title: "Calicéo",
            description: "Calicéo est un centre de bien-être et balnéothérapie, proposant des bassins chauffés, des jacuzzis, et des espaces de relaxation pour une détente totale.",
            image: "/img/articles/article42.webp",
            image_inside: "/img/articles/articles_inside/article_inside42.webp",
            content: "<p>À quelques minutes du centre de Lyon, Calicéo est l’un des plus grands centres de balnéothérapie de la région. Cet espace dédié au bien-être dispose de plusieurs bassins intérieurs et extérieurs, tous chauffés à 33°C, offrant une expérience relaxante en toute saison. Entre jacuzzis, hammams, saunas et jets massants, Calicéo propose un parcours de détente complet pour le corps et l’esprit. C’est le lieu parfait pour se ressourcer après une journée bien remplie ou simplement s’offrir un moment de relaxation.</p>",
            address: "Avenue du Docteur Schweitzer, 69150 Décines-Charpieu (à 20 minutes de Lyon)",
            price: "Entrée à partir de 19 € pour 2 heures",
            schedule: " Ouvert tous les jours de 10h à 21h",
            view: 0,
            like: 0,
            tag_id: 10,
            user_id: 1
        }),
        Article.create({
            title: "Les Bains de l’Opéra",
            description: "Les Bains de l'Opéra est un spa urbain alliant modernité et tradition, proposant hammam, sauna, et soins variés au cœur de Lyon.",
            image: "/img/articles/article43.webp",
            image_inside: "/img/articles/articles_inside/article_inside43.webp",
            content: "<p>Situé au cœur de la Presqu’île, Les Bains de l’Opéra est un spa urbain où se mêlent modernité et rituels de bien-être ancestraux. Ce centre de soins propose un hammam traditionnel, un sauna, et une large gamme de massages et gommages. Que ce soit pour une pause détente rapide ou une demi-journée de soins complets, Les Bains de l’Opéra offre une oasis de calme en plein centre-ville. C’est le lieu idéal pour s'évader du tumulte quotidien tout en restant en plein cœur de Lyon.</p>",
            address: "20 Rue Joseph Serlin, 69001 Lyon",
            price: "Entrée à partir de 30 €, soins à partir de 40 €",
            schedule: " Ouvert du mardi au dimanche, de 10h à 20h",
            view: 0,
            like: 0,
            tag_id: 10,
            user_id: 1
        }),
        Escapade.bulkCreate([{
            title: "Randonnée au Bois de Serres, Écully",
            description: "Cette randonnée accessible dans le Bois de Serres à Écully offre un cadre naturel exceptionnel, parfait pour une sortie en pleine nature à proximité immédiate de Lyon. Un parcours à travers forêts, ruisseaux et paysages préservés.",
            image: "/img/escapades/escapade1.webp",
            image_inside: "/img/escapades/escapades_inside/escapade_inside1.webp",
            content: `<h3>Départ et immersion immédiate dans la nature</h3>
          <p>Le Bois de Serres, situé à quelques kilomètres à l'ouest de Lyon, est l'un des trésors naturels d'Écully. Cette randonnée commence au parc de l'Abbaye, un lieu emblématique d'Écully où la nature se mêle à l'histoire locale. Dès les premiers pas, le randonneur est plongé dans un cadre boisé dense, caractérisé par la diversité des essences d'arbres. Le départ, facile et accessible, se fait depuis un chemin bien balisé, rendant cette randonnée adaptée à tous les niveaux, y compris les familles avec enfants. La fraîcheur de l’air et l’épaisseur des feuillages apportent une sérénité immédiate, un contraste saisissant avec l’agitation urbaine de la métropole lyonnaise. Le Bois de Serres étant relativement peu fréquenté, les amateurs de calme y trouveront leur compte, que ce soit pour une balade relaxante ou une immersion totale dans la nature.</p>
          
          <h3>Un parcours au cœur d’un écosystème préservé</h3>
          <p>Ce qui rend le Bois de Serres si particulier, c’est son écosystème riche et varié. Tout au long du sentier, le randonneur traverse différents paysages : des forêts de feuillus, des clairières et des zones humides. En traversant ces différents milieux, on a l’occasion de découvrir une faune et une flore d’une grande diversité. Les ornithologues amateurs pourront observer de nombreuses espèces d’oiseaux, tandis que les passionnés de botanique apprécieront la variété des plantes présentes tout au long du chemin. Les arbres sont majestueux, certains ayant plusieurs dizaines d’années, et les sous-bois regorgent de fougères et d'autres végétaux typiques des milieux humides. À certaines périodes de l’année, notamment au printemps et en automne, le Bois de Serres se pare de magnifiques couleurs, avec des tapis de feuilles jaunes et orangées. Les ruisseaux qui traversent la forêt, comme celui du Serres, apportent une note de fraîcheur supplémentaire et sont particulièrement agréables à longer, apportant un son apaisant tout au long de la marche.</p>
          
          <h3>Un chemin accessible pour tous, avec des découvertes inattendues</h3>
          <p>Le sentier de randonnée est relativement plat et bien entretenu, ce qui en fait une promenade idéale pour tous, que l’on soit débutant ou randonneur confirmé. Le parcours, qui forme une boucle d'environ 6 kilomètres, est jalonné de bancs en bois permettant de se reposer et d'admirer le paysage. Plusieurs points de vue permettent de profiter d'une vue dégagée sur les environs d'Écully et, par beau temps, sur les monts du Lyonnais à l’horizon. Ce parcours offre également quelques découvertes inattendues, notamment des vestiges de l’ancienne abbaye qui autrefois occupait les lieux, ajoutant ainsi une touche culturelle à cette randonnée nature. De plus, certaines parties du sentier longent des prairies où pâturent souvent des chevaux, ce qui ravira les plus jeunes marcheurs. Au fil du parcours, il n’est pas rare de croiser des familles venues pour un pique-nique en pleine nature ou des groupes de randonneurs plus expérimentés appréciant la quiétude des lieux.</p>
          
          <h3>Le retour vers Écully et des activités annexes</h3>
          <p>Le retour vers le point de départ se fait en douceur, toujours dans le cadre enchanteur du Bois de Serres. La dernière partie de la randonnée offre de nouvelles perspectives, avec des sentiers plus dégagés et des zones en bordure de forêt, laissant apercevoir le village d’Écully au loin. Après avoir terminé la boucle, les randonneurs peuvent profiter des infrastructures du parc de l'Abbaye, avec des aires de jeux pour enfants et des espaces dédiés au repos. Le village d’Écully, situé à quelques minutes à pied, offre plusieurs options pour prolonger la journée : les amateurs de culture pourront visiter la chapelle de l’ancienne abbaye ou flâner dans les rues du centre historique d’Écully. Pour ceux qui souhaitent se restaurer, le village propose également de nombreuses terrasses et cafés où il est agréable de s’attarder pour boire un verre ou déguster une pâtisserie après une matinée de marche. En été, il n’est pas rare de voir des événements culturels se tenir dans les parcs environnants, ajoutant ainsi une dimension supplémentaire à cette belle escapade en plein air.</p>`,
            duration: 2,
            difficulty: "Facile",
            distance: "8 km de Lyon",
            location: "Parc de l’Abbaye, Rue du Bois de Serres, 69130 Écully"
        }, {
            title: "Randonnée à la Madone de Fontaines-Saint-Martin",
            description: "Cette randonnée pittoresque vous conduit au sommet de la Madone de Fontaines-Saint-Martin, offrant une vue panoramique exceptionnelle sur les environs de Lyon et un cheminement à travers des paysages naturels variés.",
            image: "/img/escapades/escapade2.webp",
            image_inside: "/img/escapades/escapades_inside/escapade_inside2.webp",
            content: `<h3>Départ depuis le cœur du village de Fontaines-Saint-Martin</h3>
          <p>Située à une dizaine de kilomètres au nord de Lyon, la commune de Fontaines-Saint-Martin est le point de départ idéal pour une randonnée qui allie nature, patrimoine et paysages remarquables. Le départ de la balade se fait depuis le centre du village, facilement accessible et doté de quelques parkings pour les randonneurs. En quittant les ruelles charmantes du village, vous emprunterez un sentier qui serpente entre les maisons avant de rapidement plonger dans la nature environnante. Dès les premiers mètres, l’atmosphère se fait plus calme et apaisante, les bruits de la ville laissant place au chant des oiseaux et au bruissement des feuilles. Le début de la randonnée est plutôt tranquille, idéal pour se chauffer avant d’aborder les premières montées qui conduisent vers les hauteurs de la Madone.</p>
          
          <h3>Une montée progressive et des paysages variés</h3>
          <p>Le chemin commence à s'élever doucement à mesure que vous vous éloignez du village. Très vite, les habitations laissent place à des zones plus naturelles, mêlant champs et forêts. Le sentier, bien balisé, traverse d’abord des prairies avant de pénétrer dans une belle forêt de feuillus. Selon la saison, cette montée peut offrir des panoramas changeants : au printemps, les sous-bois se couvrent de fleurs sauvages tandis que l’automne pare les arbres de magnifiques teintes dorées. Le sentier en lacets permet de gravir progressivement les pentes sans trop de difficultés, ce qui rend cette randonnée accessible même pour les marcheurs débutants ou les familles. Tout au long de la montée, des bancs et des espaces de repos permettent de s’arrêter pour reprendre son souffle et profiter du calme ambiant. En chemin, il n’est pas rare d’apercevoir des chevreuils ou des écureuils qui peuplent cette zone encore sauvage, pour le plus grand plaisir des amoureux de la nature.</p>
          
          <h3>Un panorama exceptionnel depuis la Madone</h3>
          <p>Arrivé au sommet, la Madone de Fontaines-Saint-Martin vous récompense avec une vue imprenable sur les environs. Cette statue, qui veille sur le village depuis son piédestal, est un lieu de pèlerinage depuis des siècles, et sa position en hauteur en fait un point de vue privilégié. Depuis ce promontoire naturel, vous aurez une vue dégagée sur toute la vallée de la Saône, les Monts d'Or et, par temps clair, vous pourrez même apercevoir les sommets du Massif Central à l’horizon. Le panorama vaut vraiment le détour et invite à la contemplation. C’est aussi l’endroit parfait pour une pause déjeuner ou un pique-nique en pleine nature, avec des tables aménagées à cet effet. La sérénité du lieu, combinée à la beauté du paysage, en fait un endroit prisé pour se ressourcer loin de l’agitation quotidienne.</p>
          
          <h3>Retour par les chemins des crêtes et exploration du village</h3>
          <p>Le chemin de retour vous fait emprunter une agréable descente qui suit les crêtes et permet de profiter encore un peu des superbes vues sur les environs. Ce sentier, plus dégagé, offre une perspective différente de la montée, avec des points de vue qui se dévoilent progressivement entre les arbres. La descente est douce et accessible, même pour les plus jeunes marcheurs. De retour dans le village, il est intéressant de prendre le temps de découvrir Fontaines-Saint-Martin, un charmant village qui a su conserver un esprit authentique avec ses vieilles pierres et ses petites places ombragées. Vous pourrez y découvrir l’église Saint-Martin, un bâtiment historique, ou simplement flâner dans les ruelles typiques de ce village du nord de Lyon. Après l’effort, rien de tel qu’un rafraîchissement en terrasse pour clôturer cette belle randonnée.</p>`,
            duration: 2,
            difficulty: "Moyen",
            distance: "10 km de Lyon",
            location: "Place de la Mairie, Fontaines-Saint-Martin, 69270"
        }, {
            title: "Le Sentier des Vignes, Ampuis",
            description: "Une randonnée au cœur du vignoble d’Ampuis, traversant des collines couvertes de vignes, avec une vue imprenable sur le Rhône et les célèbres coteaux de l’appellation Côte-Rôtie.",
            image: "/img/escapades/escapade3.webp",
            image_inside: "/img/escapades/escapades_inside/escapade_inside3.webp",
            content: `<h3>Départ au cœur des vignes d’Ampuis</h3>
          <p>Le Sentier des Vignes commence dans la commune d’Ampuis, un village viticole réputé, situé à environ 40 kilomètres au sud de Lyon. Point de départ de cette randonnée, la place de l’Église d’Ampuis est le lieu idéal pour commencer l’exploration des célèbres vignobles de la région. Après avoir stationné dans les rues du village, vous prenez rapidement de l'altitude en suivant un chemin qui serpente à travers les vignes. Dès les premiers pas, le cadre est enchanteur, avec les rangées de vignes parfaitement alignées sur les coteaux, typiques de l’appellation Côte-Rôtie. Les amateurs de vin seront ravis de pouvoir découvrir les vignes de cépages Syrah et Viognier, emblématiques de cette région, en plein cœur des terres qui produisent certains des meilleurs vins de la vallée du Rhône.</p>
          
          <h3>Une ascension entre vignes et panoramas</h3>
          <p>La première partie de la randonnée consiste en une montée progressive à travers les terrasses escarpées du vignoble. Le sentier est relativement bien marqué, et malgré la pente, il reste accessible à la plupart des marcheurs, même débutants. À mesure que vous vous élevez, les vignes laissent progressivement place à des points de vue spectaculaires sur la vallée du Rhône et les villages alentours. La vue est à couper le souffle, avec le fleuve majestueux qui serpente au pied des collines et les vignobles en terrasses qui s’étendent à perte de vue. Les points de repos disséminés tout au long du parcours permettent d’admirer ces panoramas exceptionnels et de reprendre son souffle avant de poursuivre l’ascension. En été, les raisins en pleine maturation donnent un spectacle coloré, tandis que l'automne, avec ses feuilles rougies et dorées, offre un décor tout aussi saisissant.</p>
          
          <h3>Découverte des coteaux de Côte-Rôtie</h3>
          <p>Le point fort de cette randonnée est la traversée des coteaux de Côte-Rôtie, célèbres dans le monde entier pour leurs vins. Ces vignobles en terrasses sont parmi les plus anciens de France, plantés à flanc de colline sur des pentes parfois très raides. En marchant au milieu de ces parcelles, vous êtes directement en contact avec un savoir-faire viticole millénaire. Les chemins qui serpentent à travers les vignes permettent de découvrir de près le travail des vignerons, avec leurs murets de pierres sèches et leurs petites cabanes de vigne en pierre, appelées « cabottes ». Certaines portions du sentier sont également bordées de petits panneaux explicatifs, permettant aux randonneurs de mieux comprendre les particularités du terroir, des cépages et des techniques de culture utilisées pour produire ces vins d'exception. À mi-parcours, vous pourrez apercevoir les majestueux côteaux de Condrieu de l’autre côté du Rhône, qui produisent le fameux vin blanc du même nom.</p>
          
          <h3>Retour vers Ampuis et dégustation</h3>
          <p>La descente se fait de manière douce, à travers les vignes qui redescendent vers Ampuis. Ce dernier tronçon permet de profiter encore des paysages bucoliques des vignobles en terrasses, avec la lumière de la fin de journée offrant des jeux d'ombre et de lumière sur les coteaux. De retour dans le village, une pause s'impose dans l'une des nombreuses caves de la région. Plusieurs domaines proposent en effet des dégustations de Côte-Rôtie, l'occasion parfaite pour découvrir les saveurs subtiles et complexes des vins locaux après une belle randonnée. La plupart des caves du village accueillent les randonneurs avec des visites guidées, permettant de mieux comprendre le travail de la vigne et les processus de vinification. Ampuis étant au cœur de l’appellation, vous êtes assuré de goûter à des cuvées renommées, directement produites sur les parcelles que vous venez de traverser. Un moment de détente bien mérité avant de repartir vers Lyon ou de continuer la découverte des vignobles environnants.</p>`,
            duration: 3,
            difficulty: "Moyen",
            distance: "40 km de Lyon",
            location: "Place de l’Église, Ampuis, 69420"
        }, {
            title: "Le Col du Planil, Chavanol dans le Pilat",
            description: "Une randonnée nature dans le massif du Pilat, offrant une ascension progressive vers le Col du Planil, avec des panoramas spectaculaires sur les monts environnants.",
            image: "/img/escapades/escapade4.webp",
            image_inside: "/img/escapades/escapades_inside/escapade_inside4.webp",
            content: `<h3>Départ depuis Chavanol, au cœur du Pilat</h3>
          <p>Cette randonnée débute à Chavanol, un petit hameau situé dans le Parc naturel régional du Pilat, à environ 45 kilomètres de Lyon. Ce village constitue un point de départ idéal pour les amoureux de la nature qui souhaitent s'éloigner de la ville et découvrir les paysages préservés du massif. Le chemin qui mène au Col du Planil traverse d’abord une campagne verdoyante, parsemée de prairies et de petits bois. Le début de la randonnée est relativement doux, parfait pour s’échauffer en admirant les collines du Pilat qui se dessinent au loin. La flore du Pilat est particulièrement riche et variée, alternant entre châtaigniers, sapins et hêtres selon l’altitude, offrant ainsi un cadre idyllique tout au long de l’ascension.</p>
          
          <h3>Une ascension progressive à travers forêts et pâturages</h3>
          <p>À mesure que vous progressez vers le Col du Planil, la pente s’accentue légèrement, mais reste tout à fait accessible pour les randonneurs de niveau intermédiaire. Le sentier, bien balisé, serpente à travers des forêts de conifères, où la fraîcheur et l’ombre offrent un répit lors des journées ensoleillées. La nature est omniprésente, avec des écureuils qui se faufilent entre les arbres et une multitude d’oiseaux que l’on peut entendre tout au long du parcours. À mi-parcours, le chemin débouche sur des pâturages ouverts où paissent souvent des troupeaux de vaches, typiques de cette région montagnarde. Ce tronçon offre également des vues dégagées sur les monts du Pilat, ainsi que sur la vallée du Rhône lorsque le ciel est dégagé, créant un panorama apaisant, propice à la détente et à la contemplation.</p>
          
          <h3>Arrivée au Col du Planil et ses panoramas</h3>
          <p>Une fois arrivé au Col du Planil, à environ 1200 mètres d’altitude, vous serez récompensé par une vue imprenable sur les montagnes environnantes. Le col marque une intersection de plusieurs sentiers, offrant ainsi de nombreuses possibilités de prolonger la randonnée pour les plus aventureux. Pour ceux qui souhaitent s'arrêter ici, un petit pique-nique s'impose pour profiter de la quiétude du lieu et des paysages majestueux. La descente vers Chavanol peut s’effectuer par le même chemin ou via un itinéraire alternatif qui serpente le long de la crête, permettant d’admirer de nouveaux points de vue. Tout au long de cette randonnée, la tranquillité des lieux et la beauté sauvage des paysages offrent une parenthèse bienvenue, loin de l’agitation urbaine.</p>`,
            duration: 4,
            difficulty: "Moyen",
            distance: "45 km de Lyon",
            location: "Chavanol, 42410 Pélussin"
        }, {
            title: "Boucle dans les Monts d’Or depuis Saint-Germain (via le Mont Py)",
            description: "Un circuit pittoresque dans les Monts d’Or, offrant une belle ascension vers le Mont Py et des vues dégagées sur la région lyonnaise.",
            image: "/img/escapades/escapade5.webp",
            image_inside: "/img/escapades/escapades_inside/escapade_inside5.webp",
            content: `<h3>Départ depuis le village de Saint-Germain-au-Mont-d’Or</h3>
          <p>La boucle commence dans le charmant village de Saint-Germain-au-Mont-d'Or, à environ 20 kilomètres de Lyon. C’est un excellent point de départ pour les randonneurs qui souhaitent découvrir les reliefs et paysages variés des Monts d'Or. Après avoir garé votre voiture à proximité de la mairie ou de l'église, vous empruntez un sentier qui s’enfonce dans la verdure. Dès les premiers mètres, vous êtes plongé dans une ambiance champêtre, où se mêlent champs, forêts et petits ruisseaux. Le chemin, en montée progressive, vous amène rapidement sur les hauteurs du village, où la vue commence à se dégager, laissant apparaître les premiers panoramas sur la vallée de la Saône et la région lyonnaise. C’est une entrée en matière tout en douceur, idéale pour se mettre en jambes avant l'ascension du Mont Py.</p>
          
          <h3>L’ascension du Mont Py</h3>
          <p>Le Mont Py, point culminant de cette boucle, est la principale attraction de la randonnée. Après une marche agréable à travers bois et prairies, vous atteignez les premières pentes du mont. Bien que l’ascension soit un peu plus soutenue, elle reste accessible à tous les marcheurs, même les moins expérimentés. Le sentier serpente à travers une forêt de chênes et de hêtres, offrant ombre et fraîcheur, particulièrement appréciable en été. À mesure que vous gagnez en altitude, la végétation se fait plus clairsemée, offrant de superbes vues sur les Monts du Lyonnais à l’horizon et, par temps clair, sur la chaîne des Alpes. Arrivé au sommet, à environ 620 mètres d’altitude, vous profiterez d’un panorama à 360 degrés sur toute la région. C’est le moment parfait pour faire une pause, reprendre des forces, et admirer les paysages vallonnés des Monts d'Or et des plaines environnantes. De petits bancs en pierre invitent à la détente avant de repartir sur le sentier.</p>
          
          <h3>Retour en boucle par les chemins forestiers</h3>
          <p>La descente du Mont Py se fait par un autre chemin, formant ainsi une boucle qui vous ramène tranquillement vers Saint-Germain. Le sentier traverse des forêts denses et descend en pente douce, idéal pour une marche apaisante après l’effort de l’ascension. Sur le retour, vous passerez par plusieurs petits hameaux typiques des Monts d’Or, avec leurs maisons en pierres dorées, caractéristiques de la région. Le parcours offre également des points de vue ponctuels sur la Saône et la plaine de l’Ain au loin. Ce tronçon est plus tranquille, avec moins de dénivelé, parfait pour profiter de la nature et de la quiétude des lieux. Après environ 3 heures de marche, vous arrivez de nouveau à Saint-Germain-au-Mont-d'Or, où vous pourrez profiter des petits cafés ou restaurants pour une pause bien méritée. </p>`,
            duration: 3,
            difficulty: "Moyen",
            distance: "20 km de Lyon",
            location: "Saint-Germain-au-Mont-d’Or, 69650"
        }, {
            title: "Circuit en boucle depuis le Col du Châtoux dans le Haut Beaujolais",
            description: "Une randonnée offrant une immersion totale dans les paysages vallonnés du Haut Beaujolais, avec des forêts, des pâturages et des panoramas exceptionnels.",
            image: "/img/escapades/escapade6.webp",
            image_inside: "/img/escapades/escapades_inside/escapade_inside6.webp",
            content: `<h3>Départ depuis le Col du Châtoux</h3>
          <p>Le circuit débute au Col du Châtoux, un lieu paisible situé à environ 50 kilomètres de Lyon, dans le Haut Beaujolais. Ce col est un point de départ idéal pour explorer cette région moins fréquentée mais tout aussi charmante du Beaujolais, loin des sentiers battus des célèbres vignobles. Dès le départ, vous serez plongé dans une atmosphère tranquille, entouré de forêts et de pâturages verdoyants. Le sentier commence en douceur par une montée progressive à travers une forêt de conifères, caractéristique de cette région montagneuse. Les premières minutes de la marche sont propices à l’observation de la faune locale, avec des écureuils, des chevreuils et une grande variété d'oiseaux que l’on peut croiser en chemin. L’air frais et pur des monts environnants procure une sensation immédiate de déconnexion et de détente.</p>
          
          <h3>Traversée des crêtes et vues panoramiques</h3>
          <p>Après une première montée modérée, le sentier vous amène sur les crêtes du Haut Beaujolais, offrant de superbes vues dégagées sur les vallées et collines environnantes. Par temps clair, vous pourrez apercevoir les Alpes à l’horizon, ainsi que les monts du Lyonnais au loin. Ce tronçon est particulièrement agréable, avec ses paysages variés : des pâturages où paissent des troupeaux de vaches, des clairières fleuries, et des forêts de sapins. Le calme des lieux est particulièrement appréciable pour ceux en quête de nature et de solitude. Sur ces hauteurs, le chemin est bien balisé et offre des points de repos avec des bancs ou des rochers d’où il est possible d’admirer le panorama et de faire une pause. Ce moment est idéal pour savourer un encas tout en profitant des paysages ouverts, sous un ciel souvent dégagé.</p>
          
          <h3>Retour en boucle par les vallons et les hameaux</h3>
          <p>La descente se fait en douceur à travers des vallons boisés, avec quelques portions de chemin ombragées parfaites pour les journées d’été. En redescendant vers le Col du Châtoux, le paysage change légèrement, devenant plus rural avec de petits hameaux typiques du Haut Beaujolais, où le temps semble s’être arrêté. Ces petits villages, souvent composés de quelques fermes et maisons en pierre, témoignent de la vie traditionnelle et agricole de cette région. Le chemin, toujours bien balisé, est accessible et agréable, avec quelques petits cours d'eau qui serpentent dans les vallées, ajoutant une touche rafraîchissante au parcours. De retour au Col du Châtoux, après environ 4 heures de marche, vous aurez pleinement profité de l’authenticité et de la beauté naturelle du Haut Beaujolais, loin de l’agitation touristique des vignobles du sud.</p>`,
            duration: 4,
            difficulty: "Moyen",
            distance: "50 km de Lyon",
            location: "Col du Châtoux, 69870 Poule-les-Écharmeaux"
        }, {
            title: "Le Mont Thou",
            description: "Une randonnée rapide mais intense sur l’un des sommets les plus emblématiques des Monts d’Or, offrant des vues imprenables sur Lyon et les alentours.",
            image: "/img/escapades/escapade7.webp",
            image_inside: "/img/escapades/escapades_inside/escapade_inside7.webp",
            content: `<h3>Départ depuis Saint-Romain-au-Mont-d’Or</h3>
          <p>Le Mont Thou, situé dans les Monts d'Or, est une randonnée incontournable pour ceux qui souhaitent s'évader rapidement de Lyon tout en profitant de superbes panoramas. Le départ s'effectue depuis le charmant village de Saint-Romain-au-Mont-d’Or, à environ 10 km de Lyon. Ce village pittoresque, avec ses maisons en pierres dorées typiques de la région, donne immédiatement le ton : ici, la nature et l’histoire se côtoient harmonieusement. Dès le début du sentier, la montée est assez soutenue, traversant des rues étroites et des chemins pavés avant de s’enfoncer dans une forêt de chênes et de hêtres. Ce premier tronçon, ombragé et paisible, offre une ascension régulière idéale pour s’échauffer tout en admirant les premières vues sur la Saône.</p>
          
          <h3>L’ascension du Mont Thou</h3>
          <p>Le Mont Thou culmine à environ 609 mètres, ce qui en fait l'un des sommets les plus imposants des Monts d'Or. Après avoir quitté les parties boisées, la pente s’accentue nettement. Le sentier devient alors plus rocailleux, serpentant à travers des zones dégagées et offrant des points de vue imprenables sur Lyon. À mi-parcours, vous aurez l’occasion de vous arrêter à des belvédères naturels, d’où la vue sur la vallée du Rhône, les Alpes au loin, et même le Mont Blanc par temps clair, est tout simplement époustouflante. La végétation se fait plus rare au fur et à mesure que vous vous rapprochez du sommet, avec de petites prairies et des landes qui dominent le paysage. Cette partie est plus exigeante physiquement, mais la beauté du cadre en vaut largement l’effort. </p>
          
          <h3>Sommet et descente</h3>
          <p>Une fois au sommet du Mont Thou, vous serez récompensé par une vue panoramique à 360 degrés sur la région. D’un côté, les Monts du Lyonnais et, de l’autre, Lyon qui s'étend en contrebas. Le spectacle est encore plus impressionnant en fin de journée, lorsque le soleil couchant éclaire les toits de la ville d'une lumière dorée. Après avoir profité de ce moment de contemplation, il est temps de redescendre. Le retour peut se faire par le même chemin, ou en optant pour un sentier alternatif qui contourne le mont par des chemins forestiers plus doux. Cette descente est agréable, offrant de nouveaux points de vue sur la vallée de la Saône et les petits villages des Monts d'Or. Après environ 2 heures de marche, vous regagnerez Saint-Romain-au-Mont-d’Or, avec le sentiment d’avoir découvert l’un des plus beaux points de vue de la région lyonnaise.</p>`,
            duration: 2,
            difficulty: "Moyen",
            distance: "10 km de Lyon",
            location: "Saint-Romain-au-Mont-d'Or, 69270"
        }, {
            title: "Le Mont Luisandre et les 4 châteaux",
            description: "Une randonnée fascinante alliant nature et patrimoine, avec des vues panoramiques sur les paysages environnants et la découverte de quatre châteaux historiques.",
            image: "/img/escapades/escapade8.webp",
            image_inside: "/img/escapades/escapades_inside/escapade_inside8.webp",
            content: `<h3>Départ depuis le village de Chazay-d'Azergues</h3>
          <p>Le circuit commence au charmant village de Chazay-d'Azergues, situé à environ 30 kilomètres de Lyon. Ce village médiéval, avec ses ruelles pavées et ses maisons en pierres, constitue un point de départ idéal pour une journée de randonnée riche en découvertes. À partir de Chazay, le sentier vous mène rapidement à travers des champs et des forêts, offrant un premier aperçu des magnifiques paysages du Beaujolais. La première partie de la randonnée est relativement facile, avec une montée progressive qui permet de s’échauffer en douceur. Au fur et à mesure que vous avancez, le chemin serpente entre les vignes et les bosquets, offrant des vues sur la campagne environnante et les collines qui se dessinent à l'horizon. Les amateurs de photographie apprécieront les nombreux points de vue qui jalonneront votre parcours.</p>
          
          <h3>Ascension du Mont Luisandre</h3>
          <p>Après environ 1 heure de marche, vous commencerez l'ascension du Mont Luisandre, qui culmine à 600 mètres d'altitude. Cette partie du chemin devient plus escarpée et rocky, mais elle est accessible aux randonneurs de niveau intermédiaire. Une fois au sommet, vous serez récompensé par un panorama exceptionnel sur le Beaujolais et la plaine du Rhône. Par temps clair, vous pourrez même apercevoir les Alpes au loin. Le Mont Luisandre est également connu pour sa faune variée, et il n'est pas rare d’apercevoir des rapaces planant au-dessus des collines. Prenez le temps d'admirer le paysage et de faire une pause avant de poursuivre votre randonnée vers les châteaux.</p>
          
          <h3>Découverte des 4 châteaux</h3>
          <p>Le circuit vous mène ensuite à la découverte de quatre châteaux historiques : le Château de Chazay, le Château de Vaux, le Château de Saint-Laurent-d'Agny et le Château de Montmelas. Chacun de ces châteaux a son propre caractère et son histoire, et vous pourrez admirer leur architecture et leurs jardins. La randonnée offre des tronçons à travers des chemins forestiers et des petits sentiers qui relient ces châteaux, chacun vous plongeant dans l'histoire locale et les légendes qui les entourent. Le temps d’une pause pique-nique près de l’un des châteaux est idéal pour savourer un moment de détente avant de reprendre le chemin du retour. Le parcours est riche en histoire et en culture, faisant de cette randonnée une expérience complète qui allie plaisir de la marche et enrichissement personnel.</p>
          
          <h3>Retour vers Chazay-d'Azergues</h3>
          <p>Le retour vers Chazay-d'Azergues se fait par un chemin de randonnée balisé, offrant de nouveaux points de vue sur la région. Le sentier redescend en douceur, avec quelques zones ombragées parfaites pour se rafraîchir pendant les chaudes journées d'été. À mesure que vous approchez de Chazay, le paysage change légèrement, se transformant en vignobles et champs cultivés. Vous arriverez à votre point de départ après environ 4 heures de marche, des souvenirs plein la tête et peut-être même une bouteille de vin local à ramener, pour prolonger l’expérience du Beaujolais chez vous.</p>`,
            duration: 4,
            difficulty: "Moyen",
            distance: "30 km de Lyon",
            location: "Chazay-d'Azergues, 69380"
        }, {
            title: "La Roche Percée et le point de vue de Romagneux",
            description: "Une randonnée pittoresque qui vous mène à La Roche Percée, offrant des vues imprenables sur les paysages environnants.",
            image: "/img/escapades/escapade9.webp",
            image_inside: "/img/escapades/escapades_inside/escapade_inside9.webp",
            content: `<h3>Départ depuis Chassagny</h3>
          <p>La randonnée vers La Roche Percée commence au village de Chassagny, situé à environ 25 km au nord de Lyon. Ce village tranquille est le point de départ idéal pour explorer les magnifiques paysages du Beaujolais. Dès le départ, vous serez immergé dans la nature, avec des sentiers bien balisés qui serpentent à travers des prairies verdoyantes et des forêts. La première partie du parcours est relativement douce, permettant aux randonneurs de profiter de l'air frais et des senteurs de la campagne. En chemin, vous découvrirez des panoramas charmants sur la vallée, qui s'étendent jusqu'aux collines du Beaujolais. Les petits chemins et sentiers creux ajoutent au charme de cette randonnée, qui est accessible à tous.</p>
          
          <h3>La Roche Percée</h3>
          <p>Après environ une heure de marche, vous atteindrez La Roche Percée, une formation rocheuse spectaculaire qui émerge de la forêt. Cette roche, avec son ouverture naturelle, est un lieu prisé par les randonneurs et les photographes. Vous pouvez grimper jusqu'au sommet pour avoir une vue panoramique à couper le souffle sur les vallées environnantes et les collines boisées. La Roche Percée est également un site idéal pour faire une pause, savourer un pique-nique et se ressourcer en pleine nature. Ce lieu unique a une ambiance apaisante, et vous pourrez entendre le chant des oiseaux et le murmure du vent à travers les arbres, créant une atmosphère de sérénité.</p>
          
          <h3>Le point de vue de Romagneux</h3>
          <p>Après avoir exploré La Roche Percée, le sentier vous mènera au point de vue de Romagneux, qui se trouve à quelques minutes de marche. Ce point de vue offre une vue encore plus impressionnante sur les paysages du Beaujolais et les Monts d'Or. La vue s'étend sur des kilomètres, et par temps clair, vous pourrez apercevoir les sommets au loin. C'est l'endroit parfait pour prendre des photos mémorables et apprécier la beauté naturelle de la région. Le chemin de retour à Chassagny vous permettra de redécouvrir la beauté de la nature environnante et de terminer cette randonnée par une promenade relaxante. Environ 3 heures de marche sont nécessaires pour cette randonnée qui combine découverte, contemplation et nature.</p>`,
            duration: 3,
            difficulty: "Moyen",
            distance: "25 km de Lyon",
            location: "Chassagny, 69440"
        }, {
            title: "Le Grand Ratz",
            description: "Une randonnée fascinante qui vous conduit au sommet du Grand Ratz, avec des vues à couper le souffle sur les montagnes environnantes.",
            image: "/img/escapades/escapade10.webp",
            image_inside: "/img/escapades/escapades_inside/escapade_inside10.webp",
            content: `<h3>Départ depuis le village de Montagnieu</h3>
          <p>La randonnée vers le Grand Ratz débute au charmant village de Montagnieu, situé à environ 30 km de Lyon. Cette randonnée est idéale pour ceux qui cherchent à s'éloigner de l'agitation urbaine et à se plonger dans la beauté naturelle de la région. Le départ se fait à partir de la place du village, où vous pourrez admirer les bâtiments historiques et profiter de l'ambiance paisible. Les premiers kilomètres du sentier sont agréables et accessibles, serpentant à travers des champs ouverts et des forêts, offrant ainsi un mélange de paysages variés. L'ascension commence lentement, mais rapidement, vous serez immergé dans la nature, entouré par le chant des oiseaux et le parfum des fleurs sauvages.</p>
          
          <h3>Ascension du Grand Ratz</h3>
          <p>Au fur et à mesure que vous avancez, le sentier devient plus escarpé, mais les panoramas qui se dévoilent valent chaque effort. La montée, bien que modérée, vous permettra d’apprécier les paysages changeants des Monts du Lyonnais. En grimpant, vous pourrez apercevoir des vues impressionnantes sur la vallée de l'Ain et les massifs environnants. La randonnée est ponctuée de plusieurs points de vue, où il est agréable de faire une pause pour se reposer et capturer des images mémorables. Après environ deux heures de marche, vous atteindrez le sommet du Grand Ratz, où vous serez récompensé par une vue panoramique à couper le souffle. Le sommet est un lieu parfait pour se restaurer, faire un pique-nique et profiter de la tranquillité des lieux.</p>
          
          <h3>Retour et découverte</h3>
          <p>Le chemin du retour vous permettra de découvrir des sentiers différents, ajoutant à l'expérience globale de la randonnée. Vous aurez l'occasion de passer par des prairies fleuries et des forêts denses, tout en savourant la beauté tranquille des paysages. La randonnée au Grand Ratz est un excellent moyen de se reconnecter à la nature et de profiter de l'air frais. Cette expérience est accessible aux randonneurs d'un niveau moyen et nécessite environ 4 heures pour l'aller-retour. Ne manquez pas cette randonnée mémorable, où nature et panoramas se rencontrent dans un cadre idyllique.</p>`,
            duration: 4,
            difficulty: "Difficile",
            distance: "30 km de Lyon",
            location: "Montagnieu, 38110"
        }])
}
catch (error) {
    console.log(error)
}