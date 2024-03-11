let date = new Date(Date.now());
let year = date.getFullYear();
let copyright = document.getElementById('copyright');
let pElement = document.createElement('p');

pElement.classList.add('text-white-50');
pElement.innerHTML = `Copyright &copy; ${year}`;

copyright.insertAdjacentElement('beforeend', pElement);