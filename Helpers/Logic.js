export const slugger = (number) => {
    switch(number) {
        case 1 : return 'un'
        case 2 : return 'deux'
        case 3 : return 'trois'
        case 4 : return 'quatre'
    }
};

export const BaseLvlCharac = (nbr, book) => {
    switch (book) {
        case 'Les Treize Mages': {return Math.ceil(8 / nbr);};
        case 'Le Maître des Rêves': {return Math.ceil(8 / nbr);};
        case 'Le Port des Assassins': {return Math.floor(16 / nbr);};
        case 'L\' Impossible Mission': {return Math.ceil(20 / nbr);};
        case 'Les Murailles de Spyte': {
            //return Math.floor((20 / nbr)+2);
            if (nbr === 1) {return 20;}
            else { return (24/nbr)} 
        };
    }
};

export const baseEquip = (classe, lvl) => {
    
    var Epée = {type: "arme", name: "Epée", use: 0, usable: false, descr: "Une epée de base", id: `arme_${random(1, 10000)}`};
    var Bâton = {type: "arme", name: "Bâton", use: 0, usable: false, descr: "Un bâton de base", id: `arme_${random(1, 10000)}`};
    var Côte = {type: "armure", name: "Côte de maille", use: 3, usable: false, descr: "Une protection de base", id: `armure_${random(1, 10000)}`};
    var Annelée = {type: "armure", name: "Côte annelée", use: 2, usable: false, descr: "Une protection de base", id: `armure_${random(1, 10000)}`};
    var Cuir = {type: "armure", name: "Armure en cuir clouté", use: 2, usable: false, descr: "Une protection de base", id: `armure_${random(1, 10000)}`};
    var Bourse = {type: "objet", name: "Bourse", use: lvl*5, usable: true, descr: "Une bourse qui contient vos pièces d'or", id: `objet_${random(1, 10000)}`};
    var Arc = {type: "objet", name: "Arc", use: 0, usable: false, descr: "Une arme de base", id: `objet_${random(1, 10000)}`};
    var Carquois = {type: "objet", name: "Carquois", use: 6, usable: true, descr: "Contient vos flèches, pour un maximum de six.", id: `objet_${random(1, 10000)}`};

    var equip = [Bourse];

    if (classe === 'Chevalier') {equip = [...equip, Epée, Côte]};
    if (classe === 'Voleur') {equip = [...equip, Epée, Cuir, Arc, Carquois]};
    if (classe === 'Prêtre') {equip = [...equip, Bâton, Annelée, Arc, Carquois]};
    if (classe === 'Magicien') {equip = [...equip, Epée, Annelée]};

    return equip;
};

export const random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
};

export const listGenerator = (min, max) => {
    let list = [];
    for (let i = 0; i < (max * 2) + 1; i++) {
        list.push({ 'key': i, 'value': min++ });
    }
    return list
}
