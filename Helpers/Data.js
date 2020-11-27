export const sizes = [
    12, 15, 18, 20
]

export const typo = [
    'Texturina', 'Roboto', 'Tangerine'
]

export const classes = [
    {id: 1, type: 'Chevalier', name: 'Chevalier'},
    {id: 2, type: 'Prêtre', name: 'Prêtre'},
    {id: 3, type: 'Magicien', name: 'Magicien'},
    {id: 4, type: 'Voleur', name: 'Voleur'}  
 ]

export const books = [
    {id: 1, title: 'Les Treize Mages'},
    {id: 2, title: 'Le Maître des Rêves'},
    {id: 3, title: 'Le Port des Assassins'},
    {id: 4, title: 'L\' Impossible Mission'},
    {id: 5, title: 'Les Murailles de Spyte'}
] 

// export const equipement =[
//     {type: "arme", usableInFight: false, name: "Epée", use: 0, degat: "", prix: "", descr: "Une epée de base", action: null},
//     {type: "arme", usableInFight: false, name: "Bâton", use: 0, degat: "", prix: "", descr: "Un bâton de base", action: null},
//     {type: "armure", usableInFight: false, name: "Côte de maille", use: 3, degat: "", prix: "", descr: "Une protection de base", action: null},
//     {type: "armure", usableInFight: false, name: "Côte annelée", use: 2, degat: "", prix: "", descr: "Une protection de base", action: null},
//     {type: "armure", usableInFight: false, name: "Armure en cuir clouté", use: 2, degat: "", prix: "", descr: "Une protection de baser", action: null},
//     {type: "objet", usableInFight: false, name: "Bourse", use: lvl*5, degat: "", prix: "", descr: "Une bourse qui contient vos pièces d'or", action: null},
//     {type: "objet", usableInFight: false, name: "Arc", use: 0, degat: "", prix: "", descr: "Une arme de base", action: null},
//     {type: "objet", usableInFight: false, name: "Carquois", use: 6, degat: "", prix: "", descr: "", action: null},
// ]

export const database = [
    { //persoData
        classe: "Chevalier",
        name: "",
        level: "",
        xp: 0,
        protection: 0,
        arme: true,
        carac: [ //dataByLvl
            {level:  2, force:  8, pouvoir: 6, habilete: 6, endurance:  12, degat: 1, bonus: 1,},
            {level:  3, force:  8, pouvoir: 6, habilete: 6, endurance:  18, degat: 1, bonus: 2,},
            {level:  4, force:  8, pouvoir: 6, habilete: 7, endurance:  24, degat: 2, bonus: 0,},
            {level:  5, force:  8, pouvoir: 6, habilete: 7, endurance:  30, degat: 2, bonus: 1,},
            {level:  6, force:  8, pouvoir: 6, habilete: 7, endurance:  36, degat: 2, bonus: 2,},
            {level:  7, force:  8, pouvoir: 6, habilete: 7, endurance:  42, degat: 3, bonus: 0,},
            {level:  8, force:  8, pouvoir: 7, habilete: 7, endurance:  48, degat: 3, bonus: 1,},
            {level:  9, force:  9, pouvoir: 7, habilete: 7, endurance:  54, degat: 3, bonus: 2,},
            {level: 10, force:  9, pouvoir: 7, habilete: 7, endurance:  60, degat: 4, bonus: 0,},
            {level: 11, force:  9, pouvoir: 7, habilete: 7, endurance:  66, degat: 4, bonus: 1,},
            {level: 12, force:  9, pouvoir: 7, habilete: 7, endurance:  72, degat: 4, bonus: 2,},
            {level: 13, force:  9, pouvoir: 7, habilete: 8, endurance:  78, degat: 5, bonus: 0,},
            {level: 14, force: 10, pouvoir: 8, habilete: 8, endurance:  84, degat: 5, bonus: 1,},
            {level: 15, force: 10, pouvoir: 8, habilete: 8, endurance:  90, degat: 5, bonus: 2,},
            {level: 16, force: 10, pouvoir: 8, habilete: 8, endurance:  96, degat: 6, bonus: 0,},
            {level: 17, force: 10, pouvoir: 8, habilete: 8, endurance: 102, degat: 6, bonus: 1,},
            {level: 18, force: 10, pouvoir: 8, habilete: 8, endurance: 108, degat: 6, bonus: 2,},
            {level: 19, force: 10, pouvoir: 8, habilete: 8, endurance: 114, degat: 7, bonus: 0,},
            {level: 20, force: 10, pouvoir: 8, habilete: 9, endurance: 120, degat: 7, bonus: 1,},
        ],
        inventaire :[],
        skills: [
            {usableInFight: false, name: "Ambidextérité", descr: "Vous pouvez combattre avec deux épées (une dans chaque main) et frapper ainsi deux fois par Assaut. Si vous combattez avec une arme magique, les bonifications qu'elle vous apporte ne peuvent s'appliquer à la deuxième arme."},
            {usableInFight: false, name: "Combat à mains nues", descr: "Contrairement aux autres personnages, vous combattez à mains nues sans subir de pénalité ni en FORCE ni en Dommages."},
        ]
    },
    {
        classe: "Prêtre",
        name: "",
        level: "",
        xp: 0,
        protection: 0,
        arme: true,
        carac: [
            {level:  2, force:  7, pouvoir:  7, habilete:  6, endurance:  10, degat: 1, bonus: 0},
            {level:  3, force:  7, pouvoir:  7, habilete:  6, endurance:  15, degat: 1, bonus: 1},
            {level:  4, force:  7, pouvoir:  8, habilete:  7, endurance:  20, degat: 1, bonus: 2},
            {level:  5, force:  7, pouvoir:  8, habilete:  7, endurance:  25, degat: 2, bonus: 0},
            {level:  6, force:  7, pouvoir:  8, habilete:  7, endurance:  30, degat: 2, bonus: 1},
            {level:  7, force:  7, pouvoir:  8, habilete:  7, endurance:  35, degat: 2, bonus: 2},
            {level:  8, force:  8, pouvoir:  8, habilete:  7, endurance:  40, degat: 3, bonus: 0},
            {level:  9, force:  8, pouvoir:  8, habilete:  7, endurance:  45, degat: 3, bonus: 1},
            {level: 10, force:  8, pouvoir:  8, habilete:  7, endurance:  50, degat: 3, bonus: 2},
            {level: 11, force:  8, pouvoir:  8, habilete:  7, endurance:  55, degat: 4, bonus: 0},
            {level: 12, force:  8, pouvoir:  9, habilete:  8, endurance:  60, degat: 4, bonus: 1},
            {level: 13, force:  8, pouvoir:  9, habilete:  8, endurance:  65, degat: 4, bonus: 2},
            {level: 14, force:  9, pouvoir:  9, habilete:  8, endurance:  70, degat: 5, bonus: 0},
            {level: 15, force:  9, pouvoir:  9, habilete:  8, endurance:  75, degat: 5, bonus: 1},
            {level: 16, force:  9, pouvoir: 10, habilete:  9, endurance:  80, degat: 5, bonus: 2},
            {level: 17, force:  9, pouvoir: 10, habilete:  9, endurance:  85, degat: 6, bonus: 0},
            {level: 18, force:  9, pouvoir: 10, habilete:  9, endurance:  90, degat: 6, bonus: 1},
            {level: 19, force:  9, pouvoir: 10, habilete:  9, endurance:  95, degat: 6, bonus: 2},
            {level: 20, force: 10, pouvoir: 10, habilete: 10, endurance: 100, degat: 7, bonus: 0},
        ],
        inventaire :[],
        skills: [
            {usableInFight: true, name: "Tir", descr: "Tant que vous possédez votre arc et vos flèches, vous pouvez choisir le tir lors des combats. Pour cela, vous n'avez pas besoin de vous trouver dans une case adjacente à celle de l'ennemi pour l'atteindre. Pour le toucher, vous devez obtenir un résultat inférieur ou égal à votre total d'HABILETÉ avec deux dés. Dommage de 1 dé (moins la Protection)."},
            {usableInFight: true, name: "Maîtrise du Bâton", descr: "Une longue pratique des arts martiaux associée à une parfaite connaissance de l'organisme humain vous permet de toucher l'ennemi à ses points faibles. Lorsque vous combattez avec votre bâton et que vous frappez votre adversaire, il vous est possible de déterminer votre coup avec trois dés au lieu des deux dés habituellement requis. Cela augmente la difficulté mais, si le coup porte, vous infligez à votre adversaire 1 dé de Dommages supplémentaires et vousparvenez à le déséquilibrer, et un ennemi à terre ne peut réagir avant la fin de l'Assaut suivant."},
            {usableInFight: false, name: "Soins", descr: "Vous pouvez utiliser ce pouvoir psychique à tout moment, sauf au combat. Pour prodiguer des soins vous devez avant tout déterminer le nombre de points d'ENDURANCE que vous allez dépenser à cet effet. Otez ces points de votre total d'ENDURANCE et jetez 1 dé - 2. Multipliez le résultat par le nombre de points d'ENDURANCE dépensés, afin de connaître le total d'Énergie Curative - sous forme de points d'ENDURANCE - que vous avez rassemblés. Ces points peuvent ensuite être distribués entre les membres de l'expédition, vous y compris. Exemple : Alric le prêtre décide de prodiguer des Soins et y consacre 5 points d'ENDURANCE. Il jette 1 dé - 2 et obtient 4. Il multiplie les 5 points qu'il a consacrés par 2 (4 - 2) et rassemble ainsi 10 points d'ENDURANCE. Il peut donc récupérer ses 5 points d'ENDURANCE et distribuer les 5 points restants à ses compagnons. Les résultats négatifs comptent pour zéro. Cet te pratique comporte des risques puisque vous pouvez dépenser despoints sans rien avoir en retour.Vous serez averti lorsque vous pourrez recourir à d'autres pouvoirs psychiques."},
            {usableInFight: false, name: "Perceptions extrasensorielles", descr: "Possibilité de connaître les pensées d'autrui."},
            {usableInFight: false, name: "Clairvoyance", descr: "Cette faculté permet de voir à travers les tentures un épais brouillard ou de l'eau trouble. Elle ne s'étend pas aux matériaux durs telsque la pierre ou le métal."},
            {usableInFight: false, name: "Lévitation", descr: "Vous pouvez vous élever à la verticale dans les airs."},
            {usableInFight: false, name: "Exorcisme", descr: "Ce pouvoir permet de repousser les Fantômes ou les Morts Vivants en neutralisant l'énergie surnaturelle qui les anime."},
        ]
    },
    {
        classe: "Magicien",
        name: "",
        level: "",
        xp: 0,
        protection: 0,
        arme: true,
        carac: [
            {level:  2, force: 6, pouvoir:  8, habilete: 6, endurance:  10, degat: 1, bonus: -1},
            {level:  3, force: 6, pouvoir:  8, habilete: 6, endurance:  15, degat: 1, bonus:  0},
            {level:  4, force: 7, pouvoir:  8, habilete: 6, endurance:  20, degat: 1, bonus:  1},
            {level:  5, force: 7, pouvoir:  8, habilete: 7, endurance:  25, degat: 1, bonus:  2},
            {level:  6, force: 7, pouvoir:  8, habilete: 7, endurance:  30, degat: 1, bonus:  3},
            {level:  7, force: 7, pouvoir:  8, habilete: 7, endurance:  35, degat: 2, bonus:  1},
            {level:  8, force: 8, pouvoir:  9, habilete: 7, endurance:  40, degat: 2, bonus:  2},
            {level:  9, force: 8, pouvoir:  9, habilete: 7, endurance:  45, degat: 2, bonus:  3},
            {level: 10, force: 8, pouvoir:  9, habilete: 7, endurance:  50, degat: 3, bonus:  0},
            {level: 11, force: 8, pouvoir:  9, habilete: 7, endurance:  55, degat: 3, bonus:  1},
            {level: 12, force: 8, pouvoir:  9, habilete: 8, endurance:  60, degat: 3, bonus:  2},
            {level: 13, force: 8, pouvoir:  9, habilete: 8, endurance:  65, degat: 3, bonus:  3},
            {level: 14, force: 8, pouvoir: 10, habilete: 8, endurance:  70, degat: 4, bonus:  0},
            {level: 15, force: 9, pouvoir: 10, habilete: 8, endurance:  75, degat: 4, bonus:  1},
            {level: 16, force: 9, pouvoir: 10, habilete: 8, endurance:  80, degat: 4, bonus:  2},
            {level: 17, force: 9, pouvoir: 10, habilete: 8, endurance:  85, degat: 4, bonus:  3},
            {level: 18, force: 9, pouvoir: 10, habilete: 9, endurance:  90, degat: 5, bonus:  0},
            {level: 19, force: 9, pouvoir: 10, habilete: 9, endurance:  95, degat: 5, bonus:  1},
            {level: 20, force: 9, pouvoir: 11, habilete: 9, endurance: 100, degat: 5, bonus:  2},
        ],
        inventaire :[],
        skills: [
            {usableInFight: true, level: 1, name: "Miasmes", descr: "Un brouillard toxique recouvre tous les adversaires et inflige à chacun la perte de 1 point d'ENDURANCE (moins la valeur de Protection). Il s'agit d'un sortilège d'attaque."},
            {usableInFight: true, level: 1, name: "Hurlement", descr: "Ce sortilège mental ne peut affecter qu'une seule cible. Le cri du magicien trouble l'adversaire qui procède à ses jets de coups et à ses jets de tir avec trois dés au lieu de deux pendant quatre Assauts."},
            {usableInFight: true, level: 1, name: "Foudre Blanche", descr: "Ce sortilège d'attaque frappe un seul adversaire et provoque la perte de 2 dés + 2 d'ENDURANCE (moins la valeur de Protection)."},
            {usableInFight: true, level: 2, name: "Blessure", descr: "Ce sortilège d'attaque frappe un seul adversaire et provoque la perte de 3 dés + 3 d'ENDURANCE (moins la valeur de Protection)."},
            {usableInFight: true, level: 2, name: "Puissance", descr: "Ce sortilège augmente votre FORCE de 2 points et permet d'ajouter 2 points aux Dommages que vous infligez ou biend'augmenter de 1 point le total de FORCE de tous vos compagnons (vous compris) et d'ajouter 1 point à leur jet de Dommages. Les effets durent quatre Assauts."},
            {usableInFight: true, level: 2, name: "Téléportation", descr: "Lorsque vous désirez rompre le combat, ce sortilège téléporte tous les membres de l'expédition vers la plus proche sortie, permettant de fuir dès l'Assaut suivant."},
            {usableInFight: true, level: 2, name: "Souffle Mortel", descr: "Ce sortilège mental provoque la perte de 2 points d'ENDURANCE chez tous les adversaires qui n'auront su y résister. Dans ce cas, la Protection est inopérante."},
            {usableInFight: true, level: 3, name: "Vampire", descr: "Ce sortilège mental n'affecte qu'un seul adversaire, qui, s'il ne peut y résister, perd 4 dés d'ENDURANCE.  De surcroît, le magicien récupère la moitié des points d'ENDURANCE perdus par la victime (arrondis au chiffre inférieur). Bien entendu, votre total d'ENDURANCE ne peut excéder son total de départ."},
            {usableInFight: true, level: 4, name: "Météore", descr: "Ce sortilège d'attaque provoque la perte de 2 dés + 2 points d'ENDURANCE chez tous les adversaires (moins leur valeur de Protection)."},
            {usableInFight: true, level: 4, name: "Main du Diable", descr: "Ce sortilège mental opère par imposition de la main. Il est donc nécessaire d'être en contact avec l'adversaire, qui perd 7 dés d'ENDURANCE s'il ne peut résister. S'il résiste, il ne perd que 2 dés d'ENDURANCE."},
            {usableInFight: true, level: 5, name: "Foudre Noire", descr: "Ce sortilège d'attaque puissant frappe un seul adversaire et provoque la perte de 7 dés + 7 d'ENDURANCE (moins la valeur de Protection)."},
            {usableInFight: true, level: 5, name: "Asservissement", descr: "Ce sortilège mental permet de contrôler l'esprit d'un seul adversaire qui, s'il ne peut y résister, demeure immobile et, si vous n'êtes pas en combat, doit répondre à vos questions. Le magicien peut lui ordonner de combattre ses anciens compagnons d'armes. Jetez alors un dé : avec un résultat de 6, l'adversaire reprend ses esprits et attaque à nouveau. Ce sortilège opère tant que vous demeurez à proximité. Lorsque vous quittez la pièce où se trouve la victime, la malheureuse meurt aussitôt."},
            {usableInFight: false, name: "L'Appel du Faltyn", descr: "Une petite créature surnaturelle apparaît pour vous servir pendant un temps."},
            {usableInFight: false, name: "Oracle", descr: "Ce sortilège permet d'avoir un aperçu du futur."},
            {usableInFight: false, name: "Détection de la magie", descr: "Elle permet d'avoir conscience des forces surnaturelles mises en oeuvre alentour."},
        ]
    },    
    {
        classe: "Voleur",
        name: "",
        level: "",
        xp: 0,
        protection: 0,
        arme: true,
        carac: [
            {level:  2, force:  7, pouvoir:  6, habilete:  8, endurance:  12, degat: 1, bonus: 0},
            {level:  3, force:  7, pouvoir:  6, habilete:  8, endurance:  18, degat: 1, bonus: 1},
            {level:  4, force:  7, pouvoir:  7, habilete:  8, endurance:  24, degat: 1, bonus: 2},
            {level:  5, force:  7, pouvoir:  7, habilete:  8, endurance:  30, degat: 2, bonus: 0},
            {level:  6, force:  7, pouvoir:  7, habilete:  8, endurance:  36, degat: 2, bonus: 1},
            {level:  7, force:  7, pouvoir:  7, habilete:  8, endurance:  42, degat: 2, bonus: 2},
            {level:  8, force:  8, pouvoir:  7, habilete:  9, endurance:  48, degat: 3, bonus: 0},
            {level:  9, force:  8, pouvoir:  9, habilete:  9, endurance:  54, degat: 3, bonus: 1},
            {level: 10, force:  8, pouvoir:  9, habilete:  9, endurance:  60, degat: 3, bonus: 2},
            {level: 11, force:  8, pouvoir:  9, habilete:  9, endurance:  66, degat: 4, bonus: 0},
            {level: 12, force:  8, pouvoir:  9, habilete:  9, endurance:  72, degat: 4, bonus: 1},
            {level: 13, force:  8, pouvoir:  9, habilete:  9, endurance:  78, degat: 4, bonus: 2},
            {level: 14, force:  9, pouvoir:  9, habilete: 10, endurance:  84, degat: 5, bonus: 0},
            {level: 15, force:  9, pouvoir:  9, habilete: 10, endurance:  90, degat: 5, bonus: 1},
            {level: 16, force:  9, pouvoir:  9, habilete: 10, endurance:  96, degat: 5, bonus: 2},
            {level: 17, force:  9, pouvoir:  9, habilete: 10, endurance: 102, degat: 6, bonus: 0},
            {level: 18, force:  9, pouvoir:  9, habilete: 10, endurance: 108, degat: 6, bonus: 1},
            {level: 19, force:  9, pouvoir:  9, habilete: 10, endurance: 114, degat: 6, bonus: 2},
            {level: 20, force: 10, pouvoir: 10, habilete: 11, endurance: 120, degat: 7, bonus: 0},
        ],
        
        inventaire: [],
        skills: [
            {usableInFight: true, name: "Esquive", descr: "Votre agilité et votre souplesse vous ont rendu maître dans l'art de l'esquive.Chaque fois qu\'un adversaire tente de vous frapper, il doit jeter 2 dés + 1 au lieu des deux dés habituels."},
            {usableInFight: true, name: "Tir", descr: "Tant que vous possédez votre arc et vos flèches, vous pouvez choisir le tir lors des combats. Pour cela, vous n'avez pas besoin de vous trouver dans une case adjacente à celle de l'ennemi pour l'atteindre. Pour le toucher, vous devez obtenir un résultat inférieur ou égal à votre total d'HABILETÉ avec deux dés. Dommage de 1 dé (moins la Protection)."},
            {usableInFight: true, name: "Vivacité", descr: "Lors d'un affrontement, vous pouvez tenter deux actions dans le même Assaut (mais une seule fois par combat). La première action est entreprise au début de l'Assaut, en fonction de votre total d'HABILETÉ. Vous pouvez agir une deuxième fois, en fin d'Assaut, lorsque votre adversaire a épuisé ses possibilités d'action (ce qui vous permet de fuir sans risques en cours d'affrontement)."},
        ]
    },
]

// objet : type nom, use(int), degat, prix, descr, action
// utilisation d'une fct dans un objet :
// Foo = {
//     bar: function() {
//         alert("baz");
//     }   
// }
// en faisant Foo.bar()
//exemple = {type:"objet", name: "bourse", use: 0, degat: "", prix: "", descr: "une bourse qui contient vos pièces d'or", action: null}
// autre_exemple = {
//     type:"armure", name: "Côte de maille", use: 3, degat: "", prix: "", descr: "Une protection de base pour les Chevaliers", 
//     action: function() {
//         return Perso.protection = 3; 
//     }
// }