var carousel = document.getElementById('carousel');

for(let i = 1; i <= 10; i++) {
    let div = document.createElement('div');
    let img = document.createElement('img');
    img.classList.add('box-movie');
    img.src = `assets/carousel/img${i}.jpg`;
    div.classList.add('item');
    div.append(img);
    carousel.append(div);
}