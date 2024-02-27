export function displayCard(divId, object) {
  let parentElement = document.getElementById(divId)

  for(item in object) {
    let card = document.createElement('div')
    card.classList.add('card')
}