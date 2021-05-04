// Your code goes here
const navLink = document.querySelector('nav');

navLink.addEventListener('click', function (event) {
     event.target.style.backgroundColor = 'red';
})
navLink.addEventListener('dblclick', function (event) {
    event.target.style.backgroundColor = 'white';
})

navLink.addEventListener('mouseenter', (event) => {
    event.target.textContent = textContent.toUpperCase()
})

const logo = document.querySelector('h1.logo-heading');

logo.addEventListener('mouseenter', function (event) {
    event.target.style.backgroundColor = 'blue';
})
logo.addEventListener('mouseout', function (event) {
    event.target.style.backgroundColor = 'white';
})

const textContent = document.querySelector('.text-content')

textContent.addEventListener('select', function (event) {
    console.log('selected this text')
})






