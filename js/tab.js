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
console.log(array.reduce(
    (som, actualInt) => som + actualInt
))

const o = {
    m(x) {
        console.log(x);
    }
}
o['m'](2);

(function(w) {
    console.log(w);})(5);
(x =  (a, b) => a+b )(3,4);
x(5,6);
