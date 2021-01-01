document.addEventListener('DOMContentLoaded', () => {

let year = document.getElementById('year')
let body = document.getElementsByTagName('body')

year.textContent = new Date().getFullYear();

})