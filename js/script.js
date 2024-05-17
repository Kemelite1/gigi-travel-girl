let searchButton = document.querySelector('#search-btn');;
let searchBar = document.querySelector('.search-bar-container');
let formButton = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbarMenu = document.querySelector('.navbar-menu');

window.onscroll = () => {
    searchButton.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbarMenu.classList.remove('active');
    loginForm.classList.remove('active');
};

searchButton.addEventListener('click', () => {
    searchButton.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbarMenu.classList.toggle('active');
});

formButton.addEventListener('click', () => {
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});