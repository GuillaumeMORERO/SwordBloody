export const sizes = [
    12, 15, 18, 20
]

export const typo = [
    'Texturina', 'Roboto', 'Tangerine'
]

export const classes = [
    {id: 1, type: 'Warrior', name: 'Chevalier'},
    {id: 2, type: 'Sage', name: 'Prêtre'},
    {id: 3, type: 'Enchanter', name: 'Magicien'},
    {id: 4, type: 'Trickster', name: 'Voleur'},
 ]

export const books = [
    {id: 1, title: 'Les Treize Mages'},
    {id: 2, title: 'Le Maître des Rêves'},
    {id: 3, title: 'Le Port des Assassins'},
    {id: 4, title: 'L\' Impossible Mission'},
    {id: 5, title: 'Les Murailles de Spyte'}
] 

export const ranks = [
    {'level':  2, 'points':  250},
    {'level':  3, 'points':  500},
    {'level':  4, 'points':  750},
    {'level':  5, 'points': 1000},
    {'level':  6, 'points': 1250},
    {'level':  7, 'points': 1500},
    {'level':  8, 'points': 1750},
    {'level':  9, 'points': 2000},
    {'level': 10, 'points': 2250},
    {'level': 11, 'points': 2500},
    {'level': 12, 'points': 2750},
    {'level': 13, 'points': 3000},
    {'level': 14, 'points': 3250},
    {'level': 15, 'points': 3500},
    {'level': 16, 'points': 3750},
    {'level': 17, 'points': 4000},
    {'level': 18, 'points': 4250},
    {'level': 19, 'points': 4500},
    {'level': 20, 'points': 5000},
]

export const database = [
    { //persoData
        id: 1,
        classe: "Chevalier",
        name: "",
        level: "",
        oldLevel: 0,
        xp: 0,
        protection: 0,
        arme: true,
        carac: [ //dataByLvl
            {level:  2, force:  8, pouvoir: 6, habilete: 6, endurance:  12, dommage: 1, bonus: 1,},
            {level:  3, force:  8, pouvoir: 6, habilete: 6, endurance:  18, dommage: 1, bonus: 2,},
            {level:  4, force:  8, pouvoir: 6, habilete: 7, endurance:  24, dommage: 2, bonus: 0,},
            {level:  5, force:  8, pouvoir: 6, habilete: 7, endurance:  30, dommage: 2, bonus: 1,},
            {level:  6, force:  8, pouvoir: 6, habilete: 7, endurance:  36, dommage: 2, bonus: 2,},
            {level:  7, force:  8, pouvoir: 6, habilete: 7, endurance:  42, dommage: 3, bonus: 0,},
            {level:  8, force:  8, pouvoir: 7, habilete: 7, endurance:  48, dommage: 3, bonus: 1,},
            {level:  9, force:  9, pouvoir: 7, habilete: 7, endurance:  54, dommage: 3, bonus: 2,},
            {level: 10, force:  9, pouvoir: 7, habilete: 7, endurance:  60, dommage: 4, bonus: 0,},
            {level: 11, force:  9, pouvoir: 7, habilete: 7, endurance:  66, dommage: 4, bonus: 1,},
            {level: 12, force:  9, pouvoir: 7, habilete: 7, endurance:  72, dommage: 4, bonus: 2,},
            {level: 13, force:  9, pouvoir: 7, habilete: 8, endurance:  78, dommage: 5, bonus: 0,},
            {level: 14, force: 10, pouvoir: 8, habilete: 8, endurance:  84, dommage: 5, bonus: 1,},
            {level: 15, force: 10, pouvoir: 8, habilete: 8, endurance:  90, dommage: 5, bonus: 2,},
            {level: 16, force: 10, pouvoir: 8, habilete: 8, endurance:  96, dommage: 6, bonus: 0,},
            {level: 17, force: 10, pouvoir: 8, habilete: 8, endurance: 102, dommage: 6, bonus: 1,},
            {level: 18, force: 10, pouvoir: 8, habilete: 8, endurance: 108, dommage: 6, bonus: 2,},
            {level: 19, force: 10, pouvoir: 8, habilete: 8, endurance: 114, dommage: 7, bonus: 0,},
            {level: 20, force: 10, pouvoir: 8, habilete: 9, endurance: 120, dommage: 7, bonus: 1,},
        ],
        actualCarac: {force: 0, pouvoir: 0, habilete: 0, endurance: 0, dommage: 0, bonus: 0},
        inventaire :[],
        skills: [
            {skillID: 1, usableInFight: false},
            {skillID: 2, usableInFight: false},
        ]
    },
    {
        id: 2,
        classe: "Prêtre",
        name: "",
        level: "",
        oldLevel: 0,
        xp: 0,
        protection: 0,
        arme: true,
        carac: [
            {level:  2, force:  7, pouvoir:  7, habilete:  6, endurance:  10, dommage: 1, bonus: 0},
            {level:  3, force:  7, pouvoir:  7, habilete:  6, endurance:  15, dommage: 1, bonus: 1},
            {level:  4, force:  7, pouvoir:  8, habilete:  7, endurance:  20, dommage: 1, bonus: 2},
            {level:  5, force:  7, pouvoir:  8, habilete:  7, endurance:  25, dommage: 2, bonus: 0},
            {level:  6, force:  7, pouvoir:  8, habilete:  7, endurance:  30, dommage: 2, bonus: 1},
            {level:  7, force:  7, pouvoir:  8, habilete:  7, endurance:  35, dommage: 2, bonus: 2},
            {level:  8, force:  8, pouvoir:  8, habilete:  7, endurance:  40, dommage: 3, bonus: 0},
            {level:  9, force:  8, pouvoir:  8, habilete:  7, endurance:  45, dommage: 3, bonus: 1},
            {level: 10, force:  8, pouvoir:  8, habilete:  7, endurance:  50, dommage: 3, bonus: 2},
            {level: 11, force:  8, pouvoir:  8, habilete:  7, endurance:  55, dommage: 4, bonus: 0},
            {level: 12, force:  8, pouvoir:  9, habilete:  8, endurance:  60, dommage: 4, bonus: 1},
            {level: 13, force:  8, pouvoir:  9, habilete:  8, endurance:  65, dommage: 4, bonus: 2},
            {level: 14, force:  9, pouvoir:  9, habilete:  8, endurance:  70, dommage: 5, bonus: 0},
            {level: 15, force:  9, pouvoir:  9, habilete:  8, endurance:  75, dommage: 5, bonus: 1},
            {level: 16, force:  9, pouvoir: 10, habilete:  9, endurance:  80, dommage: 5, bonus: 2},
            {level: 17, force:  9, pouvoir: 10, habilete:  9, endurance:  85, dommage: 6, bonus: 0},
            {level: 18, force:  9, pouvoir: 10, habilete:  9, endurance:  90, dommage: 6, bonus: 1},
            {level: 19, force:  9, pouvoir: 10, habilete:  9, endurance:  95, dommage: 6, bonus: 2},
            {level: 20, force: 10, pouvoir: 10, habilete: 10, endurance: 100, dommage: 7, bonus: 0},
        ],
        actualCarac: {force: 0, pouvoir: 0, habilete: 0, endurance: 0, dommage: 0, bonus: 0},
        inventaire :[],
        skills: [
            {skillID: 1, usableInFight: true},
            {skillID: 2, usableInFight: true},
            {skillID: 3, usableInFight: false},
            {skillID: 4, usableInFight: false},
            {skillID: 5, usableInFight: false},
            {skillID: 6, usableInFight: false},
            {skillID: 7, usableInFight: false},
        ]
    },
    {
        id: 3,
        classe: "Magicien",
        name: "",
        level: "",
        oldLevel: 0,
        xp: 0,
        protection: 0,
        arme: true,
        carac: [
            {level:  2, force: 6, pouvoir:  8, habilete: 6, endurance:  10, dommage: 1, bonus: -1},
            {level:  3, force: 6, pouvoir:  8, habilete: 6, endurance:  15, dommage: 1, bonus:  0},
            {level:  4, force: 7, pouvoir:  8, habilete: 6, endurance:  20, dommage: 1, bonus:  1},
            {level:  5, force: 7, pouvoir:  8, habilete: 7, endurance:  25, dommage: 1, bonus:  2},
            {level:  6, force: 7, pouvoir:  8, habilete: 7, endurance:  30, dommage: 1, bonus:  3},
            {level:  7, force: 7, pouvoir:  8, habilete: 7, endurance:  35, dommage: 2, bonus:  1},
            {level:  8, force: 8, pouvoir:  9, habilete: 7, endurance:  40, dommage: 2, bonus:  2},
            {level:  9, force: 8, pouvoir:  9, habilete: 7, endurance:  45, dommage: 2, bonus:  3},
            {level: 10, force: 8, pouvoir:  9, habilete: 7, endurance:  50, dommage: 3, bonus:  0},
            {level: 11, force: 8, pouvoir:  9, habilete: 7, endurance:  55, dommage: 3, bonus:  1},
            {level: 12, force: 8, pouvoir:  9, habilete: 8, endurance:  60, dommage: 3, bonus:  2},
            {level: 13, force: 8, pouvoir:  9, habilete: 8, endurance:  65, dommage: 3, bonus:  3},
            {level: 14, force: 8, pouvoir: 10, habilete: 8, endurance:  70, dommage: 4, bonus:  0},
            {level: 15, force: 9, pouvoir: 10, habilete: 8, endurance:  75, dommage: 4, bonus:  1},
            {level: 16, force: 9, pouvoir: 10, habilete: 8, endurance:  80, dommage: 4, bonus:  2},
            {level: 17, force: 9, pouvoir: 10, habilete: 8, endurance:  85, dommage: 4, bonus:  3},
            {level: 18, force: 9, pouvoir: 10, habilete: 9, endurance:  90, dommage: 5, bonus:  0},
            {level: 19, force: 9, pouvoir: 10, habilete: 9, endurance:  95, dommage: 5, bonus:  1},
            {level: 20, force: 9, pouvoir: 11, habilete: 9, endurance: 100, dommage: 5, bonus:  2},
        ],
        actualCarac: {force: 0, pouvoir: 0, habilete: 0, endurance: 0, dommage: 0, bonus: 0},
        inventaire :[],
        skills: [
            {skillID: 1, usableInFight: true, level: 1},
            {skillID: 2, usableInFight: true, level: 1},
            {skillID: 3, usableInFight: true, level: 1},
            {skillID: 4, usableInFight: true, level: 2},
            {skillID: 5, usableInFight: true, level: 2},
            {skillID: 6, usableInFight: true, level: 2},
            {skillID: 7, usableInFight: true, level: 2},
            {skillID: 8, usableInFight: true, level: 3},
            {skillID: 9, usableInFight: true, level: 4},
            {skillID: 10, usableInFight: true, level: 4},
            {skillID: 11, usableInFight: true, level: 5},
            {skillID: 12, usableInFight: true, level: 5},
            {skillID: 13, usableInFight: false},
            {skillID: 14, usableInFight: false},
            {skillID: 15, usableInFight: false},
        ]
    },    
    {
        id: 4,
        classe: "Voleur",
        name: "",
        level: "",
        oldLevel: 0,
        xp: 0,
        protection: 0,
        arme: true,
        carac: [
            {level:  2, force:  7, pouvoir:  6, habilete:  8, endurance:  12, dommage: 1, bonus: 0},
            {level:  3, force:  7, pouvoir:  6, habilete:  8, endurance:  18, dommage: 1, bonus: 1},
            {level:  4, force:  7, pouvoir:  7, habilete:  8, endurance:  24, dommage: 1, bonus: 2},
            {level:  5, force:  7, pouvoir:  7, habilete:  8, endurance:  30, dommage: 2, bonus: 0},
            {level:  6, force:  7, pouvoir:  7, habilete:  8, endurance:  36, dommage: 2, bonus: 1},
            {level:  7, force:  7, pouvoir:  7, habilete:  8, endurance:  42, dommage: 2, bonus: 2},
            {level:  8, force:  8, pouvoir:  7, habilete:  9, endurance:  48, dommage: 3, bonus: 0},
            {level:  9, force:  8, pouvoir:  9, habilete:  9, endurance:  54, dommage: 3, bonus: 1},
            {level: 10, force:  8, pouvoir:  9, habilete:  9, endurance:  60, dommage: 3, bonus: 2},
            {level: 11, force:  8, pouvoir:  9, habilete:  9, endurance:  66, dommage: 4, bonus: 0},
            {level: 12, force:  8, pouvoir:  9, habilete:  9, endurance:  72, dommage: 4, bonus: 1},
            {level: 13, force:  8, pouvoir:  9, habilete:  9, endurance:  78, dommage: 4, bonus: 2},
            {level: 14, force:  9, pouvoir:  9, habilete: 10, endurance:  84, dommage: 5, bonus: 0},
            {level: 15, force:  9, pouvoir:  9, habilete: 10, endurance:  90, dommage: 5, bonus: 1},
            {level: 16, force:  9, pouvoir:  9, habilete: 10, endurance:  96, dommage: 5, bonus: 2},
            {level: 17, force:  9, pouvoir:  9, habilete: 10, endurance: 102, dommage: 6, bonus: 0},
            {level: 18, force:  9, pouvoir:  9, habilete: 10, endurance: 108, dommage: 6, bonus: 1},
            {level: 19, force:  9, pouvoir:  9, habilete: 10, endurance: 114, dommage: 6, bonus: 2},
            {level: 20, force: 10, pouvoir: 10, habilete: 11, endurance: 120, dommage: 7, bonus: 0},
        ],
        actualCarac: {force: 0, pouvoir: 0, habilete: 0, endurance: 0, dommage: 0, bonus: 0},
        inventaire: [],
        skills: [
            {skillID: 1, usableInFight: true},
            {skillID: 2, usableInFight: true},
            {skillID: 3, usableInFight: true},
        ]
    },
]

// objet : type nom, use(int), dommage, prix, descr, action
// utilisation d'une fct dans un objet :
// Foo = {
//     bar: function() {
//         alert("baz");
//     }   
// }
// en faisant Foo.bar()
//exemple = {type:"objet", name: "bourse", use: 0, dommage: "", prix: "", descr: "une bourse qui contient vos pièces d'or", action: null}
// autre_exemple = {
//     type:"armure", name: "Côte de maille", use: 3, dommage: "", prix: "", descr: "Une protection de base pour les Chevaliers", 
//     action: function() {
//         return Perso.protection = 3; 
//     }
// }