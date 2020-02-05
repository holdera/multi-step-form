// mobile js
const menuIcon = document.querySelector('.site-header__menu-icon');
const menu = document.querySelector('.site-header__menu-content');

function toggleMenu(e){
	const closeMenuBtn = 'site-header__menu-icon--close-x';
	const showMenu = 'site-header__menu-content--is-visible';
	menuIcon.classList.toggle(closeMenuBtn);
	menu.classList.toggle(showMenu);
}

menuIcon.addEventListener('click', toggleMenu);


