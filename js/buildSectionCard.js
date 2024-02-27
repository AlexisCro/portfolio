import * as object from './icelandLibrary.js'
let library = object.object
console.log(library)

export function displayCard(divId) {
  console.log('displayCard')
  let parentElement = document.getElementById(divId)

  for(let item in library) {
    let card = document.createElement('div')
    card.classList.add('card', 'flex-shrink-1')
    card.style.width = '20rem'

    let image = document.createElement('img')
    image.setAttribute('src', library[item].imageUrl)
    image.setAttribute('alt', library[item].name)
    image.style.maxHeight = '180px'

    let cardBody = document.createElement('div')
    cardBody.classList.add('card-body', 'bg-black', 'text-center')
    cardBody.style.height = '100px'

    let cardTitle = document.createElement('h4')
    cardTitle.classList.add('text-white')
    cardTitle.textContent = library[item].name

    let button = document.createElement('button')
    button.classList.add('btn', 'btn-modal-card', 'w-100', 'h-100')
    button.setAttribute('type', 'button') 
    button.setAttribute('data-bs-toggle', 'modal')
    button.setAttribute('data-bs-target', `#zoom-${library[item].name.replaceAll(' ', '_')}`)

    let icon = document.createElement('i')
    icon.classList.add('fa-regular', 'fa-eye')

    parentElement.insertAdjacentElement('beforeend', card)
    card.insertAdjacentElement('beforeend', image)
    card.insertAdjacentElement('beforeend', cardBody)
    cardBody.insertAdjacentElement('beforeend', cardTitle)
    card.insertAdjacentElement('beforeend', button)
    button.insertAdjacentElement('beforeend', icon)
    createModal(divId, item)
  }
}

function createModal(divId, item) {
  let parentElement = document.getElementById(divId)

  let modal = document.createElement('div')
  modal.classList.add('modal', 'fade')
  modal.setAttribute('id', `zoom-${library[item].name.replaceAll(' ', '_')}`)
  modal.setAttribute('tabindex', '-1')
  modal.setAttribute('aria-labelledby', 'portfolioModalLabel')
  modal.setAttribute('aria-hidden', 'true')

  let modalDialog = document.createElement('div')
  modalDialog.classList.add('modal-dialog')

  let modalContent = document.createElement('div')
  modalContent.classList.add('modal-content')

  let modalBody = document.createElement('div')
  modalContent.classList.add('modal-body', 'pt-0')

  let modalDivClose = document.createElement('div')
  modalDivClose.classList.add('d-flex', 'justify-content-end', 'align-items-center')

  let modalClose = document.createElement('button')
  modalClose.classList.add('btn-close')
  modalClose.setAttribute('type', 'button')
  modalClose.setAttribute('data-bs-dismiss', 'modal')
  modalClose.setAttribute('aria-label', 'Close')

  let modalImage = document.createElement('img')
  modalImage.setAttribute('src', library[item].imageUrl)
  modalImage.setAttribute('alt', library[item].name)

  parentElement.insertAdjacentElement('beforeend', modal)
  modal.insertAdjacentElement('beforeend', modalDialog)
  modalDialog.insertAdjacentElement('beforeend', modalContent)
  modalContent.insertAdjacentElement('beforeend', modalBody)
  modalBody.insertAdjacentElement('beforeend', modalDivClose)
  modalDivClose.insertAdjacentElement('beforeend', modalClose)
  modalBody.insertAdjacentElement('beforeend', modalImage)
}
