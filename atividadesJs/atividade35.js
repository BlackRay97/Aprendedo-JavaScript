function comparaString(string1, string2) {
    return string1.toUpperCase() === string2.toUpperCase();
}

console.log(comparaString('Uva', 'uva'));
console.log(comparaString('Uva', 'pera'));
console.log(comparaString('UVA', 'uva'));