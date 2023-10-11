const say = () => {
    console.log('Я учу JavaScript!');
}
say();

const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');
const img = document.querySelector('#img');

const changeImg = (src) => {
    img.src = src;
}

btnNext.addEventListener('click', () => {
    changeImg("./assets/img/cat2.jpg")
})
btnPrev.addEventListener('click', () => {
    changeImg("./assets/img/cat1.jpg")
})

