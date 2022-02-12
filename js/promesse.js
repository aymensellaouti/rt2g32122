let accountCredit = 5;
const rendreArgentPromesse = new Promise(
    (resolve, reject) => {
        setTimeout(
            () => {
                if (accountCredit >= 10) {
                    resolve(10);
                } else {
                    reject('Inchallah ejjem3a ejjaya :)');
                }
            },
            2500
        )
    }
);

rendreArgentPromesse.then(
    () => {
        console.log('Merci');
    }
).catch(
    (e) => {
        console.log('Kol jem3a '+ e);
    }
)
