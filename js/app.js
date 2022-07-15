const images = [
    "img/img-01.webp",
    "img/img-02.webp",
    "img/img-03.webp",
    "img/img-04.webp",
    "img/img-05.webp",
]

const slide_Wrapper = document.getElementById('slideWrapper');
console.log(slideWrapper);

const list_Slider = []
console.log(list_Slider);

const controls = document.querySelector('.controls');

const list_Mini_Slide = []

let current_Index = 0;

const prev = document.getElementById('prev');

const next = document.getElementById('next');

for (let i = 0; i < images.length; i++) {

    const slider = document.createElement('div');
    slider.classList.add("col-10");
    slider.classList.add("item");
    slider.innerHTML = ` <img class="img-fluid" src="${ images[i] }" alt="">`
    list_Slider.push(slider);
    slide_Wrapper.append(slider)

    const mini_Slide = document.createElement('div');
    mini_Slide.classList.add("img-wrapper");
    mini_Slide.classList.add("col");
    mini_Slide.innerHTML = ` <img src="${ images[i] }" alt="">`
    list_Mini_Slide.push(mini_Slide);
    controls.append(mini_Slide);

    mini_Slide.addEventListener('click', function() {
        list_Slider[current_Index].classList.remove("active")
        current_Index = i
        list_Slider[current_Index].classList.add("active")
    })

}

prev.addEventListener("click", function() {

    if ( current_Index > 0) {
        list_Slider[current_Index].classList.remove("active")
        current_Index--
        list_Slider[current_Index].classList.add("active")
    } else {
        list_Slider[current_Index].classList.remove("active")
        current_Index = images.length - 1
        list_Slider[current_Index].classList.add("active")
    }

})

next.addEventListener("click", function() {

    if ( current_Index < images.length - 1) {
        list_Slider[current_Index].classList.remove("active")
        current_Index++
        list_Slider[current_Index].classList.add("active")
    } else {
        list_Slider[current_Index].classList.remove("active")
        current_Index = 0
        list_Slider[current_Index].classList.add("active")
    }

})

list_Slider[current_Index].classList.add("active")