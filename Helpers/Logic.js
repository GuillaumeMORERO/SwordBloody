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
        case 'Les Murailles de Spyte': {return Math.floor((20 / nbr)+2);};
    }
};
