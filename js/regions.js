const regions = [
    'Tunis',
    'Djerba',
    'Sidi Bouzid',
    'Sfax',
    'Sousse',
    'Mednine',
    'Bizerte',
    'Mahdia'
];

/*
* 1- Sélectionner l'element que je vais manipuler
* 2- Chaque x ms j'ajoute un li par élément de tableau
* 3- Si j arrive a la fin du tableau je réinitialise
* */

const ol = document.querySelector('ol');
const div = document.querySelector('div');
function iteratOnContainer(container, tag, timer, iterator) {
    let i = 0;
    setInterval(
    () => {
        if (i < iterator.length) {
            let newElement = `<${tag}>
                        ${iterator[i++]} 
                     </${tag}>`;
            // let li1 = "<li>"+regions[i++]+"</li>";
            container.innerHTML += newElement;
        }
        else {
           i = 0;
            container.innerHTML = '';
        }
    },
    timer
);
}

iteratOnContainer(ol, 'li', 1000, regions);
iteratOnContainer(div, 'span', 500, regions);
