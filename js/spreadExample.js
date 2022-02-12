array = [14,22,58,66,33,5,9];
const somme = (y,...args) => {
    let som = 0;
    for (let i=0; i< args.length; i++) {
        som+= args[i];
    }
    return som;
}
console.log(somme(1, ...array));


let user = {
    name: 'sellaouti',
    firstname: 'aymen',
    age: 39,
    job: 'teacher'
}

updateUser = {
    age: 29,
    job: 'rien'
}

user = {...user, ...updateUser};
console.log(user);
const cloneUser = {...user};
