var body = document.body;
var container = document.querySelector('[data-container]');
var menu = document.querySelector('[data-menu]');
var showMenu = document.querySelector('[data-menu-show]');
var hideMenu = document.querySelector('[data-menu-hide]');

menu.inert = true;

showMenu.addEventListener('click', function() {
  body.classList.add('js-toggle-menu');
  container.inert = true;
  menu.inert = false;
});

hideMenu.addEventListener('click', function() {
  body.classList.remove('js-toggle-menu');
  container.inert = false;
  menu.inert = true;
});