export const book_1 = [
    {type: "arme", usableInFight: false, name: "Epée", use: 0, dommage: "", prix: "", descr: "Une epée de base", id: random(1, 10000), action: null }
],

export const random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
};