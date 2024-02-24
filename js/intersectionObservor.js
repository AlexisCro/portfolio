let options = {
  root: null,
  rootMargin: '0px',
  threshold: .5
}

let observer = new IntersectionObserver(callback, options)

let targetParent = document.getElementById('skill-gauge').parentElement
let target       = document.getElementById('skill-gauge')
observer.observe(targetParent)

function callback(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      target.style.display = 'flex'
    }
  })
}