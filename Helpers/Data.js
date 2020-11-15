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

export const Chevalier = [
    {level: 2, force: 8, pouvoir: 6, habilete: 6, endurance: 12, degat: 1, bonus: 1, xp: 0, protection: 3}
]

export const baseCarac = {
    'Chevalier' : [
        {level: 2, force: 8, pouvoir: 6, habilete: 6, endurance: 12, degat: 1, bonus: 1, xp: 0, protection: 3},
        {level: 3, force: 8, pouvoir: 6, habilete: 6, endurance: 18, degat: 1, bonus: 2, xp: 0, protection: 3},
        {level: 4, force: 8, pouvoir: 6, habilete: 7, endurance: 24, degat: 2, bonus: 0, xp: 0, protection: 3},
        {level: 8, force: 8, pouvoir: 7, habilete: 7, endurance: 48, degat: 3, bonus: 1, xp: 0, protection: 3},
    ],
    'Prêtre': [
        {level: 2, force: 7, pouvoir: 7, habilete: 6, endurance: 10, degat: 1, bonus: 0, xp: 0, protection: 2},
        {level: 3, force: 7, pouvoir: 7, habilete: 6, endurance: 15, degat: 1, bonus: 1, xp: 0, protection: 2},
        {level: 4, force: 7, pouvoir: 8, habilete: 7, endurance: 20, degat: 1, bonus: 2, xp: 0, protection: 2},
        {level: 8, force: 8, pouvoir: 8, habilete: 7, endurance: 40, degat: 3, bonus: 0, xp: 0, protection: 2},
    ],
    'Magicien': [
        {level: 2, force: 6, pouvoir: 8, habilete: 6, endurance: 10, degat: 1, bonus: -1, xp: 0, protection: 2},
        {level: 3, force: 6, pouvoir: 8, habilete: 6, endurance: 15, degat: 1, bonus: 0, xp: 0, protection: 2},
        {level: 4, force: 7, pouvoir: 8, habilete: 6, endurance: 20, degat: 1, bonus: 1, xp: 0, protection: 2},
        {level: 8, force: 7, pouvoir: 9, habilete: 7, endurance: 40, degat: 2, bonus: 2, xp: 0, protection: 2},
    ],
    'Voleur': [
        {level: 2, force: 7, pouvoir: 6, habilete: 8, endurance: 12, degat: 1, bonus: 0, xp: 0, protection: 2},
        {level: 3, force: 7, pouvoir: 6, habilete: 8, endurance: 18, degat: 1, bonus: 1, xp: 0, protection: 2},
        {level: 4, force: 7, pouvoir: 7, habilete: 8, endurance: 24, degat: 1, bonus: 2, xp: 0, protection: 2},
        {level: 8, force: 8, pouvoir: 7, habilete: 9, endurance: 48, degat: 3, bonus: 0, xp: 0, protection: 2},
    ]
}