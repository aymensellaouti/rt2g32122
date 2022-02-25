// alert('cc je suis la');

const div = document.querySelector('div');

setInterval(
    () => {
        div.classList.toggle('allume')
    },
    1500
)
