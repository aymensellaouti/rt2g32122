// setTimeout(
//     function () { console.log('cc je suis dans le timeout');},
//     2000
// );
console.log('cc RT2 G3');
counter = 5;
idInterval = setInterval(
    function () {
        if(counter > 0) {
            console.log(counter--);
        } else {
            console.log('BOOM !!!!');
            clearInterval(idInterval);
        }
    },
    1000
);
