array = [1,11,2,3,4,22,31];

// array.forEach(
//     (valeur, indice, leTableau) => {
//         console.log(leTableau);
//         console.log(`L element d'indice ${indice} est égale à ${valeur}`)
//     }
// )
function compareInteger(a,b) {
    return a-b;
}
console.log(array.sort(compareInteger));
