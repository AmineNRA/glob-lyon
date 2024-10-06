import Article from "./app/models/article.js";
import Caroussel from "./app/models/caroussel.js";
import Comment from "./app/models/comment.js";
import Escapade from "./app/models/escapade.js";
import Message from "./app/models/message.js";
import Tag from "./app/models/tag.js";
import User from "./app/models/user.js";
import sequelize from "./app/database.js";


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
    })
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
    })
}
catch (error) {
    console.log(error)
}