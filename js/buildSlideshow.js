// Check locale
let locale
if (window.location.pathname.includes('en')) {
  locale = 'en'
} else {
  locale = 'fr'
}

// Build the slideshow by a function
export function buildSlideshow(divId, library) {
  // Define the parent element 'carousel div'
  let parentElement = document.getElementById(divId)

  // Create the carousel div inner
  let carouselInner = document.createElement('div')
  carouselInner.classList.add('carousel-inner')

  // Create the carousel control previous button
  let carouselPrevious = document.createElement('button')
  carouselPrevious.classList.add('carousel-control-prev')
  carouselPrevious.setAttribute('type', 'button')
  carouselPrevious.setAttribute('data-bs-target', `#${divId}`)
  carouselPrevious.setAttribute('data-bs-slide', 'prev')

  let previousSpan = document.createElement('span')
  previousSpan.classList.add('carousel-control-prev-icon')
  previousSpan.setAttribute('aria-hidden', 'true')

  let previousSpan2 = document.createElement('span')
  previousSpan2.classList.add('visually-hidden')
  previousSpan2.textContent = 'Previous'

  // Create the carousel control next button
  let carouselNext = document.createElement('button')
  carouselNext.classList.add('carousel-control-next')
  carouselNext.setAttribute('type', 'button')
  carouselNext.setAttribute('data-bs-target', `#${divId}`)
  carouselNext.setAttribute('data-bs-slide', 'next')

  let nextSpan = document.createElement('span')
  nextSpan.classList.add('carousel-control-next-icon')
  nextSpan.setAttribute('aria-hidden', 'true')

  let nextSpan2 = document.createElement('span')
  nextSpan2.classList.add('visually-hidden')
  nextSpan2.textContent = 'Next'

  // Initiate the carousel items
  let carouselItem

  // We need an index beacause first carousel item must be active
  let index = 0

  // Loop through the library to create the carousel items and add it to the carousel inner
  for(let item in library) {
    carouselItem = document.createElement('div')
    carouselItem.classList.add('carousel-item', 'text-center')
  
    let image = document.createElement('img')
    image.setAttribute('src', library[item].imageUrl)
    image.setAttribute('alt', library[item]['name'][locale])
    image.style.maxWidth = '100%'
    image.style.maxHeight = '80vh'

    if (index === 0) {
      carouselItem.classList.add('active')
    }

    carouselInner.insertAdjacentElement('beforeend', carouselItem)
    carouselItem.insertAdjacentElement('beforeend', image)
    index++
  }

  // Add the carousel inner to the parent element
  // And button control
  parentElement.insertAdjacentElement('beforeend', carouselInner)
  carouselInner.insertAdjacentElement('beforeend', carouselPrevious)
  carouselPrevious.insertAdjacentElement('beforeend', previousSpan)
  carouselPrevious.insertAdjacentElement('beforeend', previousSpan2)
  carouselInner.insertAdjacentElement('beforeend', carouselNext)
  carouselNext.insertAdjacentElement('beforeend', nextSpan)
  carouselNext.insertAdjacentElement('beforeend', nextSpan2)
}
