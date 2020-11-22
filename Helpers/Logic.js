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
    
    var Epée = {type: "arme", usableInFight: false, name: "Epée", use: 0, degat: "", prix: "", descr: "Une epée de base", action: null};
    var Bâton = {type: "arme", usableInFight: false, name: "Bâton", use: 0, degat: "", prix: "", descr: "Un bâton de base", action: null};
    var Côte = {type: "armure", usableInFight: false, name: "Côte de maille", use: 3, degat: "", prix: "", descr: "Une protection de base", action: null};
    var Annelée = {type: "armure", usableInFight: false, name: "Côte annelée", use: 2, degat: "", prix: "", descr: "Une protection de base", action: null};
    var Cuir = {type: "armure", usableInFight: false, name: "Armure en cuir clouté", use: 2, degat: "", prix: "", descr: "Une protection de base", action: null};
    var Bourse = {type: "objet", usableInFight: false, name: "Bourse", use: lvl*5, degat: "", prix: "", descr: "Une bourse qui contient vos pièces d'or", action: null};
    var Arc = {type: "objet", usableInFight: false, name: "Arc", use: 0, degat: "", prix: "", descr: "Une arme de base", action: null};
    var Carquois = {type: "objet", usableInFight: false, name: "Carquois", use: 6, degat: "", prix: "", descr: "", action: null};

    var equip = [Bourse];

    if (classe === 'Chevalier') {equip = [...equip, Epée, Côte]};
    if (classe === 'Voleur') {equip = [...equip, Epée, Cuir, Arc, Carquois]};
    if (classe === 'Prêtre') {equip = [...equip, Bâton, Annelée, Arc, Carquois]};
    if (classe === 'Magicien') {equip = [...equip, Epée, Annelée]};

    return equip;
}
