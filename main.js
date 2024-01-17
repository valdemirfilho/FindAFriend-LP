const slides = document.querySelectorAll('.carousel__slide')

let i = 0
const number_of_slides = 3
const max = number_of_slides - 1

// setInterval(() => {
//   scrollToSlide(i)
//   if (i >= slides.length - 1) i = -1
//   i++
// }, 2000)

const btn_next = document.querySelector('.carousel__next')
const btn_prev = document.querySelector('.carousel__prev')

btn_next.onclick = () => {
  if (i >= max) i = -1
  scrollToSlide(++i)
}

btn_prev.onclick = () => {
  if (i <= 0) i = number_of_slides
  scrollToSlide(--i)
}

const carousel = document.querySelector('.carousel__viewport')

function scrollToSlide(slideIndex) {
  slides[slideIndex].scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center"
  })
}
