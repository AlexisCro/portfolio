import * as iceland from './icelandLibrary.js'
export let libraryIceland = iceland.object
let locale
if (window.location.pathname.includes('en')) {
  locale = 'en'
} else {
  locale = 'fr'
}

export function displayCard(divId, library) {
  let parentElement = document.getElementById(divId)

  for(let item in library) {
    let card = document.createElement('div')
    card.classList.add('card', 'flex-shrink-1')
    card.style.width = '20rem'

    let image = document.createElement('img')
    image.setAttribute('src', library[item].imageUrl)
    image.setAttribute('alt', library[item]['name'][locale])
    image.style.maxHeight = '180px'
    image.style.objectFit = 'cover'

    let cardBody = document.createElement('div')
    cardBody.classList.add('card-body', 'bg-black', 'text-center')
    cardBody.style.height = '100px'

    let cardTitle = document.createElement('h4')
    cardTitle.classList.add('text-white')
    cardTitle.textContent = library[item]['name'][locale]

    let button = document.createElement('button')
    button.classList.add('btn', 'btn-modal-card', 'w-100', 'h-100')
    button.setAttribute('type', 'button') 
    button.setAttribute('data-bs-toggle', 'modal')
    button.setAttribute('data-bs-target', `#zoom-${library[item]['name'][locale].replaceAll(' ', '_')}`)

    let icon = document.createElement('i')
    icon.classList.add('fa-regular', 'fa-eye')

    parentElement.insertAdjacentElement('beforeend', card)
    card.insertAdjacentElement('beforeend', image)
    card.insertAdjacentElement('beforeend', cardBody)
    cardBody.insertAdjacentElement('beforeend', cardTitle)
    card.insertAdjacentElement('beforeend', button)
    button.insertAdjacentElement('beforeend', icon)
    createModal(divId, library[item])
  }
}

function createModal(divId, item) {
  let parentElement = document.getElementById(divId)

  let modal = document.createElement('div')
  modal.classList.add('modal', 'fade')
  modal.setAttribute('id', `zoom-${item['name'][locale].replaceAll(' ', '_')}`)
  modal.setAttribute('tabindex', '-1')
  modal.setAttribute('aria-labelledby', 'portfolioModalLabel')
  modal.setAttribute('aria-hidden', 'true')

  let modalDialog = document.createElement('div')
  modalDialog.classList.add('modal-dialog', 'd-flex', 'justify-content-center', 'align-items-center')

  let modalContent = document.createElement('div')
  modalContent.classList.add('modal-content')

  let modalBody = document.createElement('div')
  modalBody.classList.add('modal-body', 'pt-0')
  modalBody.style.maxHeight = '90vh'

  let modalDivClose = document.createElement('div')
  modalDivClose.classList.add('d-flex', 'justify-content-end', 'align-items-center')

  let modalClose = document.createElement('button')
  modalClose.classList.add('btn-close')
  modalClose.setAttribute('type', 'button')
  modalClose.setAttribute('data-bs-dismiss', 'modal')
  modalClose.setAttribute('aria-label', 'Close')

  let modalImage = document.createElement('img')
  modalImage.setAttribute('src', item.imageUrl)
  modalImage.setAttribute('alt', item['name'][locale])
  modalImage.style.maxWidth = '100%'
  modalImage.style.maxHeight = '80vh'

  parentElement.insertAdjacentElement('beforeend', modal)
  modal.insertAdjacentElement('beforeend', modalDialog)
  modalDialog.insertAdjacentElement('beforeend', modalContent)
  modalContent.insertAdjacentElement('beforeend', modalBody)
  modalBody.insertAdjacentElement('beforeend', modalDivClose)
  modalDivClose.insertAdjacentElement('beforeend', modalClose)
  modalBody.insertAdjacentElement('beforeend', modalImage)
}
