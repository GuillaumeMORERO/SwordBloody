export const book_1 = [
    {type: "objet", name: "Anneau de Rubis", use: 0, usable: false, descr: "", id: `objet_${random(1, 10000)}` }
],

export const random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
};