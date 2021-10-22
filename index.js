const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click',() => {
        clearActivecClasses()

        slide.classList.add('active')
    })
}

function clearActivecClasses() {
    slides.forEach((slide) => { 
        slide.classList.remove('active')
    })
}