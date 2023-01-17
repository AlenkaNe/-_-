let entities = [{
    img: "images/phon-2.jpg",
    title: "Rostov-on-Don, Admiral"
  }, {
    img: "images/phon-2-slider(1).jpg",
    title: "Sochi Thieves"
  }, {
    img: "images/phon-2-slider(2).jpg",
    title: "Rostov-on-Don Patriotic"
  }, 
];
// function initSlider() {
//     if(!images || !images.length) return; //если images нет или пуст, то выходим из функции

    // let sliderImages = document.querySelector(".slider__images");
    // let sliderArrows = document.querySelector(".slider__arrows");

//     initImages();
//     initArrows();

//     function initImages() {
//         images.forEach((image, index) => {
//             let imageDiv = `<div class="image n${index} ${index === 0? "active": ""}" style = "background-image: url(${images[index].src});"></div>`;
//             sliderImages.innerHTML += imageDiv;
//         });
//     }
// }
// document.addEventListener("DOMContentLoaded", initSlider);

const title = document.querySelector('.a-text')
const img = document.querySelector('.phon-2')

const setEntity = (index) => {
  title.innerText = entities[index].a-text
  img.style.backgroundImage = `url(${entities[index].phon-2})`
}

const slider__arrow__left = document.querySelector('.slider__arrow__left')
const slider__arrow__right = document.querySelector('.slider__arrow__right')
let currentIndex = 0

slider__arrow__left.addEventListener('click', () => {
  setEntity(currentIndex - 1);
  currentIndex -= 1;
})
slider__arrow__right.addEventListener('click', () => {
  setEntity(currentIndex + 1);
  currentIndex += 1;
})