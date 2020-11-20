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

export const database = [
    { //persoData
        classe: "Chevalier",
        data: [ //dataByLvl
            {level:  2, force:  8, pouvoir: 6, habilete: 6, endurance:  12, degat: 1, bonus: 1, arme: 'Epée', protection: 3, xp: 0, type: 'Chevalier', name: ''},
            {level:  3, force:  8, pouvoir: 6, habilete: 6, endurance:  18, degat: 1, bonus: 2, arme: 'Epée', protection: 3, xp: 0, type: 'Chevalier', name: ''},
            {level:  4, force:  8, pouvoir: 6, habilete: 7, endurance:  24, degat: 2, bonus: 0, arme: 'Epée', protection: 3, xp: 0, type: 'Chevalier', name: ''},
            {level:  5, force:  8, pouvoir: 6, habilete: 7, endurance:  30, degat: 2, bonus: 1, arme: 'Epée', protection: 3, xp: 0, type: 'Chevalier', name: ''},
            {level:  6, force:  8, pouvoir: 6, habilete: 7, endurance:  36, degat: 2, bonus: 2, arme: 'Epée', protection: 3, xp: 0, type: 'Chevalier', name: ''},
            {level:  7, force:  8, pouvoir: 6, habilete: 7, endurance:  42, degat: 3, bonus: 0, arme: 'Epée', protection: 3, xp: 0, type: 'Chevalier', name: ''},
            {level:  8, force:  8, pouvoir: 7, habilete: 7, endurance:  48, degat: 3, bonus: 1, arme: 'Epée', protection: 3, xp: 0, type: 'Chevalier', name: ''},
            {level:  9, force:  9, pouvoir: 7, habilete: 7, endurance:  54, degat: 3, bonus: 2, arme: 'Epée', protection: 3, xp: 0, type: 'Chevalier', name: ''},
            {level: 10, force:  9, pouvoir: 7, habilete: 7, endurance:  60, degat: 4, bonus: 0, arme: 'Epée', protection: 3, xp: 0, type: 'Chevalier', name: ''},
            {level: 11, force:  9, pouvoir: 7, habilete: 7, endurance:  66, degat: 4, bonus: 1, arme: 'Epée', protection: 3, xp: 0, type: 'Chevalier', name: ''},
            {level: 12, force:  9, pouvoir: 7, habilete: 7, endurance:  72, degat: 4, bonus: 2, arme: 'Epée', protection: 3, xp: 0, type: 'Chevalier', name: ''},
            {level: 13, force:  9, pouvoir: 7, habilete: 8, endurance:  78, degat: 5, bonus: 0, arme: 'Epée', protection: 3, xp: 0, type: 'Chevalier', name: ''},
            {level: 14, force: 10, pouvoir: 8, habilete: 8, endurance:  84, degat: 5, bonus: 1, arme: 'Epée', protection: 3, xp: 0, type: 'Chevalier', name: ''},
            {level: 15, force: 10, pouvoir: 8, habilete: 8, endurance:  90, degat: 5, bonus: 2, arme: 'Epée', protection: 3, xp: 0, type: 'Chevalier', name: ''},
            {level: 16, force: 10, pouvoir: 8, habilete: 8, endurance:  96, degat: 6, bonus: 0, arme: 'Epée', protection: 3, xp: 0, type: 'Chevalier', name: ''},
            {level: 17, force: 10, pouvoir: 8, habilete: 8, endurance: 102, degat: 6, bonus: 1, arme: 'Epée', protection: 3, xp: 0, type: 'Chevalier', name: ''},
            {level: 18, force: 10, pouvoir: 8, habilete: 8, endurance: 108, degat: 6, bonus: 2, arme: 'Epée', protection: 3, xp: 0, type: 'Chevalier', name: ''},
            {level: 19, force: 10, pouvoir: 8, habilete: 8, endurance: 114, degat: 7, bonus: 0, arme: 'Epée', protection: 3, xp: 0, type: 'Chevalier', name: ''},
            {level: 20, force: 10, pouvoir: 8, habilete: 9, endurance: 120, degat: 7, bonus: 1, arme: 'Epée', protection: 3, xp: 0, type: 'Chevalier', name: ''},
        ],
        name: "",
        inventaire :{slot1: "",  slot2: "", slot3: "", slot4: "", slot5: "", slot6: "", slot7: "", slot8: "", slot9: "", slot10: ""},
        bourse: 0,
        carquois: null,
        skill: [],
        capacités: [
            {name: "Ambidextérité", descr: "Vous pouvez combattre avec deux épées (une dans chaque main) et frapper ainsi deux fois par Assaut. Si vous combattez avec une arme magique, les bonifications qu'elle vous apporte ne peuvent s'appliquer à la deuxième arme."},
            {name: "Combat à mains nues", descr: "Contrairement aux autres personnages, vous combattez à mains nues sans subir de pénalité ni en FORCE ni en Dommages."},
        ]
    },
    {
        classe: "Prêtre",
        data: [
            {level:  2, force:  7, pouvoir:  7, habilete:  6, endurance:  10, degat: 1, bonus: 0, arme: 'Bâton', protection: 2, xp: 0, type: 'Prêtre', name: ''},
            {level:  3, force:  7, pouvoir:  7, habilete:  6, endurance:  15, degat: 1, bonus: 1, arme: 'Bâton', protection: 2, xp: 0, type: 'Prêtre', name: ''},
            {level:  4, force:  7, pouvoir:  8, habilete:  7, endurance:  20, degat: 1, bonus: 2, arme: 'Bâton', protection: 2, xp: 0, type: 'Prêtre', name: ''},
            {level:  5, force:  7, pouvoir:  8, habilete:  7, endurance:  25, degat: 2, bonus: 0, arme: 'Bâton', protection: 2, xp: 0, type: 'Prêtre', name: ''},
            {level:  6, force:  7, pouvoir:  8, habilete:  7, endurance:  30, degat: 2, bonus: 1, arme: 'Bâton', protection: 2, xp: 0, type: 'Prêtre', name: ''},
            {level:  7, force:  7, pouvoir:  8, habilete:  7, endurance:  35, degat: 2, bonus: 2, arme: 'Bâton', protection: 2, xp: 0, type: 'Prêtre', name: ''},
            {level:  8, force:  8, pouvoir:  8, habilete:  7, endurance:  40, degat: 3, bonus: 0, arme: 'Bâton', protection: 2, xp: 0, type: 'Prêtre', name: ''},
            {level:  9, force:  8, pouvoir:  8, habilete:  7, endurance:  45, degat: 3, bonus: 1, arme: 'Bâton', protection: 2, xp: 0, type: 'Prêtre', name: ''},
            {level: 10, force:  8, pouvoir:  8, habilete:  7, endurance:  50, degat: 3, bonus: 2, arme: 'Bâton', protection: 2, xp: 0, type: 'Prêtre', name: ''},
            {level: 11, force:  8, pouvoir:  8, habilete:  7, endurance:  55, degat: 4, bonus: 0, arme: 'Bâton', protection: 2, xp: 0, type: 'Prêtre', name: ''},
            {level: 12, force:  8, pouvoir:  9, habilete:  8, endurance:  60, degat: 4, bonus: 1, arme: 'Bâton', protection: 2, xp: 0, type: 'Prêtre', name: ''},
            {level: 13, force:  8, pouvoir:  9, habilete:  8, endurance:  65, degat: 4, bonus: 2, arme: 'Bâton', protection: 2, xp: 0, type: 'Prêtre', name: ''},
            {level: 14, force:  9, pouvoir:  9, habilete:  8, endurance:  70, degat: 5, bonus: 0, arme: 'Bâton', protection: 2, xp: 0, type: 'Prêtre', name: ''},
            {level: 15, force:  9, pouvoir:  9, habilete:  8, endurance:  75, degat: 5, bonus: 1, arme: 'Bâton', protection: 2, xp: 0, type: 'Prêtre', name: ''},
            {level: 16, force:  9, pouvoir: 10, habilete:  9, endurance:  80, degat: 5, bonus: 2, arme: 'Bâton', protection: 2, xp: 0, type: 'Prêtre', name: ''},
            {level: 17, force:  9, pouvoir: 10, habilete:  9, endurance:  85, degat: 6, bonus: 0, arme: 'Bâton', protection: 2, xp: 0, type: 'Prêtre', name: ''},
            {level: 18, force:  9, pouvoir: 10, habilete:  9, endurance:  90, degat: 6, bonus: 1, arme: 'Bâton', protection: 2, xp: 0, type: 'Prêtre', name: ''},
            {level: 19, force:  9, pouvoir: 10, habilete:  9, endurance:  95, degat: 6, bonus: 2, arme: 'Bâton', protection: 2, xp: 0, type: 'Prêtre', name: ''},
            {level: 20, force: 10, pouvoir: 10, habilete: 10, endurance: 100, degat: 7, bonus: 0, arme: 'Bâton', protection: 2, xp: 0, type: 'Prêtre', name: ''},
        ],
        name: "",
        inventaire :{slot1: "",  slot2: "", slot3: "", slot4: "", slot5: "", slot6: "", slot7: "", slot8: "", slot9: "", slot10: ""},
        bourse: 0,
        carquois: 6,
        skill: [],
        capacités: [
            {name: "Tir", descr: "Tant que vous possédez votre arc et vos flèches, vous pouvez choisir le tir lors des combats. Pour cela, vous n'avez pas besoin de vous trouver dans une case adjacente à celle de l'ennemi pour l'atteindre. Pour le toucher, vous devez obtenir un résultat inférieur ou égal à votre total d'HABILETÉ avec deux dés. Dommage de 1 dé (moins la Protection)."},
            {name: "Maîtrise du Bâton", descr: "Une longue pratique des arts martiaux associée à une parfaite connaissance de l'organisme humain vous permet de toucher l'ennemi à ses points faibles. Lorsque vous combattez avec votre bâton et que vous frappez votre adversaire, il vous est possible de déterminer votre coup avec trois dés au lieu des deux dés habituellement requis. Cela augmente la difficulté mais, si le coup porte, vous infligez à votre adversaire 1 dé de Dommages supplémentaires et vousparvenez à le déséquilibrer, et un ennemi à terre ne peut réagir avant la fin de l'Assaut suivant."},
            {name: "Soins", descr: "Vous pouvez utiliser ce pouvoir psychique à tout moment, sauf au combat. Pour prodiguer des soins vous devez avant tout déterminer le nombre de points d'ENDURANCE que vous allez dépenser à cet effet. Otez ces points de votre total d'ENDURANCE et jetez 1 dé - 2. Multipliez le résultat par le nombre de points d'ENDURANCE dépensés, afin de connaître le total d'Énergie Curative - sous forme de points d'ENDURANCE - que vous avez rassemblés. Ces points peuvent ensuite être distribués entre les membres de l'expédition, vous y compris. Exemple : Alric le prêtre décide de prodiguer des Soins et y consacre 5 points d'ENDURANCE. Il jette 1 dé - 2 et obtient 4. Il multiplie les 5 points qu'il a consacrés par 2 (4 - 2) et rassemble ainsi 10 points d'ENDURANCE. Il peut donc récupérer ses 5 points d'ENDURANCE et distribuer les 5 points restants à ses compagnons. Les résultats négatifs comptent pour zéro. Cet te pratique comporte des risques puisque vous pouvez dépenser despoints sans rien avoir en retour.Vous serez averti lorsque vous pourrez recourir à d'autres pouvoirs psychiques."},
            {name: "Perceptions extrasensorielles", descr: "Possibilité de connaître les pensées d'autrui."},
            {name: "Clairvoyance", descr: "Cette faculté permet de voir à travers les tentures un épais brouillard ou de l'eau trouble. Elle ne s'étend pas aux matériaux durs telsque la pierre ou le métal."},
            {name: "Lévitation", descr: "Vous pouvez vous élever à la verticale dans les airs."},
            {name: "Exorcisme", descr: "Ce pouvoir permet de repousser les Fantômes ou les Morts Vivants en neutralisant l'énergie surnaturelle qui les anime."},
        ]
    },
    {
        classe: "Magicien",
        data: [
            {level:  2, force: 6, pouvoir:  8, habilete: 6, endurance:  10, degat: 1, bonus: -1, arme: 'Epée', protection: 2, xp: 0, type: 'Magicien', name: ''},
            {level:  3, force: 6, pouvoir:  8, habilete: 6, endurance:  15, degat: 1, bonus:  0, arme: 'Epée', protection: 2, xp: 0, type: 'Magicien', name: ''},
            {level:  4, force: 7, pouvoir:  8, habilete: 6, endurance:  20, degat: 1, bonus:  1, arme: 'Epée', protection: 2, xp: 0, type: 'Magicien', name: ''},
            {level:  5, force: 7, pouvoir:  8, habilete: 7, endurance:  25, degat: 1, bonus:  2, arme: 'Epée', protection: 2, xp: 0, type: 'Magicien', name: ''},
            {level:  6, force: 7, pouvoir:  8, habilete: 7, endurance:  30, degat: 1, bonus:  3, arme: 'Epée', protection: 2, xp: 0, type: 'Magicien', name: ''},
            {level:  7, force: 7, pouvoir:  8, habilete: 7, endurance:  35, degat: 2, bonus:  1, arme: 'Epée', protection: 2, xp: 0, type: 'Magicien', name: ''},
            {level:  8, force: 8, pouvoir:  9, habilete: 7, endurance:  40, degat: 2, bonus:  2, arme: 'Epée', protection: 2, xp: 0, type: 'Magicien', name: ''},
            {level:  9, force: 8, pouvoir:  9, habilete: 7, endurance:  45, degat: 2, bonus:  3, arme: 'Epée', protection: 2, xp: 0, type: 'Magicien', name: ''},
            {level: 10, force: 8, pouvoir:  9, habilete: 7, endurance:  50, degat: 3, bonus:  0, arme: 'Epée', protection: 2, xp: 0, type: 'Magicien', name: ''},
            {level: 11, force: 8, pouvoir:  9, habilete: 7, endurance:  55, degat: 3, bonus:  1, arme: 'Epée', protection: 2, xp: 0, type: 'Magicien', name: ''},
            {level: 12, force: 8, pouvoir:  9, habilete: 8, endurance:  60, degat: 3, bonus:  2, arme: 'Epée', protection: 2, xp: 0, type: 'Magicien', name: ''},
            {level: 13, force: 8, pouvoir:  9, habilete: 8, endurance:  65, degat: 3, bonus:  3, arme: 'Epée', protection: 2, xp: 0, type: 'Magicien', name: ''},
            {level: 14, force: 8, pouvoir: 10, habilete: 8, endurance:  70, degat: 4, bonus:  0, arme: 'Epée', protection: 2, xp: 0, type: 'Magicien', name: ''},
            {level: 15, force: 9, pouvoir: 10, habilete: 8, endurance:  75, degat: 4, bonus:  1, arme: 'Epée', protection: 2, xp: 0, type: 'Magicien', name: ''},
            {level: 16, force: 9, pouvoir: 10, habilete: 8, endurance:  80, degat: 4, bonus:  2, arme: 'Epée', protection: 2, xp: 0, type: 'Magicien', name: ''},
            {level: 17, force: 9, pouvoir: 10, habilete: 8, endurance:  85, degat: 4, bonus:  3, arme: 'Epée', protection: 2, xp: 0, type: 'Magicien', name: ''},
            {level: 18, force: 9, pouvoir: 10, habilete: 9, endurance:  90, degat: 5, bonus:  0, arme: 'Epée', protection: 2, xp: 0, type: 'Magicien', name: ''},
            {level: 19, force: 9, pouvoir: 10, habilete: 9, endurance:  95, degat: 5, bonus:  1, arme: 'Epée', protection: 2, xp: 0, type: 'Magicien', name: ''},
            {level: 20, force: 9, pouvoir: 11, habilete: 9, endurance: 100, degat: 5, bonus:  2, arme: 'Epée', protection: 2, xp: 0, type: 'Magicien', name: ''},
        ],
        name: "",
        inventaire :{slot1: "",  slot2: "", slot3: "", slot4: "", slot5: "", slot6: "", slot7: "", slot8: "", slot9: "", slot10: ""},
        bourse: 0,
        carquois: null,
        skill: [],
        capacités: [
            {name: "", descr: ""},
            {name: "", descr: ""},
            {name: "", descr: ""},
            {name: "", descr: ""},
            {name: "", descr: ""},
            {name: "", descr: ""},
            {name: "", descr: ""},
            {name: "", descr: ""},
            {name: "", descr: ""},
            {name: "", descr: ""},
            {name: "", descr: ""},
            {name: "", descr: ""},
            {name: "", descr: ""},
            {name: "", descr: ""},
            {name: "", descr: ""},
        ]
    },    
    {
        classe: "Voleur",
        data: [
            {level:  2, force:  7, pouvoir:  6, habilete:  8, endurance:  12, degat: 1, bonus: 0, arme: 'Epée', protection: 2, xp: 0, type: 'Voleur', name: ''},
            {level:  3, force:  7, pouvoir:  6, habilete:  8, endurance:  18, degat: 1, bonus: 1, arme: 'Epée', protection: 2, xp: 0, type: 'Voleur', name: ''},
            {level:  4, force:  7, pouvoir:  7, habilete:  8, endurance:  24, degat: 1, bonus: 2, arme: 'Epée', protection: 2, xp: 0, type: 'Voleur', name: ''},
            {level:  5, force:  7, pouvoir:  7, habilete:  8, endurance:  30, degat: 2, bonus: 0, arme: 'Epée', protection: 2, xp: 0, type: 'Voleur', name: ''},
            {level:  6, force:  7, pouvoir:  7, habilete:  8, endurance:  36, degat: 2, bonus: 1, arme: 'Epée', protection: 2, xp: 0, type: 'Voleur', name: ''},
            {level:  7, force:  7, pouvoir:  7, habilete:  8, endurance:  42, degat: 2, bonus: 2, arme: 'Epée', protection: 2, xp: 0, type: 'Voleur', name: ''},
            {level:  8, force:  8, pouvoir:  7, habilete:  9, endurance:  48, degat: 3, bonus: 0, arme: 'Epée', protection: 2, xp: 0, type: 'Voleur', name: ''},
            {level:  9, force:  8, pouvoir:  9, habilete:  9, endurance:  54, degat: 3, bonus: 1, arme: 'Epée', protection: 2, xp: 0, type: 'Voleur', name: ''},
            {level: 10, force:  8, pouvoir:  9, habilete:  9, endurance:  60, degat: 3, bonus: 2, arme: 'Epée', protection: 2, xp: 0, type: 'Voleur', name: ''},
            {level: 11, force:  8, pouvoir:  9, habilete:  9, endurance:  66, degat: 4, bonus: 0, arme: 'Epée', protection: 2, xp: 0, type: 'Voleur', name: ''},
            {level: 12, force:  8, pouvoir:  9, habilete:  9, endurance:  72, degat: 4, bonus: 1, arme: 'Epée', protection: 2, xp: 0, type: 'Voleur', name: ''},
            {level: 13, force:  8, pouvoir:  9, habilete:  9, endurance:  78, degat: 4, bonus: 2, arme: 'Epée', protection: 2, xp: 0, type: 'Voleur', name: ''},
            {level: 14, force:  9, pouvoir:  9, habilete: 10, endurance:  84, degat: 5, bonus: 0, arme: 'Epée', protection: 2, xp: 0, type: 'Voleur', name: ''},
            {level: 15, force:  9, pouvoir:  9, habilete: 10, endurance:  90, degat: 5, bonus: 1, arme: 'Epée', protection: 2, xp: 0, type: 'Voleur', name: ''},
            {level: 16, force:  9, pouvoir:  9, habilete: 10, endurance:  96, degat: 5, bonus: 2, arme: 'Epée', protection: 2, xp: 0, type: 'Voleur', name: ''},
            {level: 17, force:  9, pouvoir:  9, habilete: 10, endurance: 102, degat: 6, bonus: 0, arme: 'Epée', protection: 2, xp: 0, type: 'Voleur', name: ''},
            {level: 18, force:  9, pouvoir:  9, habilete: 10, endurance: 108, degat: 6, bonus: 1, arme: 'Epée', protection: 2, xp: 0, type: 'Voleur', name: ''},
            {level: 19, force:  9, pouvoir:  9, habilete: 10, endurance: 114, degat: 6, bonus: 2, arme: 'Epée', protection: 2, xp: 0, type: 'Voleur', name: ''},
            {level: 20, force: 10, pouvoir: 10, habilete: 11, endurance: 120, degat: 7, bonus: 0, arme: 'Epée', protection: 2, xp: 0, type: 'Voleur', name: ''},
        ],
        name: "",
        inventaire: {slot1: "baton rouge",  slot2: "emeraude", slot3: "carte", slot4: "un objet au nom super long sa mère !!", slot5: "", slot6: "", slot7: "", slot8: "", slot9: "", slot10: ""},
        bourse: 0,
        carquois: 6,
        skill: ["Esquive", "Tir", "Vivacité"],
        capacités: [
            {name: "Esquive", descr: "Votre agilité et votre souplesse vous ont rendu maître dans l'art de l'esquive.Chaque fois qu\'un adversaire tente de vous frapper, il doit jeter 2 dés + 1 au lieu des deux dés habituels."},
            {name: "Tir", descr: "Tant que vous possédez votre arc et vos flèches, vous pouvez choisir le tir lors des combats. Pour cela, vous n'avez pas besoin de vous trouver dans une case adjacente à celle de l'ennemi pour l'atteindre. Pour le toucher, vous devez obtenir un résultat inférieur ou égal à votre total d'HABILETÉ avec deux dés. Dommage de 1 dé (moins la Protection)."},
            {name: "Vivacité", descr: "Lors d'un affrontement, vous pouvez tenter deux actions dans le même Assaut (mais une seule fois par combat). La première action estentreprise au début de l'Assaut, en fonction de votre total d'HABILETÉ. Vous pouvez agir une deuxième fois, en fin d'Assaut, lorsque votre adversaire a épuisé ses possibilités d'action (ce qui vous permet de fuir sans risques en cours d'affrontement)."},
        ]
    },
]

