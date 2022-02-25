function createImage(src, width, heigth, alt) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.width = width;
    img.height = heigth;
    return img;
}

setTimeout(
    () => {
        const body = document.querySelector('body');
        body.insertBefore(
            createImage('images/techwall.png', 50, 50, 'aymen'),
            body.firstChild
        );
    },
    2000
)
